import './App.css';
import React from 'react';
import './App.css'; // Import your global CSS file
import ItemList from './components/ItemList'; // Import your main component (ItemList or AppMain, etc.)


function App() {
  return (
    <div className="App">
      {/* Add any global components or navigation here */}
      <header>
        <h1>Infinite Scrolling App</h1>
      </header>

      {/* Render your main component */}
      <main>
        <ItemList />
        {/* Add other components or routes here */}
      </main>

      {/* Add a footer or other global elements here */}
      <footer>
        <p>&copy; 2023 My Infinite Scrolling App</p>
      </footer>
    </div>
  );
}

export default App;
