import { useState } from 'react';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = () => {
    setExpandedIndex(index)
}

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
        <span>
            {isExpanded ? 'DOWN' : 'LEFT'}
        </span>
    )

    return (
      <div key={item.id}>
        <div onClick={handleClick} >{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
