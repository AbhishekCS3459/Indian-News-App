import React, { Component } from 'react'

class NewsItem extends Component {
   
  render() {
    // take those props which you want to take
    let { tittle, description, imageUrl,newsUrl } = this.props
    return (
      <div className="my-3">
        <div className="card" style={{ width: '18rem' }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tittle}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl}  target="_blank"rel="noreferrer" className="btn btn-sm btn-warning">
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
