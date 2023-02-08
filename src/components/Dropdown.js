import { useEffect, useState, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, onChange, value }) {
  // eslint-disable-next-line
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {

      if(!divEl.current){
        return;
      }

      if(!divEl.current.contains(event.target)){
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    }
  }, []);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => {
          handleOptionClick(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-48 relative" ref={divEl}>
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className='text-lg'/>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
