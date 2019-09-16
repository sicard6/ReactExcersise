//rcc atajo

import React, { Component } from 'react';

class Like extends Component {
    state = {
        likes: 0,
        tags: ['t1', 't2', 't3']
    }

    renderLikes() {
        return (this.state.likes === 0) ? 'give us a like' : this.state.likes + ' likes';
    }

    handleLike = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    reset = () => {
        this.setState({
            likes: 0
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.handleLike}>Like</button> {this.renderLikes()}
                <ul>
                    {this.state.tags.map(e => <li key={e}>{e}</li>)}
                </ul>
            </div>
        );
    }
}

export default Like;