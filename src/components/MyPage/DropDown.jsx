import { Link } from "react-router-dom";
import { DropDownMenu } from "./DropDownMenu";

const DropDown = () => {
  return (
    <>
      <ul
        className={"dropdown-menu show clicked"}
        style={{ position: "absolute" }}
      >
        {DropDownMenu.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <Link className={item.cName} to={item.path}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropDown;
