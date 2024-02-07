import React from "react";

class Button extends React.Component {
  render() {
    const { classN, text } = this.props
    return (
      <button className={classN}>{text}</button>
    )
  }
}
export default Button