//rcc atajo
import React, { Component } from 'react';

class Post extends Component {

    state = {
        title: this.props.value.title,
        content: this.props.value.content,
        author: this.props.value.author,
        date: this.props.value.date
    }
    render() {
        return (
            <div >
                <h3>{this.state.title}</h3>
                <p>{this.state.content}</p>
                <p>{this.state.author} {this.state.date}</p>

            </div>
        );
    }
}

export default Post;