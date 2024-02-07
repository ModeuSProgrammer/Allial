import React from "react";

class Box extends React.Component {
  render() {
    const { className } = this.props
    const value = className
    return (
      <div className={value} >
        {this.props.children}
      </div >
    )
  }
}

export default Box