import '../public/css/styles.css';
import {Head} from 'next/head'


const App = ({Component, pageProps}) => {
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
    return <Component {...pageProps} />
  }
  
  export default App;