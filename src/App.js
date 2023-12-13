import './App.css';

import Header from './Header';
import MealPlanner from './MealPlanner';

import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">

      {/* <Header name='Bob'/>
      <MealPlanner /> */}

      <AppRouter />

    </div>
  );
}

export default App;
