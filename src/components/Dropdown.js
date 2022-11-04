const Dropdown = (props) => {

    switch(props.type){
        case "state":
            return(
                <select name={"state"} id={"state"}>
                    {props.listItems.map(({name, abbreviation}) => (
                        <option key={abbreviation} value={abbreviation}>{name}</option>
                    ))}
                </select>
            )
        case "occupation":
            return(
                <select name={"occupation"} id={"occupation"}>
                    {props.listItems.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
            )
        default:
            return;
    }
    
    
}
export default Dropdown;