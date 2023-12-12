import './App.css';

import Header from './Header';
// import NavBar from './NavBar';
import MealPlanner from './MealPlanner';
// import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header name='Bob'/>
      {/* <NavBar /> */}
      <MealPlanner />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
