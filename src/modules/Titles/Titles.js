import React from "react";

class Titles extends React.Component {
  render(){
    return (
      <div>
        <h1 className="title-container__title">Weather Widget</h1>
        <h3 className="container__subtitle">Find current temperatures, conditions and more...</h3>
      </div>
    );
  }
}

export default Titles;
