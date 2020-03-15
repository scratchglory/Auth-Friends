import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Post extends React.Component {
  state = {
    id: "",
    name: "",
    age: "",
    email: ""
  };

  // CHANGE HANDLERS
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
  };

  // create form
  render() {
    return (
      <div className="post">
        <form onSubmit={this.handleSubmit}>
          <input name="id" value={this.state.id} />
          <input name="name" value={this.state.name} />
          <input name="age" value={this.state.age} />
          <input name="email" value={this.state.email} />
        </form>
      </div>
    );
  }
}
