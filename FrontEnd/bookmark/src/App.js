import React, { Component } from 'react'
import axios from 'axios';
import './css/App.css';
import './css/index.css';
import './css/skeleton.css';
import './css/normalize.css';
import NewForm from './components/NewForm.js'
import Image from './components/Image.js'
import Show from './components/Show.js'
import Mouse from './Image/Mouse.png'
import Book from './Image/book.png'

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}

console.log(baseURL)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmark: []
    }
    this.getBookmark = this.getBookmark.bind(this);
    this.deleteBookmark = this.deleteBookmark.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this)
  }

  async getBookmark() {
    try {
      const response = await axios(`${baseURL}/bookmark`);
      const data = response.data;
      this.setState({
        bookmark: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleAddBookmark(bm) {
    this.setState({
      bookmark: [...this.state.bookmark, bm]
    })
  }

  async deleteBookmark(id) {
    console.log(id);
    await axios.delete(`${baseURL}/bookmark/${id}`);
    const filterBookmark = this.state.bookmark.filter((bookmark) => {
      return bookmark._id !== id
    });
    this.setState({
      bookmark: filterBookmark
    })
  }

  componentDidMount() {
    this.getBookmark();
  }


  render() {

    console.log(this.state.bookmark)
    return (

      <div>

        <header className='header'>
          <Image />
        </header>

        <div className='NewForm'>

          <NewForm handleAddBookmark={this.handleAddBookmark} baseURL={baseURL} />
        </div>

        <div >
          <Show baseURL={baseURL}
            bookmark={this.state.bookmark}
            getBookmark={this.getBookmark}
            deleteBookmark={this.deleteBookmark}
          />
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default App;


