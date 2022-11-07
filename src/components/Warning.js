const Warning = ({warning}) => {
    console.log(warning)
    return (
        <div className={`message ${warning.isError ? "error" : "success"}`}>
            <p>{warning.isError}</p>
            <h2>{warning.isError ? "Could not submit form" : "Form submitted successfuly"}</h2>
            {warning.isError ? (
                <ul>
                    <li>{warning.message}</li>
                </ul>
            ): (
            ''
            )
            }
        </div>
    )
}
export default Warning;