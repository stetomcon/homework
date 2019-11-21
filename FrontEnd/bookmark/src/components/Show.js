import React, { Component } from 'react';
import EditForm from './EditForm';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            selectedBookmark: {}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    // async handleEditButton(clickedBookmark) {
    //     console.log('Clicked Edit Button');
    //     await this.setState({
    //       editButton: !this.state.editButton,
    //       selectedBookmark: clickedBookmark
    //     });
    //     console.log('Current Bookmark: ', this.state.selectedBookmark);
    //   }

    handleChange(event) {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    }

    render() {
        return (
            this.props.bookmark.map(bookmark => {
                // const showEditForm = this.state.editButton ? 
                // <EditForm bookmark={bookmark} getBookmark={this.props.getBookmark} /> 
                // : 
                // null;
                return (

                    <div className="middle" key={bookmark._id}>

                        <p className='in'>{bookmark.name}</p>
                        <a className='in anch' href={bookmark.address} target='_blank' rel="noopener noreferrer">{bookmark.address}</a>


                        <button onClick={() => this.props.deleteBookmark(bookmark._id)}>X
                        </button>

                        <EditForm bookmark={bookmark} getBookmark={this.props.getBookmark} />
                    </div>

                )
            })
        )
    }
}

export default Show