import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function CourseCard({image,name}){
    return(
        <>
            <Card sx={{ width: 300 }} >
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" >
                        {name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Create Result</Button>
                    <Button size="small">View Result</Button>
                </CardActions>

            </Card>
           </>
    )
}
export default CourseCard;