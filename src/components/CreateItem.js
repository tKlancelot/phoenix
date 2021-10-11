import React, {useState} from 'react';
import firebase from '../components/Firebase';
// import { database } from '../components/Firebase';

const CreateItem = (props) => {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [content, setContent] = useState();
    const [img, setImg] = useState();
    const [slug, setSlug] = useState();
    const [category, setCategory] = useState();

    const createPlanet = () => {
        const blog = firebase.database().ref("blog");
        const projet = {
            title,
            description,
            content,
            img,
            category,
            slug
        };

        blog.push(projet);
        setTitle("");
        setDescription("");
        setContent("");
        setImg("");
        setCategory("");
        setSlug("");
        // props.history.push('/blog');
    }

    // const handleChange = (e) => {
    //     setTitle(e.target.value)
    // }

    const fileSelectHandler = (e) => {
        // console.log(e.target.files[0]);
        setImg(e.target.files[0].name);
    }

    return (
        <div id="createItem">
            {/* <Navbar/> */}
            {/* <h4>Create Planet</h4> */}
            <div className="form">
                <div className="inputBox">
                    <label htmlFor="title">title</label>
                    <input 
                    type="text"
                    id="title" 
                    placeholder="title" 
                    value={title} 
                    required 
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="inputBox">        
                    <label htmlFor="description">description</label>
                    <input 
                    type="text" 
                    id="description"
                    value={description} 
                    placeholder="description" 
                    required 
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="inputBox">
                    <label htmlFor="content">content</label>
                    <textarea 
                    placeholder="content"
                    id="content"
                    rows="6 "
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="inputBox">
                    <label htmlFor="slug">slug</label>
                    <input
                    type="text" 
                    placeholder="slug"
                    id="slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    />
                </div>
                <div className="inputBox">
                    <label htmlFor="category">category</label>
                    <select
                    name="category" 
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="wordpress">wordpress</option>
                        <option value="three.js">three.js</option>
                        <option value="webdesign">webdesign</option>
                    </select>
                </div>
                {/* <div className="inputBox">
                    <label htmlFor="img">picture</label>
                    <input
                    type="text" 
                    placeholder="image"
                    id="img"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    />
                </div> */}
                <div className="inputBox">
                    <label htmlFor="img">upload picture</label>
                    <input
                    id="img"
                    type="file" 
                    onChange={fileSelectHandler}
                    />
                    <button onClick={createPlanet}>create</button>
                </div>
            </div>
        </div>
    );
};

export default CreateItem;