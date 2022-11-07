import FormData from '../apis/FormData';
import { useEffect, useMemo, useState } from 'react';
import Dropdown from './Dropdown';
import TextInput from './TextInput';

const Form = (props) => {

    const formDataHandler = useMemo(() => {return new FormData()}, []);

    const [occupations, setOccupations] = useState([]);
    const [geoStates, setGeoStates] = useState([])  

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [inputState, setInputState] = useState(null);
    const [occupation, setOccupation] = useState(null);

    useEffect(() => {
        formDataHandler
        .fetchFormSetupData()
        .then(({occupations, states}) => {
            setOccupations(occupations);
            setGeoStates(states);
        })
        .catch((error) => console.error(error))
    }, [formDataHandler]);

    const hashPassword = (password) => {
        //TODO: Implement some acutal password hashing
        return "TRIVIALLYHASHEDPASSWORD";
    }

    const submitForm = (e) => {
        e.preventDefault();
        const formValues = {
            "name": name,
            "email": email,
            "password": hashPassword(password),
            "occupation": occupation,
            "state": inputState
        }
        if(Object.values(formValues).every((val) => val ? true : false)){
            formDataHandler.submitFormData(formValues)
                .then((res) => {
                    setName('');
                    setEmail('');
                    setPassword('');
                    setInputState('');
                    setOccupation('');
                })
                .then((res) => {
                    const error = [{
                        isError: false
                    }]
                    props.useWarning(error);
                })
                .catch((err) => {
                    const error = [{
                        isError: true,
                        message: err
                    }]
                    props.useWarning(error);
                })
        } else {
            const error = [{
                isError: true,
                message: 'form missing values'
            }]
            props.useWarning(error);
        }
    }

    return (
        <div className={"form-container"}>
            <form onChange={() => props.useWarning([])}>
                <TextInput 
                    isSecret={false} 
                    name={"name"} 
                    onChange={setName} 
                    label={"Full Name"}
                    value={name}
                />
                <TextInput 
                    isSecret={false} 
                    name={"email"} 
                    onChange={setEmail} 
                    label={"Email Address"}
                    value={email}
                />
                <TextInput 
                    isSecret={true} 
                    name={"password"} 
                    onChange={setPassword} 
                    label={"Password"}
                    value={password}
                />
                <Dropdown 
                    type={"state"} 
                    listItems={geoStates} 
                    onChange={setInputState} 
                    label={"Home State"}
                    value={inputState}
                />
                <Dropdown 
                    type={"occupation"} 
                    listItems={occupations} 
                    onChange={setOccupation} 
                    label={"Occupation"}
                    value={occupation}
                />
                <button className={"form-button"} onClick={(e) => submitForm(e)}>Submit</button>
            </form>
        </div>
    )

}

export default Form;