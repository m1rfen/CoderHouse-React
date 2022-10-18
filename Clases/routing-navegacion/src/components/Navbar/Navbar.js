import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"./"}>Home</Link>
        </li>
        <li>
          <Link to={"./people"}>People</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
