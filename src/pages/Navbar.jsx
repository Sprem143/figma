import "./Navbar.scss";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Home from "./Home";
import { useState, useEffect } from "react";
import Footer from "./Footer";
export default function Navbar() {
// --------time function
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };
    const intervalId = updateCurrentTime;
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <div className="nave">
        <div className="searchBox">
          <input className="box" type="text" placeholder="Search" />
          <button className="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
        <Link className="text-white hideformobile" to="categories">
          Categories
        </Link>
        <Link className="text-white hideformobile" to="builders">
          Website Builders
        </Link>
        <Link className="text-white deal" to="deals">
          Today's deals
        </Link>
        {/* mobile view option */}
        <Dropdown id="nav-dropdown">
      <Dropdown.Toggle className="p-2" variant="success" id="dropdown-basic" >
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Categories</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Website Builders</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
      <div className="headr">
      <h1>Best Website builders in the US</h1>
      <div className="dfdc" style={{justifyContent:"space-between", borderTop:"1px solid grey", borderBottom:"1px solid grey"}}>
        <div className="dfdc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
          </svg>
          <p>Last updated-{currentTime.toLocaleTimeString()}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-exclamation-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
          </svg>
          <p>Advertising Disclosure</p>
        </div>
       <div>
       <Dropdown>
          <Dropdown.Toggle
            className="p-2"
            variant="success"
            id="dropdown-basic"
          >
            Top Relevent
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Categories</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Website Builders</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
       </div>
      </div>
      <br />
      <div className="dfdc" style={{justifyContent:"space-between"}}>
        <p>Tools</p>
        <p>AWS Builder</p>
        <p>Start Build</p>
        <p>Build Supplies</p>
        <p>Tooling</p>
        <p>BlueHosting</p>
      </div>
      <br />
      <p style={{fontSize:"small"}}>Home&nbsp;&gt;&nbsp;Hosting for all&nbsp;&gt;&nbsp;Hosting&nbsp;&gt;&nbsp;Hosting6&nbsp;&gt;&nbsp;Hosting5 </p>
      </div>

      <Home/>
      <Footer />
    </>
  );
}
