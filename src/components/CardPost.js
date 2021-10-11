import * as React from 'react';
import { Link } from 'react-router-dom';
// import { API_URL } from '../config';

const CardPost = ({post}) => {


    return (
        <div className="card-post">
            <div>
                <h4>{post.title}</h4>
            </div>
            <img height="210" src={post.img !== null ? post.img : "..."} alt={post.title}/>
            <div className="card-actions">
                <p>
                    {post.description.substring(0,40)} ...
                </p>
            </div>
            <div className="card-footer">
                <Link to={`/projets/${post.id}`}><button>voir plus</button></Link>
                <p>{post.category}</p>
            </div>
            {/* {console.log(post)} */}
        </div>
    );
};

export default CardPost;