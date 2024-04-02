import React from "react";
import Users from "../components/Users";
import Admins from "../components/Admins";
import Posts from "../components/Posts";
import { useState } from "react";
import "./Admin.css";

export default function Admin() {
    const [selectedOption, setSelectedOption] = useState('A');
    const renderComponent = (option) => {
        setSelectedOption(option);
      };
    
    return (
        <div className="containerAdmin">
        <div className="options">
          <button onClick={() => renderComponent('A')}>Manage user's accounts</button>
          <button onClick={() => renderComponent('B')}>Add an admin</button>
          <button onClick={() => renderComponent('C')}>Manage user's posts</button>
        </div>
        <div className="content">
          {selectedOption === 'A' && <Users />}
          {selectedOption === 'B' && <Admins />}
          {selectedOption === 'C' && <Posts/>}
        </div>
      </div>
    );
};