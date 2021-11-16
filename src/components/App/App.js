import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
    this.addUrl = this.addUrl.bind(this);
  }

  addUrl = (newUrl) => {
   this.setState({ urls: [...this.state.urls, newUrl] });
 }


  componentDidMount() {
   getUrls()
     .then(data =>
       this.setState({
         urls: data.urls
       })
     )
     .catch(error => {
       console.log('Error getting data', error)
       this.setState({
        hasError: true
       })
     })
 };

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
