import React, { Component } from 'react';
import EmojiData from "./Emoji.json";
import Card from "./Card"
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
          <form><br />
            <div className="form-group">
              <input type="text" placeholder="Emoji Search"
                onChange={this.handleChange} className="search" />
            </div>
          </form>
        </div>


        {SearchFilter.slice(0, 50).map((emoji, index) => {
          return (
            <Card emoji={emoji} index={index} />
          )
        })}

      </div>
    );
  }
}

export default SearchBar;