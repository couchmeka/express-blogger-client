import BlogCards from "../Components/BlogCards";
import { Outlet } from "react-router-dom";
//home page component
const HomePage = (props) => {
  const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;
  const { blogs, setBlogs } = props;


  
  return (
    <div>
      <h1>Full Stack Blog App</h1>
      {blogs.map((item, index) => {
        return (
          <BlogCards
            blog={item}
            setBlogs={setBlogs}
            blogs={blogs}
            key={index}
            urlEndPoint={urlEndPoint}
          />
        );
      })}
      <Outlet blogsList={blogs}/>
    </div>
  );
};

export default HomePage;
