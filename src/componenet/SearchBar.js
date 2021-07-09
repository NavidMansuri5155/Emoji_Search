import React, { Component } from 'react';
import GitHubButton from 'react-github-btn'
import EmojiData from "./Emoji.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"



class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }


  render() {
    const { search } = this.state;

    const SearchFilter = EmojiData.filter(item => {
      if (item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        return true
      if (item.keywords.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        return true
      return false
    })


    return (
      <div>
        <div className="App">
          <h1>🦄 React Emoji Search 🦄</h1><br />
          <h4> A simple emoji search tool made with ReactJS.</h4>
          <GitHubButton href="https://github.com/NavidMansuri5155?tab=stars" data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star BraydenTW/react-emoji-search on GitHub">Star</GitHubButton>
          <form><br />
            <div className="form-group">
              <input type="text" placeholder="Emoji Search"
                onChange={this.handleChange} className="search" />
            </div>
          </form>
        </div>


        {SearchFilter.slice(7, 50).map((emoji, index) => {
          return <div key={index} className="items">

            <div className="container">
              <div className="row-6">
                <div className="col-lg-12">
                  <div className="card card-margin">
                    <div className="card-header no-border">
                      <h5 className="card-title">{emoji.title}</h5>
                    </div>
                    <div className="card-body pt-0">
                      <div className="widget-49">
                        <div className="widget-49-title-wrapper">
                          <div className="widget-49-date-primary">
                            <span className="widget-49-date-day">{emoji.symbol}</span>
                          </div>
                          <div className="widget-49-meeting-info">
                            <h5 className="card-title">{emoji.title}</h5>
                          </div>
                        </div>
                        <ol className="widget-49-meeting-points">
                          <span>{emoji.keywords}</span>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    );
  }
}

export default SearchBar;