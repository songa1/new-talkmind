import React from 'react';
import {connect} from 'react-redux';
import {addPost} from '../../Redux/Actions/PostActions';

class NewPost extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            views: Math.random() * 10
        }

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const user =  JSON.parse(localStorage.getItem('userData'));

        const post = {
            content: this.state.content,
            author: user.username,
            views: this.state.views
        }

        this.props.addPost(post)
    }

render() {
    
        return (
            <div>
                <form className="postForm">
                    <textarea type="text" value={this.state.content} onChange={this.onChange} placeholder="What's on your mind?" className="post-content" rows="4" name="content"/>
                    <button className="addPostBtn" onClick={this.handleSubmit}>Post</button>
                    {/* {isPending && <button className="addPostBtn" onClick={handleSubmit} disabled>Posting ...</button>} */}
                </form>
            </div>
        )
}
}

export default connect(null, {addPost})(NewPost);