import { Link } from "react-router-dom";


function Header({name}) {
  
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/logIn">Login</Link>
        </li>
      </ul>
      <p> hello {name}</p>
    </div>
    
  );
}
export default Header;
