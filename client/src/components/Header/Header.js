import React from 'react'
import './header.css'

export default ({ lvl, children, ...props }) => {
  switch (lvl) {
    case 'h1':
      return (<h1 className='h1' {...props}>{children}</h1>)
    case 'h2':
      return (<h2 className='h2' {...props}>{children}</h2>)
    case 'h3':
      return (<h3 className='h3' {...props}>{children}</h3>)
    case 'h4':
      return (<h4 className='h4' {...props}>{children}</h4>)
    case 'h5':
      return (<h5 className='h5' {...props}>{children}</h5>)
    default:
      return <span>{children}</span>
  }
}
