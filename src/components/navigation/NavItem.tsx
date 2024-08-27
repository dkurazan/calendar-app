import { NavLink } from "react-router-dom";
import sprite from "/sprite.svg?url";

const classes = "flex items-center h-[53px] capitalize text-[15px] text-white";

export default function NavItem({ route }: { route: string }) {
    return (
        <li>
            <NavLink
                to={route === "home" ? "/" : route}
                className={({ isActive }) =>
                    isActive
                        ? `bg-dark-purple before:block before:w-[5px] before:h-full before:bg-light-purple before:mr-[20px] ${classes}`
                        : `pl-[25px] ${classes}`
                }
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                >
                    <use href={sprite + "#" + route} />
                </svg>
                <span className="ml-[10px]">{route.replace("-", " ")}</span>
            </NavLink>
        </li>
    );
}
