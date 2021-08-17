import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, set_count] = useState(0);
  const [text, set_text] = useState(data);

  const handle_submit = (e) => {
    e.preventDefault();
    let amount = Number(count)
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8
    }
    set_text(data.slice(0, amount));
  }

  return (
    <section className="section-center">
      <h3>Lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handle_submit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => set_count(e.target.value)}
        />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {
          text.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        }
      </article>
    </section>
  )
}

export default App;
