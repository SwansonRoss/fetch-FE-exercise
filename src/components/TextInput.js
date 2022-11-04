const TextInput = (props) => {

    const handleChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <input type={props.isSecret ? 'password' : 'text'} onChange={(e)=>handleChange(e)}/>
    )
}
export default TextInput;