import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  // eslint-disable-next-line
  const [selection, setSelection] = useState(null);
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const handleSelect = (option) => {
    console.log("The new selected option is: " + option.label);
    setSelection(option);
  };
  return (
    <Dropdown
      options={options}
      onChange={handleSelect}
      value={selection}
    />
  );
}

export default DropdownPage;
