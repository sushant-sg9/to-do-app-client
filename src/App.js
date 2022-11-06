import Login from './component/Login';
import SignUp from './component/signup';
import Eroute from './component/Eroute'
import Proute from './component/Proute'
import React from 'react';
import TodoList from './component/todoList'
import Form from './component/Form'

import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={
            <Eroute>
              <Login />
              </Eroute>
          } />
          <Route path="/signup" element={
              <Eroute>
              <SignUp />
              </Eroute>
          } />
          <Route path="/todolist" element={
              <Proute>
              <TodoList/>
              </Proute>
          } />
          <Route path="/form" element={
            <Proute>
              <Form />
            </Proute>
          } />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
