import { useState } from "react";
import ActivityItem from "./ActivityItem";
import Counter from "./Counter";
// import "./App.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>activités</button>
        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>portfolio</button>
        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>infos</button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content activities active-content" : "content"}>
            <ActivityItem
            para1="L'enjeu de l'ux/ui design est d'améliorer l'expérience des visiteurs d'un site web, par un travail de conception et de préparation qui précède le développement."
            para2="Il y a, dès lors, un travail en profondeur réalisé sur la production des maquettes. La qualité de ces dernières est directement liée à la fluidité du développement."
            para3="En faisant preuve de précision et de minutie dans l'élaboration des maquettes, on augmente considérablement les chances d'obtenir un très bon rendu final."
            content="ux/ui design"
            item1="figma" 
            item2="photoshop"
            />
            <ActivityItem 
            content="intégration web"
            para1="Intégrer, c’est le coeur de mon métier. Cela me passionne de  construire tout ce qui compose une maquette et développer toutes les fonctionnalités d’un prototype."
            para2="J’aime relever des défis d’intégration complexes. Ce qui me passionne plus précisément, c’est la construction de fonctions et de composants, qui, une fois assemblés, constituent un site fonctionnel ou une application robuste." 
            item1="html5/css3/sass" 
            item2="javaScript/jQuery" 
            item3="reactJs"/>
            <ActivityItem 
            content="modélisation 3d" 
            para1="En couplant le gratuiciel Blender 2.90 et la librairie javaScript Three.js, je modélise des objets et des scènes 3d en créant ainsi une expérience utilisateur unique et innovante."
            item1="blender 2.90" 
            item2="three.js" 
            item3="fiber"/>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
            under construction
        </div>
        <div className={toggleState === 3 ? "content  active-content" : "content"}>
            {/* <p>About</p> */}
            <br/>
            <table style={{borderCollapse:"collapse"}}>
                <thead>
                    <tr>
                        <td colSpan="2">About</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>nom du projet</td>
                        <td>phoenix</td>
                    </tr>
                    <tr>
                        <td>framework</td>
                        <td>react 17.0.2</td>
                    </tr>
                    <tr>
                        <td>environnement de développement</td>
                        <td>vscode/google chrome/ubuntu 20.04</td>
                    </tr>
                    <tr>
                        <td>technologies</td>
                        <td>html5/css3/Sass javaScript/jQuery</td>
                    </tr>
                    <tr>
                        <td>outil de prototypage</td>
                        <td>figma</td>
                    </tr>
                    <tr>
                        <td>base de données</td>
                        <td>firebase - realtime database</td>
                    </tr>
                    <tr>
                        <td>gestion du projet</td>
                        <td>trello/Agile</td>
                    </tr>
                    <tr>
                        <td>dépendances & librairies react</td>
                        <td>react-router-dom - react-three-fiber - splide-slide</td>
                    </tr>
                    <tr>
                        <td>date de début</td>
                        <td>20/09/2021</td>
                    </tr>
                    <Counter/>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default Tabs;