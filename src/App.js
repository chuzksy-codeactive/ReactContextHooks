import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthenticateProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthenticateProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthenticateProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
