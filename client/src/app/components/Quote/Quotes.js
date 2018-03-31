import React, {Component} from 'react';
import axios from 'axios';

class Quotes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: ''
    }
  }

  componentDidMount() {
    axios.get('/api/getquote').then(res => {
      let r = res.data;
        this.setState({
          quotes: {
            quoteText: r.quoteText,
            quoteAuthour: r.quoteAuthor,
            senderName: r.senderName,
            quoteLink: r.quoteLink
          }
        })
    })
  }

  render() {
    return (
      <div>
        <ul>
          <li>{this.state.quotes.quoteText}</li>
          <li>{this.state.quotes.quoteAuthour}</li>
        </ul>
      </div>
    )
  }
}
export default Quotes;
