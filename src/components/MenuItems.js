import Dropdown from "./Navbar/DropMenu/Dropdown";
import {useRef, useState} from "react";

export const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();



    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    return (
        <li
            className="menu-items"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >

            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{" "}
                    </button>
                    <Dropdown
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <a href="/#">{items.title}</a>
            )}

        </li>
    );
};


