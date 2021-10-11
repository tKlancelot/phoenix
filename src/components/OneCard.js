import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';


const OneCard = (props) => {

    const OneCard = {
        marginTop : '24px'
    }

    return (
        <Container fixed>
            <Card style={OneCard} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={"/"+ props.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{props.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/blog">
                        <Button size="small">return to blog</Button>
                    </Link>
                </CardActions>
            </Card>
        </Container>
    );
};

export default OneCard;