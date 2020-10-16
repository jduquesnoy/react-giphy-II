import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGidId: "14xzPQjU62JPbi",
    };
  
  }

  search = (query)=>{
    giphy('CFnBwwUaD1iFSoWAOgqP8xSORyE8POfq').search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      this.setState({
        gifs: result.data 
      });
    });
  }
  
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
              <Gif id={this.state.selectedGidId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div> 
      </div>
    );
  }
}

export default App;
