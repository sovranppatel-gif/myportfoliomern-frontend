import { Link } from "react-router-dom";
function Navbar(){
    return(<>
     <nav class="navbar">
  <h2>Shivam Dixit</h2>
  <div class="nav-links">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </div>
    </nav>
    </>)
}
    export default Navbar;
