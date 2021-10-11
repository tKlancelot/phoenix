import { NavLink } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import $ from "jquery";

const Navbar = (props) => {

    // useEffect(() => {
    //     // displayTags();
    // },)

    return (
        <nav>
            <ul>
                {/* <li>home</li> */}
                <li><NavLink to="/">home</NavLink></li>
                {/* <li><NavLink to="/displayblog">blog home</NavLink></li> */}
                {/* <li><NavLink to="/createitem">create item</NavLink></li> */}
                <li><NavLink to="/blog">blog list</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;


// const [dark,setDark] = useState(false);

// const handleClick = () => {
    
//     setDark(!dark);
// }
// onClick={handleClick}><span style={{backgroundColor : dark === true ? "red" : "blue" }}></span>