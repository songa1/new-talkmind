export const FETCH_POSTS = 'FETCH_POSTS';

export const NEW_POST = 'NEW_POST';

export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = () => dispatch => {
    
        fetch('https://talkmind-backend.herokuapp.com/posts/all')
            .then(res => res.json())
            .then(data => dispatch({
                type: 'FETCH_POSTS',
                payload: data
            }))
        .catch(err => console.log(err.message))
}

export const addPost = (postData) => dispatch => {
    fetch('https://talkmind-backend.herokuapp.com/posts/new', {
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
    fetch('https://talkmind-backend.herokuapp.com/posts/all/'+id, {
            method: 'DELETE',
    }).then(()=>dispatch({
        type: 'DELETE_POST'
    }))
}
