import React, { Component } from "react";

export class NewsItem extends Component {

  
  render() {
    let { title, description ,url,newsUrl} = this.props;
    return (
      <>
        <div className="card my-3" style={{width: '18rem',}}>
          <img src={url} className="card-img-top" alt="..." ></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
