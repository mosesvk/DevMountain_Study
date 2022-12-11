import { useState } from 'react';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => (

    const isExpanded = index === expandedIndex

    <div key={item.id}>
      <div>{item.label}</div>
      <div>{item.content}</div>
    </div>
  ));

  return <div>{renderedItems}</div>;
};

export default Accordion;
