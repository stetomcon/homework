import React, { Component } from 'react';
import axios from 'axios'


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
            [event.currentTarget.id]: event.currentTarget.value
        })
    }

    async handleSubmit(event) {
        event.preventDefault();
        // const baseURL = this.props.baseURL;
        const response = await axios.post(`${this.props.baseURL}/bookmark`,
            { name: this.state.name, address: this.state.address });


        this.setState({
            name: '',
            address: ''
        });
        console.log('works')
        this.props.handleAddBookmark(response.data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'></label>
                <div className='form'>
                    <input type='text' id='name' name='name' onChange={this.handleChange} value={this.state.name} className='input' placeholder="Link"></input>
                    <input type='text' id='address' name='address' onChange={this.handleChange} value={this.state.address} className='input' placeholder="www.link.com"></input>

                    <input type='submit' className="buttons" value='Bookmark' className='submit'></input>
                </div>
            </form>
        )
    }
}

export default NewForm