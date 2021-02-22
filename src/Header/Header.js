import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "raja" };
  }
  render() {
    return <div className="row bg-success">This is header</div>;
  }
}

export default Header;
