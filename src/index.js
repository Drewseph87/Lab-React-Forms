import React, { useState } from "react";
import ReactDOM from "react-dom";

const Form = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState(''); 

  const handleSubmit = (event) => {
    // const username = event.target.username.value;
    console.log(username);
    event.preventDefault();
    setUsername("");
    setPassword("");
    console.log(password);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
    //console.log(setIsername);
  };

  return (
    <div id="container">
      <div id="navbar">Form.js</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <label htmlFor='password'>Password:</label>
        <input 
        type='password' name='password' value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Submit:</button>
      </form>
    </div>
  );
};

ReactDOM.render(<Form />, document.getElementById("app"));
