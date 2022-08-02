import './../styles/index.scss';
import './../components/index.js';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('./../components/index.js');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
