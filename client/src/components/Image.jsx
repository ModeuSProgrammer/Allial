import React from "react";

class Image extends React.Component {
  render() {
    const { source, alt, className } = this.props
    const path = source
    const title = alt
    const classN = className ? className : ''
    return (
      <div>
        <img src={path} alt={title} className={classN} />
      </div>
    )
  }
}
export default Image