const StateDropdown = (props) => {
    
    return(
        <select name={"state"} id={"state"}>
            {props.listItems.map(({name, abbreviation}) => (
                <option key={abbreviation} value={abbreviation}>{name}</option>
            ))}
        </select>
    )
}
export default StateDropdown;