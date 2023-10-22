import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
  }

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quote: data.content,
          author: data.author,
        });
      });
  };

  render() {
    const { quote, author } = this.state;
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;

    return (

      <div id="wrapper">
      <div id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"> {quote} </i><span id="text"></span>
        </div>
        <div className="quote-author">- <span id="author">{author}</span></div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top" 
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
          >
            <i className="fa fa-tumblr"></i>
          </a>
          <button className="button" onClick={this.getNewQuote} id="new-quote">New quote</button>
        </div>
      </div>
      <div className="footer">by <a href="">Reyvans Pahlevi</a></div>
    </div>
      
    );
  }
}

export default App;
