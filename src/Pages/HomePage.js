import React from "react";
import BlogCards from "../Components/BlogCards";
import {useEffect, useState} from 'react'
import { useAuth } from "../Hooks/Auth";


//home page component
const HomePage = (props) => {
  const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;
  const { blogs, setBlogs } = props;

  const [message, setMessage] = useState("")
	// const {userToken} = useAuth()
	const auth = useAuth()
	console.log(auth);

	// console.log(userToken)
	
	useEffect(()=>{
		const fetchMessage = async () => {
			const headers = {
				"Content-Type": "application/json",
				// [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken
			}

			headers[process.env.REACT_APP_TOKEN_HEADER_KEY] = auth.userToken
			// headers.process.env.REACT_APP_TOKEN_HEADER_KEY = auth.userToken

			console.log(headers)

			const response = await fetch(`${urlEndPoint}/users/message`, {
				method: "GET",
				headers: headers,
			});
			const responseJSON = await response.json();
			console.log(responseJSON)
			setMessage(responseJSON.message)
		}
		if (auth.userToken !== null) {
			fetchMessage()
		}
		if (auth.userToken === null) {
			setMessage("")
		}
	}, [auth.userToken, urlEndPoint])

  
  return (
    <div>
      <h1>Full Stack Blog App</h1>
      
      {blogs.map((item, index) => {
        return (
          <div>
          <p>Message: {message}</p>
          <BlogCards
            blogs={blogs}
            blog={item}
            setBlogs={setBlogs}
            key={index}
            urlEndPoint={urlEndPoint}
          />
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
