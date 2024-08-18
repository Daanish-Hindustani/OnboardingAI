"use client"
import { useState } from "react";

const NameComponent = () => {
const [name, setName] = useState("User");
  return (
    <div className="whitespace-nowrap">
      <h1 className="font-bold text-2xl">Welcome Back, {name}</h1>
    </div>
  );
};

export default NameComponent;