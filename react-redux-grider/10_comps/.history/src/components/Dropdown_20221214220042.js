import { useState } from 'react';

function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState('Select...')

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(!isOpen)
    setSelect(option.value)
  }

  const renderedOptions = options.map((option) => {
    return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>;
  });

  return (
    <div>
      <div onClick={handleClick}>{select}.</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;