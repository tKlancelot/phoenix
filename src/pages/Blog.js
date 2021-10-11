import React, { useEffect, useState } from 'react';
import firebase from '../components/Firebase';
import UpdateDelete from '../components/UpdateDelete';
import Pagination from '../components/Pagination';
import CreateItem from '../components/CreateItem';
import MenuTarik from '../components/MenuTarik';
// import { NavLink } from 'react-router-dom';
// import MyCard from '../components/MyCard';
// import { Link } from '@mui/material';
// import { database } from '../components/Firebase';


const Blog = (props) => {

    // methode pour le getAll

    // const [blogs, setBlogs] = useState([]);
    // on peut utiliser des termes plus génériques , moi je choisis un terme specifique
    // on met un tableau comme valeur initiale du usestate

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

    const planetTable = {
        fontSize    : "12px",
        border      : "1px solid #B3C8DB"
        // width       : "100%"
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(10);

    // recuperer les current items
    const indexOfLastItems = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItems - itemPerPage;
    const currentItems =  projectList.slice(indexOfFirstItem,indexOfLastItems); 

    // change page 
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    // si il y a au moins un objet existant en bdd
    
    return (
        <div id="blog">
            <div className="blog-page">
                <div className="blog-header">
                    <h4>gestion des projets / api firebase</h4>
                    <p>liste des projets</p>
                </div>
                <div className="panneau-gauche">
                    <MenuTarik/>
                    <CreateItem/>
                </div>
                <div className="panneau-droit">
                    <table style={planetTable}>
                    <thead>
                        <tr>
                            <th>nom/appellation</th>
                            <th>surnom</th>
                            <th>description</th>
                            <th>categorie</th>
                            <th>miniature</th>
                            <th colSpan="3">options</th>
                        </tr>    
                    </thead>    
                    <tbody>
                    {currentItems && currentItems.map((item,index) => (
                        <UpdateDelete item={item} key={index}/>
                    ))}
                    </tbody>
                    </table>
                </div>
                <Pagination itemsPerPage={itemPerPage} totalItems={projectList.length} paginate={paginate}/>
            </div>
        </div>
    );
};

export default Blog;

// async function getAll()
// {
//     let blogs = await database.ref('/blog').once('value').then(function(snapshot){
//         // on retourne les datas de la requete
//         // console.log(snapshot.val());
//         return snapshot.val();
//     })
//     setBlogs(blogs);
// }