// This file is for applying global styles to all pages 
// https://nextjs.org/learn/basics/assets-metadata-css/global-styles

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
