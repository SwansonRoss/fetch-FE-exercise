import FormData from '../apis/FormData';
import { useEffect, useState } from 'react';
import StateDropdown from './StateDropdown';

const Form = () => {

    const [occupations, setOccupations] = useState([]);
    const [geoStates, setGeoStates] = useState([])
  
    useEffect(() => {
        new FormData()
        .fetchFormSetupData()
        .then(({occupations, states}) => {
            setOccupations(occupations);
            setGeoStates(states);
        })
        .catch((error) => console.error(error))
    }, []);

    return (
        <form>
            <label>Hello World</label>
            <StateDropdown listItems={geoStates} />
        </form>
    )

}

export default Form;