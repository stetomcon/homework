import React, {Component} from 'react';
// import axios from 'axios'

class NewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        // const baseURL = this.props.baseURL;
        // const response = await axios.post(`${baseURL}/bookmarks`, {name: this.state.name});
        this.setState({
            name: '',
            address: ''
        });
        console.log('Works');
        // this.props.handleAddHoliday(response.data);
        // this.props.getHolidays();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor=''></label>
                <input type='text' id='name' name='name' value={this.state.name}></input>
                <input type='text' id='address' name='address' value={this.state.address}></input>
                <input type='submit' value='Add'></input>
            </form>
        )
    }
}

export default NewForm