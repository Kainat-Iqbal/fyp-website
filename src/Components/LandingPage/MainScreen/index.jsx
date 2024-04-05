import * as React from "react";
import "./style.css";
import Dropdown from "react-bootstrap/Dropdown";

function MainScreen() {
  return (
    <div id="mainDivMainScreen">
      <div id="top">
        <p>Academic Accelerator</p>

        <Dropdown class='dropDown'>
          <Dropdown.Toggle id="dropdown-basic" style={{border: 'none'}}>
            Science
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Biochemistry</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Biotechnology</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown class='dropDown'>
          <Dropdown.Toggle style={{border: 'none'}}id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown class='dropDown'>
          <Dropdown.Toggle style={{border: 'none'}} id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown class='dropDown'>
          <Dropdown.Toggle style={{border: 'none'}} id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown class='dropDown'>
          <Dropdown.Toggle style={{border: 'none'}} id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div id="middle"></div>

      <div id="bottom"></div>
    </div>
  );
}
export default MainScreen;
