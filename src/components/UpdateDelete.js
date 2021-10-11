import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../components/Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateDelete = ({item}) => {

    const [update, setUpdate] = useState(false)
    const [titleUpdate, setTitleUpdate] = useState(null)
    const [descriptionUpdate, setDescriptionUpdate] = useState(null)
    const [contentUpdate, setContentUpdate] = useState(null)
    const [imgUpdate, setImageUpdate] = useState(null)
    const [categoryUpdate, setCategoryUpdate] = useState(null)
    const [slugUpdate, setSlugUpdate] = useState(null)

    const updateItem = () => {
        let project = firebase.database().ref("blog").child(item.id);
        if(titleUpdate !== null)
        {
            project.update({
                title : titleUpdate
            });
        }
        if(descriptionUpdate !== null)
        {
            project.update({
                description : descriptionUpdate
            });
        }
        if(contentUpdate !== null)
        {
            project.update({
                content : contentUpdate
            });
        }
        if(slugUpdate !== null)
        {
            project.update({
                slug : slugUpdate
            });
        }
        if(categoryUpdate !== null)
        {
            project.update({
                category : categoryUpdate
            });
        }
        if(imgUpdate !== null)
        {
            project.update({
                img : imgUpdate
            });
        }
        setUpdate(false)
    }

    const deleteItem = () => {
        let project = firebase.database().ref('blog').child(item.id);
        if(window.confirm('es-tu sûr de vouloir supprimer ceci ?')){
            project.remove((error) => {
                if(error)
                {
                    toast.error(error)
                }
                else
                {
                    toast.success("cet élément a bien été supprimé.")
                }
            });
        }
    }

    // const notify = () => toast("Wow so easy!");

    return (
        <Fragment>
        <tr>
            {update === false && (
                <Fragment>
                    <td>{item.slug}</td>
                    <td width="16%">{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td width="10%"><img src={item.img} alt={item.slug} width="48%"/></td>
                    <td><button onClick={() => setUpdate(!update)}>update</button></td>
                    <td><button onClick={deleteItem}>delete</button></td>
                    <td><Link to={`/view/${item.id}`}><button>view</button></Link></td>
                    <ToastContainer />
                </Fragment>
            )}
        </tr>
        {update &&
            <Fragment>
                <tr>
                    <td>
                    <input 
                        type="text" 
                        defaultValue={item.slug}
                        onChange={(e) => setSlugUpdate(e.target.value)
                        }
                    />
                    </td>
                    <td>
                    <input 
                        type="text" 
                        defaultValue={item.title}
                        onChange={(e) => setTitleUpdate(e.target.value)
                        }
                    />
                    </td>
                    <td>
                    <input 
                        type="text" 
                        defaultValue={item.description}
                        onChange={(e) => setDescriptionUpdate(e.target.value)
                        }
                    />
                    </td>
                    <td>
                    <select 
                        type="text" 
                        defaultValue={item.category}
                        onChange={(e) => setCategoryUpdate(e.target.value)}
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="wordpress">wordpress</option>
                        <option value="three.js">three.js</option>
                        <option value="webdesign">webdesign</option>
                    </select>
                    </td>
                    <td>
                    <input 
                        type="text" 
                        defaultValue={item.img}
                        onChange={(e) => setImageUpdate(e.target.value)
                        }
                    />
                    </td>
                    <td colspan="3"><button onClick={updateItem}>submit</button></td>
                </tr>
                <tr>
                    <td id="textarea" colspan="8">
                    <textarea
                        defaultValue={item.content}
                        rows="4"    
                        onChange={(e) => setContentUpdate(e.target.value)
                        }
                    />
                </td>
                </tr>
            </Fragment>
        }
        </Fragment>
    );
};

export default UpdateDelete;