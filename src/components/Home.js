import { state } from '@babel/template';
import React, { useState } from 'react';

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//components
//Hook
//image
import NoImage from '../images/no_image.jpeg';

const Home = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return <div>Home</div>
}

export default Home;