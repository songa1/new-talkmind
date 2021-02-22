import React from 'react';
import NewPost from './NewPost';
import PostList from './PostList';
import { connect } from 'react-redux';
import { fetchPosts } from '../../Redux/Actions/PostActions';


class Post extends React.Component {
    UNSAFE_componentWillMount() {
        this.props.fetchPosts();
    }


render() {
    const user = localStorage.getItem('userToken');

    const posts = this.props.posts

    const handleDelete = (id)=>{
        
    }

    return (
                
        <div className="postCollection">
            {user ? <NewPost/>: <p className="loginTo">Please login to add a new post!</p>}
            {/* {error && <div>{error}</div>} */}
            {/* {isPending && <div>Getting all posts...</div>} */}
            {posts && <PostList posts={posts} handleDelete={handleDelete}/>}
        </div>
    )
}
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    newPost: state.posts.post
})

export default connect(mapStateToProps, {fetchPosts})(Post);