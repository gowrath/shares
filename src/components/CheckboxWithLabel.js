import fakeApiData from "./data/subs.json";
import {
  Button,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";
//import { Link } from 'react-router-dom';
//import Profile from "./Profile";
import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

/* function Name() {
  
  const [name, setName] = useLocalStorage("name", "");
  const [checked, setChecked] = useLocalStorage( false);

  return (
    <form>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Full name"
      aria-label="fullname"
    />
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />{" "}
      Not a robot?
    </label>
    <input type="submit" value="Submit"></input>
  </form>
  );
};


export default Name;
 */

export default function CheckboxWithLabel({ labelOn, labelOff }) {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
}
