import React, { Component } from "react";
import giphy from "giphy-api";
import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "HT7GlCUCH9lQZ5cVED",
    };
  }

  search = (query) => {
    giphy("SUyWgj9ghDECjbo1AxRu8ujJmSOsLmOe").search(
      {
        q: query,
        rating: "g",
        limit: 20,
      },
      (err, res) => {
        this.setState({
          gifs: res.data,
        });
      }
    );
  };

  render() {
    // array of gif id objects
    const gifs = [{ id: "HT7GlCUCH9lQZ5cVED" }, { id: "ykrjQmNNgN7GALFEVm" }];

    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
          >
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
