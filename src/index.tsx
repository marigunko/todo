import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './Layouts/Layout';

const todos: ToDo[] = [
    {
      id: 0,
      text: '1 действие',
      isDone: false    
    },
    {
      id: 1,
      text: '2 действие',
      isDone: true   
    },
    {
      id: 2,
      text: '3 действие',
      isDone: false    
    },
    {
      id: 3,
      text: '4 действие',
      isDone: true    
    }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos} />
      },
      {
        path: '/todo',
        element: <ToDoListPage />
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos} />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
], {basename: '/app/'})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
