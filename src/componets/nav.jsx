import { NavLink } from "react-router-dom";
function Nav(){
    return (
        <>
            <nav>
                <h1 className="logo">Logo</h1>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to="/about/">About</NavLink></li>
                    <li><NavLink to="/fech/">Fech</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav