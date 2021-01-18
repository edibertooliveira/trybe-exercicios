import React, { Component } from "react";
import PageHeader from "./PageHeader";
import PageContent from "./PageContent";
class PageRoute extends Component {
  render() {
    return (
      <div className="page-route">
        <PageHeader>
          <p>Trybe Page</p>
        </PageHeader>
        <PageContent />
      </div>
    );
  }
}

export default PageRoute;
