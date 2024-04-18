import * as React from "react"
import "./TeacherStyle.css";
import SideBar from "../Sidebar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Dashboard() {

    return (
        <>
            <div id="mainD">
                <div id="topD">
                    <SideBar />
                </div>
                <div id="bottomD">
                    <div id="teacherD">
                        <div id="imgT">
                        <img src={require("./profilepic.jpg")}
                        style={{height:"90%",width:"90%",borderRadius:"50%"}}/>
                        </div>
                        <div id="Tinfo">
                        <h2 style={{marginTop:"4%"}}>Ms.Laiba</h2>
                        <h4 style={{marginTop:"-4%"}}>Lecturer</h4>
                        <h5 style={{marginTop:"-4%"}}>Jinnah University For Women</h5>
                        </div>
                    </div>
                    <div id="carddiv">
                        <div id="cardWrapper" className="card-wrapper" >
                            <Card sx={{ maxWidth: 345 }} >
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={require("./SQE.jpg")}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" >
                                        Software Quality Engineering
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Create Result</Button>
                                    <Button size="small">View Result</Button>
                                </CardActions>

                            </Card>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={require("./SQE.jpg")}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" >
                                        Software Quality Engineering
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Create Result</Button>
                                    <Button size="small">View Result</Button>
                                </CardActions>

                            </Card>
                            
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={require("./SQE.jpg")}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" >
                                        Software Quality Engineering
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Create Result</Button>
                                    <Button size="small">View Result</Button>
                                </CardActions>

                            </Card>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={require("./SQE.jpg")}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" >
                                        Software Quality Engineering
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Create Result</Button>
                                    <Button size="small">View Result</Button>
                                </CardActions>

                            </Card>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={require("./SQE.jpg")}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" >
                                        Software Quality Engineering
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Create Result</Button>
                                    <Button size="small">View Result</Button>
                                </CardActions>

                            </Card>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={require("./SQE.jpg")}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" >
                                        Software Quality Engineering
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Create Result</Button>
                                    <Button size="small">View Result</Button>
                                </CardActions>

                            </Card>


                        </div>
                    </div>
                    {/* <div id="insightsD">
                        <div id="graph1">
                            <img
                                src={require("./g1.png")}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                        <div id="graph2">
                            <img
                                src={require("./g2.png")}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </>

    );
}
export default Dashboard;