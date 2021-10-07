import logo from "../../assets/images/logo.png"

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="navbar-nav">
                <div className="navbar-brand-container">
                    <img src={logo} alt="brand-logo" className="navbar-brand"></img>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;