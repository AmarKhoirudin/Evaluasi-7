import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Components/Navbar.css";

export default class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .get("https://api.rss2json.com/v1/api.json?rss_url=http://rss.detik.com/")
      .then(res => {
        this.setState({ data: res.data.items });
      });
  }

  signOut = () => {
    localStorage.removeItem("token");
  };

  render() {
    const { data } = this.state;
    console.log(this.state);

    return (
      <div>
        <button type="button" onClick={this.signOut} className="logout" >
          <Link to="/">Logout</Link>
        </button>
        {data.map(data => {
          return (
            <div key={data.pubDate} className="news">
              <hr></hr>
              <a href={data.link}>
                <h1>{data.title}</h1>
                <div className="img">
                  <img alt="" src={data.thumbnail} />
                </div>
              </a>
              <p className="news">{data.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
