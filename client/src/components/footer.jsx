import React from "react";
import Image from "./Image";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        {this.props.children}
        <div className="container">
          <div className="block-logo" >
            <Image source="/img/logo.png" alt="Аллиал" className={"logo"} />
          </div>
        </div>
      </footer >
    )
  }
}
export default Footer; 