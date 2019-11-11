/**
 * @Author: stephenmoran
 * @Date:   2019-10-29T16:35:25+00:00
 * @Last modified by:   stephenmoran
 * @Last modified time: 2019-11-09T23:26:33+00:00
 */



import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Banner from './components/header/Banner';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Form from './components/form/Form';
import Events from './components/events/Events';
import Weather from './components/header/Weather';
import Footer from './components/footer/Footer';

import './App.css';

class App extends React.Component {

// Create constructor and initialise the state
constructor(props) {
  super(props);
  this.state = {
    error: null,
    city: '',
    startDate: '',
    endDate: '',
    weatherTemp: '',
    weatherDesc: '',
    events: []
  };

this.handleChange = this.handleChange.bind(this);
this.formSubmit = this.formSubmit.bind(this);

}

handleChange(event) {
  this.setState({ [event.target.name]: event.target.value });
}

formSubmit(event) {
  event.preventDefault();
  let API_KEY = "z8csmrHcKt2ohHz4F7yU1F9ufV62oXza";
  // fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=${this.state.city}&apikey=${API_KEY}`)
  fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=${this.state.city}&apikey=${API_KEY}&startDateTime=${this.state.startDate}T00:00:00z&endDateTime=${this.state.endDate}T23:00:00z&sort=date,asc`)
     .then(res => res.json())
     .then(
       (result) => {
         console.log(result);
         this.setState({
           error: null,
           events: (result._embedded === undefined) ? [] : result._embedded.events
         });

       },

       (error) => {
         console.log("Error");
         console.log(error);
         this.setState({
           error: null
         });
       }
     )

          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=bd4789aa540b715e0e15e1da1900eea4`)
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              this.setState({
                error: null,
                weatherTemp:(result.main.temp === undefined ) ? "" : result.main.temp,
                weatherDesc:(result.weather[0].description === undefined ) ? "" : result.weather[0].description
              });
              console.log(this.state.weatherDesc);
            },

            (error) => {
              console.log("Error");
              this.setState({
                error:null
              });
            }
          )
 }

  render() {
      return(
        <BrowserRouter>
            <Navbar />
            <div className="content">
            <div className ="banner">
              <div className="container">
                <div className="row">
                  <Banner/>
                  <Route exact path="/" render={props => (
                    <React.Fragment>
                    { this.state.error ? <Weather weatherTemp="" weatherDesc="" city="" /> : <Weather weatherTemp={this.state.weatherTemp} weatherDesc={this.state.weatherDesc} city={this.state.city} /> }
                    </React.Fragment>
                  )}/>
                </div>
              </div>
            </div>
              <Route path="/"  />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/" render={props => (

                <div className ="container formEventsContainer">
                <div className="row">
                  <Form formSubmit={this.formSubmit} handleChange={this.handleChange}/>
                    { (this.state.error) ?
                      <React.Fragment>
                            <h1 className="Oops"> Oops Something went wrong...<span className = "errorMsg">Please try again.</span></h1>

                      </React.Fragment>
                      :
                      <Events events={this.state.events} error={this.state.error} /> }
                  </div>
                </div>

              )}/>
            </div>

            <Footer />
        </BrowserRouter>
      )
  }
}

export default App;
