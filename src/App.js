import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';

library.add(fab, faFacebookF, faTwitter, faInstagram);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
