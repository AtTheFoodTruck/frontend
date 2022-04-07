import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to='/reviews'>
        <button>리뷰페이지</button>
      </Link>
    </div>
  );
};

export default Home;
