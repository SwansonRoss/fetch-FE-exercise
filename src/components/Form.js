import FormData from '../apis/FormData';
import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import TextInput from './TextInput';

const Form = () => {

    const formDataHandler = new FormData();
    const hashAlg = "SHA-256";

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
    }, []);

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
                    //todo: reset form fields
                    
                })
        } else {
            //TODO: display error message.
            console.error('Form missing values')
        }
    }

    return (
        <form>
            <TextInput isSecret={false} name={"name"} onChange={setName}/>
            <TextInput isSecret={false} name={"email"} onChange={setEmail}/>
            <TextInput isSecret={true} name={"password"} onChange={setPassword}/>
            <Dropdown type={"state"} listItems={geoStates} onChange={setInputState}/>
            <Dropdown type={"occupation"} listItems={occupations} onChange={setOccupation}/>

            <button onClick={(e) => submitForm(e)}>Submit</button>
        </form>
    )

}

export default Form;