import React from 'react'
import Link from './Link'

const Sidebar = () => {

    const links = [
        {label: 'Dropdown', path: '/'},
        {label: 'Accordion', path: '/accordion'},
        {label: 'Buttons', path: '/buttons'},
    ]

    const renderedLinks = links.map((link) => {
        return <Link key={link.label} to={link.path}>{link.label}</Link>
    })

  return (
    <div>Sidebar</div>
  )
}

export default Sidebar