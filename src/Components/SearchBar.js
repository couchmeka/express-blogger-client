import { useState } from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const { blogs } = props;
  const [searchItems, setSearchItems] = useState(blogs);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchInput(value);
    setSearchItems(
      blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(value) 
  
      )
    );
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        value={searchInput}
        onChange={handleChange}
      />
      <button>Search</button>
      <div className="card-columns">
        {searchItems.map((blog, index) => (
          <Card style={{ width: "45rem", margin: "10px" }} key={index} >
            <Card.Body>
              <Card.Title style={{color: "blue" }}>Title: {blog.title}</Card.Title>
              <Card.Text style={{color: "black"}}>Text: {blog.text}</Card.Text>
              <Card.Footer>
                <small className="text-muted">Categories: {blog.categories}</small>
              </Card.Footer>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Author: {blog.author}</small>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
