const Dropdown = (props) => {

    const handleChange = (e) => {
        props.onChange(e.target.value);
    }

    switch(props.type){
        case "state":
            return(
                <div className={"form-input"}>
                    <label for={props.type}>{props.label}</label>
                    <select name={props.type} id={props.type} onChange={(e) => handleChange(e)}>
                        <option value={null}>Select a state...</option>
                        {props.listItems.map(({name, abbreviation}) => (
                            <option key={abbreviation} value={abbreviation}>{name}</option>
                        ))}
                    </select>
                </div>


            )
        case "occupation":
            return(
                <div className={"form-input"}>
                    <label for={props.type}>{props.label}</label>
                    <select name={props.type} id={props.type} onChange={(e) => handleChange(e)}>
                        <option value={null}>Select an occupation...</option>
                        {props.listItems.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                
            )
        default:
            return;
    }
    
    
}
export default Dropdown;