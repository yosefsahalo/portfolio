import React, { useState, useEffect } from 'react';
import './Skills.css';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));



function Skills() {
    
    const classes = useStyles();
    
    return (
        <div id="skillsContactID">
            <Timeline align="alternate">
                <TimelineItem>

                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            Developer Skills<progress id="file" value="80" max="100"> 32% </progress>
                        </Typography>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineDot>
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Frontend Skills:
                            </Typography>
                            <Typography component={'span'}>
                                <ul id="listOfDevSkills">
                                    <li>Html</li>
                                    <li>Css</li>
                                    <li>BootStrap</li>
                                    <li>Type Script</li>
                                    <li>Java Script</li>
                                    <li>React</li>
                                </ul>
                            </Typography>

                            <Typography variant="h6" component="h1">
                                Backend Skills:
                            </Typography>
                            <Typography component={'span'}>
                                <ul id="listOfDevSkills">
                                    <li>C#</li>
                                    <li>Nodejs</li>
                                    <li>.net</li>
                                    <li>MVC</li>
                                </ul>
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            Professional Skills:
                        </Typography>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <WorkOutlineIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1" className="headLine">
                                Skills:
                            </Typography>
                            <Typography component={'span'}>
                                <ul id="listOfProfessionalSkills">
                                    <li>עבודת צוות</li>
                                    <li>הגדלת ראש</li>
                                    <li>בעל מוסר עבודה</li>
                                    <li>ממוקד מטרה</li>
                                    <li>כישורי למידה עצמית</li>
                                </ul>
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>

                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            personal Skills:
                        </Typography>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <PersonOutlineIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>

                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Skills:
                            </Typography>
                            <Typography component={'span'}>
                                <ul id="listOfpersonalSkills">
                                    <li>בעל אחריות</li>
                                    <li>סקרנות</li>
                                    <li>אמינות</li>
                                    <li>תקשורת בנאישית</li>
                                    <li>כנות</li>
                                </ul>
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}

export default Skills;