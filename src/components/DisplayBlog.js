import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import firebase from '../components/Firebase';
import MyCard from '../components/MyCard'

const DisplayBlog = (props) => {

    const [projectList,setProjectList] = useState([]);

    useEffect(() =>{
        const blog = firebase.database().ref('blog');
        blog.on('value',(snapshot) => {
            let dblist = snapshot.val();
            let list = [];
            for(let id in dblist){
                list.push({id,...dblist[id]})
            }
            setProjectList(list);
        })
    },[])

    const projectTable = {
        fontSize    : "12px",
        border      : "1px solid #B3C8DB"
        // width       : "100%"
    }

    return (
        <div id="blog">
            <Navbar/>
            <div className="paragraphe">
                <p>dans cet exercice du crud parfois si complexe, Firebase nous simplifie la tâche...</p>    
            </div>
            <div className="blog-content">
            {projectList && projectList.map((item,index) => (
                <MyCard 
                    key={item.id}
                    title={item.title} 
                    description={item.description} 
                    img={item.img}
                    slug={item.slug}
                />
            ))}
            </div>
        </div>
    );
};

export default DisplayBlog;



