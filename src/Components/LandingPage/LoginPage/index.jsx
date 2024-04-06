import * as React from "react";
import "./style.css";

function LoginPage() {
  return (
    <div id="mainLoginDiv">
      <div id="loginForm">
        <h1>
          <i>Academic Accelerator</i>
        </h1>
        <form>
          <div id="formField">
            <label>Email</label>
            <input type="email" placeholder="abc@gmail.com"></input>
          </div>
          <div id="formField">
            <label>Password</label>
            <input type="password"></input>
          </div>
          <button style={{borderRadius:'15px',width: '17vw',marginTop:'2vh'}}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;