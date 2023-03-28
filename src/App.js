import "./App.css";

import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BlogForm from "./Pages/blogForm";
import Layout from "./Layouts/Layout";
import axios from "axios";
import BlogCards from "./Components/BlogCards";
import SearchBar from "./Components/SearchBar";
import RegistrationPage from "./Pages/RegistrationPage"
import LoginPage from "./Pages/LoginPage"

const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {
  //set up hooks for the state
  const [blogsList, setBlogs] = useState([]);

  //load the todo items from the back end
  useEffect(() => {
    axios
      .get(`${urlEndPoint}/blogs/all`)
      .then(function (response) {
        console.log(response);
        setBlogs(response.data.blogs);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage blogs={blogsList} />,
        },
        {
          path: "blog-form",
          element: (
            <BlogForm
              urlEndPoint={urlEndPoint}
              blogs={blogsList}
              setBlogs = {setBlogs}
            />
          ),
        },
        {
          path: "blog-card",
          element: (
            <BlogCards
              urlEndPoint={urlEndPoint}
              setBlogs = {setBlogs}
              blogsList = {blogsList}
            />
          ),
        },
        {
           path: "search",
           element: (
            <SearchBar blogs={blogsList} setBlogs = {setBlogs}/>
           )

        },
        {
          path: "registration",
          element: (
           <RegistrationPage/>
          )

       },
       {
        path: "login",
        element: (
         <LoginPage/>
        )

     }
      ],
    },
  ]);

  return (
    <div className="App-header">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
