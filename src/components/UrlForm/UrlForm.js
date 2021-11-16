import React, { Component } from 'react';
import {postUrls} from '../../apiCalls';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      long_url: '',
    };
  }

  submitUrl = event => {
    postUrls(this.state.title, this.state.long_url)
    event.preventDefault();
    const newUrl = {
      id: Date.now(),
      ...this.state
    }
    this.props.addUrl(newUrl);
    this.clearInputs();
  }

  handleNameChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', long_url: ''});
  }

  render() {
    return (
      <form>
        <input
          className='title-entry'
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={event => this.handleNameChange(event)}
        />

        <input
          className='url-entry'
          type='text'
          placeholder='URL to Shorten...'
          name='long_url'
          value={this.state.long_url}
          onChange={event => this.handleNameChange(event)}
        />

        <button className="submit-button" onClick={event => this.submitUrl(event)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
