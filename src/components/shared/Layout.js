import React from 'react'
import { render } from 'react-dom'

class Layout extends React.Component {

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default Layout
