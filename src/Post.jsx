import './Post.css'
export default function Post({post}){
   
    const {title, body , username,id}=post;
    return (
        <div className='post'>
            <p><small>userName: {username}</small></p>
            <p><small>userId: {id}</small></p>
            <h5>Post Title: {title} </h5>
            <p> Body: {body}</p>
        </div>
    )
}