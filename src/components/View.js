import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import firebase from './Firebase';

const View = (props) => {
    
    // methode pour le getOne
    const [myItem, setMyItem] = useState();
            
    const { id } = useParams();
            
    useEffect(() => {
        var database = firebase.database();
        var myRef = database.ref(`blog/${id}`);
        console.log(myRef)
        myRef.on('value', (snapshot) => {
        const data = snapshot.val();
        setMyItem(data);
        });

    },[id])

    if(!myItem)
    {
        return <div>aucun item correspondant</div>
    }

    const path="../";
    
    return (
        <div id="blog">
            <div className="card">
                <h4>{myItem.slug}</h4>
                <h5>{myItem.title}</h5>
                <h6>{myItem.description}</h6>
                <p>{myItem.content}</p>
                <img width="50%" src={`${path}${myItem.img}`}  alt='projet'/>
            </div>
        </div>
    );
};

export default View;