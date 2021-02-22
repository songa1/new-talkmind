export const FETCH_POSTS = 'FETCH_POSTS';

export const NEW_POST = 'NEW_POST';

export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = () => dispatch => {
    
        fetch('http://localhost:2500/posts/all')
            .then(res => res.json())
            .then(data => dispatch({
                type: 'FETCH_POSTS',
                payload: data
            }))
        .catch(err => console.log(err.message))
}

export const addPost = (postData) => dispatch => {
    fetch('http://localhost:2500/posts/new', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(postData)
    })
    .then(res=>res.json())
    .then(post=>dispatch({
        type: 'NEW_POST',
        payload: post
    }))
}

export const DeletePost = (id) => dispatch => {
    fetch('http://localhost:2500/posts/all/'+id, {
            method: 'DELETE',
    }).then(()=>dispatch({
        type: 'DELETE_POST'
    }))
}
