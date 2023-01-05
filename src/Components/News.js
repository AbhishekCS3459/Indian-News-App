import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
  //   {
  //     "source": {
  //         "id": "new-scientist",
  //         "name": "New Scientist"
  //     },
  //     "author": null,
  //     "title": "The green tech that could help Iceland become carbon neutral by 2040",
  //     "description": "Iceland is developing a suite of technologies to help it reach carbon neutrality by 2040 – and its research could help other countries go green too",
  //     "url": "https://www.newscientist.com/article/mg25634202-900-the-green-tech-that-could-help-iceland-become-carbon-neutral-by-2040/",
  //     "urlToImage": "https://images.newscientist.com/wp-content/uploads/2023/01/04112818/SEI_138357206.jpg",
  //     "publishedAt": "2023-01-04T00:00:00Z",
  //     "content": "By Michael Le Page\r\nThe geodesic dome of the CarbFix CO2 injection site\r\nMichael Le Page\r\nInside a small, geodesic dome near Iceland’s Hellisheiði geothermal power station, water full of carbon dioxi… [+335 chars]"
  // }
  ]
  constructor() {
    super()
    console.log('Hello I am a constructior fform news comp.')
    this.state = {
      articles: this.articles,
      loading: false,
    }
  }
  async componentDidMount(){
    // tis componentdidmount runs after the render function runs
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ba4d97e8640f45d19149d26f024d39f7";
    let data=await fetch(url);
    let parsedData =await data.json()
    this.setState({articles:parsedData.articles})
    console.log(parsedData)

  }
  render() {
    return (
      <div className="container my-3">
        <h1>Today News</h1>

        <div className="row">
        {this.state.articles.map((element) => {
              // console.log(element)
              return ( <div key={element.url} className="col md-4 col  ">
           
              {/* This is a class component --> newsitem and we are sending the variable image url , desciptn, tittle as props to it  */}
              <NewsItem 
                tittle={element.title?element.title.slice(0,40):" "}
                description={element.description?element.description.slice(0,88):" "}
                newsUrl={element.url}
                imageUrl={element.urlToImage?element.urlToImage:"https://c.ndtvimg.com/2023-01/5joeid2o_satya-nadella-chatgpt-getty-650_625x300_05_January_23.jpg"}
              />
            </div>);
            })}
         
        </div>
      </div>
    )
  }
}

export default News
