import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const MyCard = (props) => {

    const cardStyle = {
        marginTop    : "36px",
        borderRadius : "0"
    }

    return (
        <div>
            <Card style={cardStyle} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={props.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">{props.slug}</Typography>
                    <Typography gutterBottom variant="h6" component="h6">{props.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={'/blog/' + props.slug}> 
                        <Button size="small">Learn More</Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default MyCard;





