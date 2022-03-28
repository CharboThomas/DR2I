import '../../styles/Navbar.css'
import img from './logo.png'
import { menuItems } from "./menuItems";
import { MenuItems } from "../MenuItems"
import {useState} from "react";

const Navbar = () => {

    const [click, setClick] = useState(false);

    return (
        <nav className="navbar">

            <div className='menu-icon' onClick={() => setClick((prev) => !prev)}>

                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>


            <a className="navbar-logo" href="#">
                <img src={img} alt="..."/>
            </a>


            <ul className="menus">
                {menuItems.map((menu, index) => {
                    return <MenuItems items={menu} key={index}/>;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;