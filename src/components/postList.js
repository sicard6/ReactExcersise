import React, {
    Component
} from 'react';

import Post from './post';

class PostList extends Component {

    state = {
        posts: [{
            title: 'Title1',
            content: 'lorem',
            author: 'Mateo Sicard',
            date: '20 Junio del 2015'
        }, {
            title: 'Title2',
            content: 'lorem',
            author: 'Mateo Sicard',
            date: '20 Junio del 2015'
        }, {
            title: 'Title3',
            content: 'lorem',
            author: 'Mateo Sicard',
            date: '20 Junio del 2015'
        }]
    };

    render() {
            return (<div> 
                        {this.state.posts.map(e => <Post value = {e} key = {e.title} />)} 
                    </div>
                    );
                }
            }

            export default PostList;