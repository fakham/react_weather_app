import React, { Fragment } from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@material-ui/core';
import './WeatherList.css';

const WeatherList = (props) => {
    return (
        <Fragment>
            { props.data.location === '' ? (
                <Fragment></Fragment>
            ) : (
                <List className="list">
                    <ListItem button className="item">
                        <ListItemText>
                            <Typography variant="h6">
                                Location : {props.data.location}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button className="item">
                        <ListItemText>
                            <Typography variant="h6">
                                Temperature : {props.data.temperature}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button className="item">
                        <ListItemText>
                            <Typography variant="h6">
                                Humidity : {props.data.humidity}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button className="item">
                        <ListItemText>
                            <Typography variant="h6">
                                Conditions : {props.data.conditions}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <img src={props.data.image} alt="Weather" className="image" />
                </List>
            ) }
            
        </Fragment>
    )
}

export default WeatherList;