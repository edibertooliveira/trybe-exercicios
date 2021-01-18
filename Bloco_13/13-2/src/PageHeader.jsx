import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageHeader extends Component {
  render() {
    return (
      <header>
        LOGO:
        <nav>
          <span>
            <Link to="/">Page1</Link>
          </span>
          <span>
            <Link to="/Page2">Page2</Link>
          </span>
          <span>
            <Link to="/Page3">Page3</Link>
          </span>
        </nav>
      </header>
    );
  }
}

export default PageHeader;
