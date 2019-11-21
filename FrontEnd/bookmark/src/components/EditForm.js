import React, { Component } from 'react';
import axios from 'axios';

class EditForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            editButton: false
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleEditButton = this.handleEditButton.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    componentDidMount() {
        console.log('Edit Form Mounted');
        this.setState({
            name: this.props.bookmark.name,
            address: this.props.bookmark.address,
            id: this.props.bookmark._id,
            singleBookmark: this.props.bookmark

        });
    }

    handleOnChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    async handleEditSubmit(event) {
        try {
            event.preventDefault();
            console.log('Submitted');
            const url = `http://localhost:3003/bookmark/${this.state.id}`;
            const payload = {
                name: this.state.name,
                address: this.state.address
            }
            const updatedBookmark = await axios.put(url, payload);
            console.log('PUT: ', updatedBookmark);
            this.props.getBookmark();
            this.setState({
                name: '',
                address: ''
            });
        } catch (err) {
            console.log('Update Submit Error: ', err);
        }
    }
    async handleEditButton() {
        console.log('Clicked Edit Button');
        await this.setState({
            editButton: !this.state.editButton,
        });
    }


    showEdit() {
        return (
            <form onSubmit={this.handleEditSubmit}>
                <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
                <input type="text" name="address" value={this.state.url} onChange={this.handleOnChange} />
                <input type="submit" value="Update Bookmark" />
            </form>
        );
    }

    render() {
        const showEditForm = this.state.editButton ? this.showEdit() : null;
        return (
            <div>
                <button onClick={this.handleEditButton}>E</button>
                {showEditForm}
            </div>
        );
    }
}

export default EditForm;