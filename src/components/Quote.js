import React, { useState, useEffect } from 'react';

function Quote() {
    const [quote, setQuote] = useState('');  // Keep only the quote
    const [author, setAuthor] = useState('');
  
    useEffect(() => {
      fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);  // Log response to see what comes back
          setQuote(data.content);
          setAuthor(data.author);
        })
        .catch((error) => {
          console.error('Error fetching quote:', error);
        });
    }, []);
  
    return (
      <div>
        <h3>Motivational Quote</h3>
        {quote ? (
          <blockquote>
            "{quote}" <br />
            <cite>— {author}</cite>
          </blockquote>
        ) : (
          <p>Loading quote...</p>
        )}
      </div>
    );
  }

  export default Quote;
