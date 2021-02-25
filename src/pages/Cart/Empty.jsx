import React from 'react';
import { Link } from 'react-router-dom';
import CartEmptyImg from '../../assets/img/empty-cart.png';

const Empty = () => {
  return (
    <React.Fragment>
      <h2>
        Cart is empty <icon>😕</icon>
      </h2>
      <p>
         Most likely you haven't ordered pizza yet.
        <br />
          To order pizza, go to the main page.
      </p>
      <img src={CartEmptyImg} alt="Empty cart" />
      <Link to="/" class="button button--black">
        <span>Back</span>
      </Link>
    </React.Fragment>
  );
};

export default Empty;
