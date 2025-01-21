// src/components/login/LoginInput.jsx

import React from 'react';

export default function LoginInput({ title, type, setUserData }) {
  const handleInputChange = (e) => {
    let objKey;
    if(type=="email"){
        objKey = "username"
    }
    else{
        objKey = "password"
    }
    // Update the user data state based on the input type and value
    setUserData((prevData) => ({
      ...prevData,
      [objKey]: e.target.value, // Create a dynamic key for the input
    }));
  };

  return (
    <div>
      <p className="text-left text-custom-black mt-4 font-entry-title">{title}</p>
      <input
        onChange={handleInputChange}
        className="text-custom-black h-input-h w-full border-2 border-input-border rounded-md outline-none px-1"
        type={type}
        placeholder={title}
      />
    </div>
  );
}
