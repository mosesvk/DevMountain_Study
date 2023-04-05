import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (nextIdx) => {
    setExpandedIndex(nextIdx);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>;

    return (
      <div key={item.id}>
        <div className='flex p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={handleClick}>
          {icon}
          {item.label}
        </div>
        {isExpanded && <div className='border-x border-t rounded' >{item.content}</div>}
      </div>
    );
  });

  return <div className='border-x border-t rounded' >{renderedItems}</div>;
};

export default Accordion;