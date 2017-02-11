import React, { Component } from 'react';

class VideoListItem extends Component {


  render() {
  const video = this.props.video
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  const videoSelect = this.props.onVideoSelect
    return (
<li onClick={() => videoSelect(video)} className="list-group-item">
  <div className="video-list media">
    <div className="media-left">
    <img className="media-object" src={imageUrl}/>
    </div>
    <div className="media-body">
    <div className="media-heading">{title}</div>
    </div>
  </div>
</li>
    );
  }

}
export default VideoListItem;
