import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




// todo card

const BlogCard = (props) => {


 
  const { urlEndPoint } = props;
  const { blog } = props;
  const [author, setAuthor] = useState(blog.author);
  const [categories, setCategories] = useState(blog.categories);
  const [text, setText] = useState(blog.text);
  const [title, setTitle] = useState(blog.title);
  const [year, setYear] = useState(blog.year);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [bloglist, setBlogList] = useState([])

  useEffect(() => {
    const URL = process.env.REACT_APP_URL_ENDPOINT
    axios
      .get(`${URL}/blogs/all`)
      .then(function (response) {
        console.log(response);
        setBlogList(response.data.blogs);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

 

  const handleDeleteBlog = () => {
    console.log(urlEndPoint);
    const URL = process.env.REACT_APP_URL_ENDPOINT;
    axios
      .delete(`${URL}/blogs/delete-one/${blog.id}`)
      .then((response) => {
        console.log("Resource deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  const handleUpdateToDo = () => {
    console.log(urlEndPoint);
    const URL = process.env.REACT_APP_URL_ENDPOINT;
    axios
      .put(`${URL}/blogs/update-blog/${blog.id}`, {
        title: title,
        text: text,
        author: author,
        categories: categories,
        year: year,
      })
      .then((response) => {
        console.log("Resource updated successfully");
        navigate("/search")
      })
      .catch((error) => {
        console.error("Error updating resource:", error);
      });
      
  };

  return (
    
    <div  style={{ 
    display: "flex",
    flexDirection: "column"
   
    }}>
        <Card style={{ width: "45rem", margin: "10px" }} key={blog.id}>
          <Card.Header style= {{color: "blue"}}>
            {!isEditing && <h2>{blog.title}</h2>}
            {isEditing && (
              <input
               placeholder="title"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            )}
          </Card.Header>
          <Card.Body style={{color: "black"}}>
            <Card.Text >
              <p>ID: {blog.id}</p>
              {!isEditing && <p>Text: {blog.text}</p>}
              {isEditing && (
                <>
                  <textarea
                   placeholder="text"
                    type="text"
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                  <br />
                </>
              )}
              {!isEditing && <p>Author: {blog.author}</p>}
              {isEditing && (
                <>
                  <input
                  placeholder="author"
                    type="text"
                    value={author}
                    onChange={(e) => {
                      setAuthor(e.target.value);
                    }}
                  />
                  <br />
                </>
              )}
              {!isEditing && <p>Categories: {blog.categories}</p>}
              {isEditing && (
                <>
                  <input
                  placeholder="categories"
                    type="text"
                    value={categories}
                    onChange={(e) => {
                      setCategories(e.target.value);
                    }}
                  />
                  <br />
                </>
              )}
              {!isEditing && <p>Year: {blog.year}</p>}
              {isEditing && (
                <>
                  <input
                  placeholder="year"
                    type="text"
                    value={year}
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  />
                  <br />
                </>
              )}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger" onClick={handleDeleteBlog}>
              Delete Blog
            </Button>
            {!isEditing && (
              <Button variant="primary" onClick={() => setIsEditing(true)}>
                Edit Blog
              </Button>
            )}
            {isEditing && (
              <Button variant="success" onClick={handleUpdateToDo}>
                Update Blog
              </Button>
            )}
          </Card.Footer>
        </Card>


    </div>
  );
};

export default BlogCard;
