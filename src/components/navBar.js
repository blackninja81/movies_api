import react from "react";
import "../index.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#" target="_blank">
              Movie Database
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;