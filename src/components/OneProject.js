import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BottomBar from './BottomBar';
import MenuTarik from './MenuTarik';
import TopBar from './TopBar';
import firebase from '../components/Firebase';

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


    return (
        myItem !== null ?         
        <div id="oneProject">
            <TopBar/>
            <MenuTarik/>
            <BottomBar/>
            <div>
                <h4>{myItem.title}</h4>
                <p>{myItem.description}</p>
                <p>{myItem.content}</p>
            </div>
        </div>
        :
        <div>loading</div>
    );
};

export default View;