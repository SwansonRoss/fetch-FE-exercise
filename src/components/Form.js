import FormData from '../apis/FormData';
import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import OccupationDropdown from './OccupationDropdown';

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
            <Dropdown type={"state"} listItems={geoStates} />
            <Dropdown type={"occupation"} listItems={occupations} />
        </form>
    )

}

export default Form;