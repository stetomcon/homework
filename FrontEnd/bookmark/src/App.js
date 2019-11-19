import React, {Component} from 'react'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import NewForm from './components/NewForm.js'

let baseURL = process.env.REACT_APP_BASEURL

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmark: []
    }
    this.getBookmark = this.getBookmark.bind(this);
  }

async getBookmark() {
  const response = await axios(`${baseURL}/bookmarks`);
  const data = response.data;
  this.setState({
    bookmark: data
  });
}

componentDidMount() {
  this.getBookmark();
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookmarks</h1>
      </header>
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
