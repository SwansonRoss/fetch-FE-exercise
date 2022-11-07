const TextInput = (props) => {

    const handleChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <div className={"form-input"}>
            <label htmlFor={props.name}>{props.label}</label>
            <input 
                id={props.name} 
                name={props.name} 
                type={props.isSecret ? 'password' : 'text'} 
                onChange={(e)=>handleChange(e)} 
                value={props.value}
            />
        </div>
    )
}
export default TextInput;