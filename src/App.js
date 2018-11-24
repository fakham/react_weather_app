import React, { Component } from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherList from './components/WeatherList';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Paper, IconButton, Badge } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';


class App extends Component {

  state = {
    data: {
      location: '',
      temperature: '',
      humidity: '',
      conditions: '',
      image: ''
    }
  }

  theme = createMuiTheme({
    palette: {
      primary: {
          main: '#448AFF'
        }
      },
      typography: {
        useNextVariants: true,
      }
    },
  )

  updateList = (country, city) => {
    axios.get('https://query.yahooapis.com/v1/public/yql?u=c&q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%27'+ city +',%20'+ country +'%27)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
    .then( res => {
      let description = res.data.query.results.channel.item.description;
      let img = description.substring(description.search('http'), description.search('gif')) + 'gif';
      let data = {
        location: res.data.query.results.channel.location.city + ', ' + res.data.query.results.channel.location.country,
        temperature: Math.round((res.data.query.results.channel.item.condition.temp - 32) * 5/9) + ' °C',
        humidity: res.data.query.results.channel.atmosphere.humidity + ' %',
        conditions: res.data.query.results.channel.item.condition.text,
        image: img
      }

      this.setState({data});

      // console.log(this.state.data);
    })
  }

  handleAccount = () => {
    const url = 'https://github.com/fakham';
    const win = window.open(url, '_blank');
    win.focus();
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={this.theme}>
          <AppBar position="static">
            <Toolbar className="toolbar">
              <Typography variant="h6" color="inherit">
                Weather App
              </Typography>
              <IconButton color="inherit" className="icon" onClick={this.handleAccount}>
                <Badge badgeContent={1} color="secondary">
                  <AccountCircle />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Paper elevation={1} className="paper">
            <WeatherForm updateList={this.updateList} />
            <WeatherList data={this.state.data} />
          </Paper>
        </MuiThemeProvider>
        
      </div>
    );
  }
}

export default App;
