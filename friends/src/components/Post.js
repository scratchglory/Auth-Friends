import React from "react";
// import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsList from "./FriendsList";

class Post extends React.Component {
  state = {
    info: {
      id: "",
      name: "",
      age: "",
      email: ""
    },
    friendsList: []
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
    // axios.post method takes two arguments
    // 1. url
    // 2. 'data' we need to post to the BE server, then chaned with 'then' and 'catch' method
    const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .post("/api/friends", data)
      .then(res => {
        console.log(res.data);
        this.state.friendsList = res.data;
      })
      .catch(err => console.log("POST-ERROR: ", err));
  };

  idChange = e => {
    this.setState({
      id: e.target.value
    });
  };
  nameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  ageChange = e => {
    this.setState({
      age: e.target.value
    });
  };
  emailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  // create form
  render() {
    return (
      <div className="post">
        <form onSubmit={this.handleSubmit}>
          <input
            name="id"
            value={this.state.id}
            onChange={this.idChange}
            placeholder="id"
          />
          <input
            name="name"
            value={this.state.name}
            onChange={this.nameChange}
            placeholder="name"
          />
          <input
            name="age"
            value={this.state.age}
            onChange={this.ageChange}
            placeholder="age"
          />
          <input
            name="email"
            value={this.state.email}
            onChange={this.emailChange}
            placeholder="email"
          />
          <button type="submit">HELLO NEW FRIEND!</button>
        </form>
        <div>
          {this.state.friendsList.map(friend => (
            <div>
              <h3>{friend.name}</h3>
              <p>{friend.age}</p>
              <p>EMAIL: {friend.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Post;
