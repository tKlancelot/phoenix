import React, { useState, useEffect, Fragment } from 'react';
import BottomBar from '../components/BottomBar';
import MenuTarik from '../components/MenuTarik';
import TopBar from '../components/TopBar';
import { Box } from '@mui/system';
import { Skeleton } from '@mui/material';
import CardPost from '../components/CardPost';
import firebase from 'firebase/firebase';

const Projets = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState(null)
    const [selectedRadio, setSelectedRadio] = useState('');
    
    const etat = {
        radios : [
            {id : 1, value : "All"},
            {id : 2, value : "javascript"},
            {id : 3, value : "wordpress"},
            {id : 4, value : "three.js"},
            {id : 5, value : "webdesign"}
        ],

    }
    
    const [state] = useState(etat)

    const handleRadio = (event) =>{
        let value = event.target.value;
        // let parent = event.target.parentNode;
        // alert(value);
        value === "All" ? setSelectedRadio('') : setSelectedRadio(value);
    }


    // let {projects, radios, selectedRadio} = this.state;

    useEffect(() => {
        const projects = firebase.database().ref('blog');
        projects.on('value',(snapshot) => {
            let dblist = snapshot.val();
            let list = [];
            setTimeout(() => {
                for(let id in dblist){
                    list.push({id,...dblist[id]})
                }
                setProjects(list);
                setIsLoading(false)
            },1000)
        })

    },[])

    return (
        <div id="projets">
            <TopBar/>
            <BottomBar/>
            <MenuTarik/>
            <ul className="radioDisplay">
                {state.radios.map((radio)=>{
                    return(
                        <li key={radio.id}>
                            <input type="radio" name="radio" checked={radio.value===selectedRadio} value={radio.value} id={radio.value} onChange={handleRadio}/>
                            <label htmlFor={radio.value}>{radio.value}</label> 
                        </li>
                    )
                })}
            </ul>
            <div className="grid">

                {isLoading === false ? 
                    projects.filter(item => item.category.includes(selectedRadio)).map(item => 
                        <CardPost post={item} key={item.id}/>
                    )
                    // projects.filter(item => item.category.includes(selectedRadio)).map(item => 
                    //     <CardPost post={item} key={item.id}/>
                    // )

                : 
                <Fragment>
                    <Box>
                        <Skeleton width="100%" height={118}/>
                        <Skeleton width="50%" height={60}/>
                        <Skeleton width="100%" height={60}/>
                    </Box>
                    <Box>
                        <Skeleton width="100%" height={118}/>
                        <Skeleton width="100%" height={60}/>
                        <Skeleton width="100%" height={60}/>
                    </Box>
                    <Box>
                        <Skeleton width="100%" height={118}/>
                        <Skeleton width="25%" height={60}/>
                        <Skeleton width="100%" height={60}/>
                    </Box>
                    <Box>
                        <Skeleton width="100%" height={118}/>
                        <Skeleton width="50%" height={60}/>
                        <Skeleton width="100%" height={60}/>
                    </Box>
                    <Box>
                        <Skeleton width="100%" height={118}/>
                        <Skeleton width="100%" height={60}/>
                        <Skeleton width="100%" height={60}/>
                    </Box>
                    <Box>
                        <Skeleton width="100%" height={118}/>
                        <Skeleton width="25%" height={60}/>
                        <Skeleton width="100%" height={60}/>
                    </Box>
                </Fragment>
                }
            </div>
        </div>
    );
};

export default Projets;


// fetch('http://localhost:1337/projets',{
//     method : "GET",
//     header : {
//         'Accept' : 'Application/json'
//     }
// })
// .then(res => res.json())
// .then(res => {
//     // console.log(res)
//     setTimeout(() => {
//         setProjects(res)
//         setIsLoading(false)
//     },1000)
// })