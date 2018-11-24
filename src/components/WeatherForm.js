import React, {Component} from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './WeatherForm.css';

class WeatherForm extends Component {

    state = {
        country: '',
        city: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const {country, city} = this.state;

        if (!country.length || !city.length)
            return;

        this.props.updateList(country, city);

        this.setState({
            country: '',
            city: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <div>
                    <TextField type="text" id="country" onChange={this.handleChange} value={this.state.country} placeholder="Country.." label="Country" margin="normal" variant="outlined" />
                </div>
                <div>
                    <TextField type="text" id="city" onChange={this.handleChange} value={this.state.city} placeholder="City.." label="City" margin="normal" variant="outlined" />
                </div>
                <div>
                    <Button variant="contained" color="primary" type="submit" >
                        <SearchIcon />
                        Get Weather
                    </Button>
                </div>
            </form>
        )
    }

}

export default WeatherForm;