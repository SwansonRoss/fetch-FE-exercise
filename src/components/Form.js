import FormData from '../apis/FormData';
import { useEffect, useState } from 'react';

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
            <p>Num states {geoStates.length}</p>
            <p>Num Occus {occupations.length}</p>
            
        </form>
    )

}

export default Form;