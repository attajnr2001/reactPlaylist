import { NavLink } from "react-router-dom";

function LinkButton({ link, linkText }) {
  return (
    <NavLink className={"navLink"} to={link}>
      {linkText}
    </NavLink>
  );
}

export default LinkButton;
