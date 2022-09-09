import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';

import './App.css';

import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import TechnologyManager from "./components/technologies/TechnologyManager";
import CourseManager from "./components/courses/CourseManager";
import ErrorPage from "./components/error/ErrorPage";


function App(): React.ReactElement {

  return (
      <div className="App">
        <AppBar position="static" color="secondary">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Course Manager
            </Typography>
          </Toolbar>
        </AppBar>

        <Outlet />

        <Routes>
          <Route path="/" element={<TechnologyManager/>} />
          <Route path="/technology/:id/courses" element={<CourseManager />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
  );
}

export default App;