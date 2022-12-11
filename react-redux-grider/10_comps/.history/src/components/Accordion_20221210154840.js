import React from 'react'

const Accordion = ({items}) => {

    const renderedItems = items.map(item => (
        <div>
            <div>{item.label}</div>
            <div>{item.content}</div>
        </div>
    ))

  return (
    <div>{renderedItems}</div>
  )
}

export default Accordion