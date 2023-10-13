import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Progressbar from './components/Progressbar';
import AutomaticProgress from './components/AutomaticProgress';
import Stopwatch from './components/Stopwatch';
import Navigation from './Navigation/Navigation';
import TodoList from './components/TodoList'

function App() {
  return (
    <Router basename="">
      <div>
        <Navigation />
        <Routes >
          <Route path="/" element={<Progressbar />} />
          <Route path="/automatic-progress" element={<AutomaticProgress />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/todolist" element={<TodoList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
