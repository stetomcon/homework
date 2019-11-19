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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
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
                <div className = 'form'>
                    <input type='text' id='name' name='name' onChange={this.handleChange} value={this.state.name}  className = 'input'></input>
                    <input type='text' id='address' name='address' onChange={this.handleChange} value={this.state.address} className = 'input'></input>
                </div>
                <input type='submit' value='Add' className = 'submit'></input>
            </form>
        )
    }
}

export default NewForm