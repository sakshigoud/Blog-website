import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditPost from './pages/Edit';
import PostList from './components/Postlist';
import CreatePost from './pages/CreateForm';
import Details from './pages/Details';
import HomePage from './pages/Homepage';
function App() {
  return (
    <div className="App">
      <HomePage />
      <Router>
        <Routes>
          <Route path="/posts/:id" element={<Details />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/" element={<PostList />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </Router>
      {/* <CreatePost /> */}

    </div>
  );
}

export default App;
