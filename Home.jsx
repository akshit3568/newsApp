import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      totalResults: 0,
      articles: [],
      page: 1,
      size: 18
    }
  }
  async getAPIData() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&sortBy=publishedAt&language=${this.props.language}&apiKey=d00a4e72f80c4be09659ded999cc3886`)
    response = await response.json()
    if(response.articles){
      this.setState({
        articles: response.articles.filter((x) => x.title !== "[Removed]")
      })
    }
  }
  fetchData = async () => {
    this.setState({ page: this.state.page + 1 })
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=${this.state.page}&pageSize=${this.state.size}&sortBy=publishedAt&language=${this.props.language}&apiKey=d00a4e72f80c4be09659ded999cc3886`)
    response = await response.json()
    if(response.articles){
      this.setState({
        articles: this.state.articles.concat(response.articles.filter((x) => x.title !== "[Removed]"))
      })
    }
  }
  componentDidMount() {
    this.getAPIData()
  }
  componentDidUpdate(oldProps) {
    console.log("hello")
    if (oldProps !== this.props) {
      this.getAPIData()
    }


  }
  render() {
    return (
      <div className="container-fluid">
        <h5 className='background text-center text-light p-2 mt-2 text-capitalize'>{this.props.q} News Articles</h5>
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length<this.state.totalResults}
          loader={<h4>Loading...</h4>}
          
        >
          <div className="row">
            {
              this.state.articles.map((item, index) => {
                return <NewsItem
                  key={index}
                  source={item.source.name}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  pic={item.urlToImage}
                  date={item.publishedAt}
                />

              })
            }
          </div>
        </InfiniteScroll>
      </div >
    )
  }
}
