import { useState } from "react";
import toast from "react-hot-toast";
import clsx from "clsx";
import s from "./Header.module.css";

const Header = ({ handleSetValue }) => {
  const [value, setValue] = useState("");
  const handleValue = (e) => {
    setValue(e.target.value.trim(""));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      toast("Oops the request is empty! Fill the field with your request!", {
        duration: 2500,
        position: "top-center",
        style: {
          background: "#0099ff",
          color: "white",
          fontSize: 16,
        },
      });
    }

    handleSetValue(value);
    console.log(value);
    setValue("");
  };

  return (
    <header className={clsx(s.header)}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleValue}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header;
