import React from 'react';
import PostList from './PostList';
import { connect } from 'react-redux';
import { fetchPosts } from '../../Redux/Actions/PostActions';


class Trending extends React.Component {

    UNSAFE_componentWillMount() {
        this.props.fetchPosts();
    }
    

    render() {

        const posts = this.props.posts

        const handleDelete = (id)=>{
            fetch('http://localhost:2500/posts/all/'+id, {
                method: 'DELETE',
                
            })
        }
    
    return (
                
        <div className="postCollection">
            <p className="postTitle">Posts with more than 5 views</p>
            {/* {error && <div>{error}</div>} */}
            {/* {isPending && <div>Getting trending posts...</div>} */}
            {posts && <PostList posts={posts.filter((post)=>post.views >5)} handleDelete={handleDelete}/>}
        </div>
    )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, {fetchPosts}) (Trending);


