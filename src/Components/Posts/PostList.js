import moment from 'moment';

const PostList = (props)=> {
    const posts = props.posts;
    const handleDelete = props.handleDelete;
    const user = localStorage.getItem('userToken');
    const userData =  JSON.parse(localStorage.getItem('userData'));
    
    return (
        <div className="post-list">
            {posts.map((post)=>(
                <div className="post" key={post.id}>
                    
                    <div className="postHeader">
                        <p>{post.author}</p>
                        
                        <p className="createdAt">{moment(post.createdAt).calendar()}</p>
                    </div>
                    <div className="postBody">
                        <p>{post.content}</p>
                    </div>
                    {user ? 
                    <div className="postFooter">
                        <button className="edit-post">Edit</button>
                        <button className="delete-post" onClick={()=> handleDelete(post.id)}>Delete</button>
                    </div>:
                    <div className="postFooterIn">
                        <button className="edit-post">Share</button>
                    </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default PostList;