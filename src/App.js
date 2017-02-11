import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyCyOrVqBQuafDcYCW90zRmGd5TbogDuDd4';



class App extends Component {
  constructor(props){
  super(props);

  this.state = {videos :[], selectedVideo : null};

  this.videoSearch('cats');
  }

  videoSearch(term){

    YTSearch({key:API_KEY, term:term},(videos)=>{

      this.setState({videos:videos, selectedVideo:videos[0]});
  //console.log(this.state.videos);

    });

  }


  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);


    return (
      <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
      </div>

    );
  }
}

export default App;
