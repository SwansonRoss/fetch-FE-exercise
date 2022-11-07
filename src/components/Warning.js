const Warning = (props) => {
    return (
        <div className={"error-message"}>
            <h2>Could not submit form</h2>
            <ul>
                <li>Complete all form fields</li>
            </ul>
        </div>
    )
}
export default Warning;