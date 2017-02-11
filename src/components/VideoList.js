import React, { Component } from 'react';
import VideoListItem from './VideoListItem';





const VideoList = (props) => {
  const videoItems =  props.videos.map((video)=>{
      console.log("video"+video);
    return  <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video}/>

    });



    return (
    <ul className="col-md-4 list-group">
    {videoItems}
    </ul>
    );


}
export default VideoList;
