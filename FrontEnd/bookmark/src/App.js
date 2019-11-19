import React, { Component } from 'react'
import axios from 'axios';
import './css/App.css';
import './css/skeleton.css';
import './css/normalize.css';
import NewForm from './components/NewForm.js'

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
  }

  async getBookmark() {
    try {
      const response = await axios(`${baseURL}/bookmark`);
      const data = response.data;
      this.setState({
        bookmark: data
      });
    } catch (error) {
      console.log(error);
    }

  }

  componentDidMount() {
    this.getBookmark();
  }

  render() {
    console.log(this.state.bookmark)
    return (
      <div>
        <header className='header'>
          <h1 className='title'>Bookmarks!</h1>
        </header>
        <div className='NewForm'>
          <NewForm />
        </div>
        <div>
          <table>
            <tbody>
              {
                this.state.bookmark.map((bookmark) => {
                  return <tr key={bookmark._id}>
                    <td>{bookmark.name}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;

