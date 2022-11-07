import Warning from "./Warning"
const Header = ({warning}) => {
    return(
        <header>
            <h1>Enter your contact info</h1>
            {(warning.length) ? <Warning warning={warning[0]} /> : ''}
            
        </header>
    )
}
export default Header;