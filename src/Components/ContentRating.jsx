import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
      handleLike:() => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1,
            totalRatings: prevState.totalRatings + 1
          }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
            dislikes: prevState.dislikes + 1,
            totalRatings: prevState.totalRatings + 1
          }));
      }
      };
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     <div className='content-rating'>
        <p> These are AVI files. They are best suited for Windows Operating Systems. If you need mp4 files for your Mac, or would prefer a smaller file, check out our Hi-Res mp4 files. For iPhones or Smartphones, consider downloading our Lo-Res mp4 files.
            They are also available for purchase in our Non-Profit store.

            These videos are now hosted FREE OF CHARGE at archive.org. If you wish, you may donate to the project here.

            NOTE: To properly download the file, right-click on the link and choose "Save Target As" or "Save Link As" and choose a folder on your hard drive to save it to (for more details click here).
        </p>
        <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
        <p>Total Ratings: {this.state.totalRatings}</p>
     </div>
     </>
    );
  }
}

export default ContentRating;