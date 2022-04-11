import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    articles=  [
       
       ];

       async componentDidMount(){

        let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=7053212c2b4d4634b2f1cbb70263f275";
        let data= await fetch(url);
        let parsedData= await data.json();
        this.setState({articles:parsedData.articles});

       }

       handleNext = async () => {
       
        this.setState({pagenumber: this.state.pagenumber+1});

        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=7053212c2b4d4634b2f1cbb70263f275&page=${this.state.pagenumber}`;

        let data = await fetch(url);
        let parsedData= await data.json();
        this.setState({articles:parsedData.articles});
      
      }
       handlePrevious =  async () => {

        this.setState({pagenumber: this.state.pagenumber-1});

        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=7053212c2b4d4634b2f1cbb70263f275&page=${this.state.pagenumber}`;
        let data= await fetch(url);
        let parsedData= await data.json();
        this.setState({articles:parsedData.articles});


       }

    constructor(){
        super();
        this.state={
            "status": "ok",
            "totalResults": 38,
            "articles": this.articles,
            "loading": false,
            "pagenumber": 1,
        }
    }
  render() {
    return (
      <>
        <div className="container my-4">
          <h2>News Monkey Top Headlines </h2>
      
          <div className="row">

          {this.state.articles.map((element)=>{

            return <div className="col md-4">
            <NewsItem
            key={element.url!==null?element.url:""}
              title={element.title!==null?element.title:""}
              description={element.description!==null?element.description:""}
              url={element.urlToImage!==null?element.urlToImage:"https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"}
              newsUrl={element.url!==null?element.url:""}
            />
          </div>

         



        })}
            

           
          </div>
        <div className="container d-flex justify-content-between">
        
        <button disabled={this.state.pagenumber<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious} > &laquo; Previos </button>

          <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &raquo;</button>
        </div>
          
        </div>

      </>
    );
  }
}

export default News;
