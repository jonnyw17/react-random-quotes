import React from 'react';

// Component
import Quote from './Quotes';

// CSS
import './quotecontainer.css';

const QuoteContainer = (props) => {
  return (
    <div className="quote-container">
      <Quote/>
    </div>
  )
}
export default QuoteContainer
