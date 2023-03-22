import BlogCards from "../Components/BlogCards";
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
            blogs={blogs}
            blog={item}
            setBlogs={setBlogs}
            key={index}
            urlEndPoint={urlEndPoint}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
