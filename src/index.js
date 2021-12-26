import React from "react";
import ReactDOM from "react-dom";
import unsplash from "./api/unsplash";

import { SearchBar } from "./components/SearchBar";
import ImageList from "./components/ImageList";

import './components/ImageList.css';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

  /* onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
        },
        headers: {
          Authorization:
            "Client-ID ylNA5YvZxdVpA3JlDDzHLKGiLORiRdULnHZScox_KUM",
        },
      })
      .then(response => {
        console.log(response.data.results);
      });
  }*/


  /*onSearchSubmit = async (term) => {
    
    const response = await axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
        },
        headers: {
          Authorization:
            "Client-ID ylNA5YvZxdVpA3JlDDzHLKGiLORiRdULnHZScox_KUM",
        },
      });

    this.setState({images: response.data.results});
  } */
