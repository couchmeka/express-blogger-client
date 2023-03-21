import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogForm = (props) => {
  const { urlEndPoint } = props;
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [categories, setCategories] = useState("");

  console.log(props);
  //instantiate navigator
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${urlEndPoint}/blogs/create-one`,
        {
          title: title,
          text: text,
          author: author,
          year: year,
          categories: categories,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response && response.data && response.data.success) {
        console.log("ToDo item created successfully!");

        navigate("/");
      } else {
        console.log("Error creating ToDo item.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Blog </h1>
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <label>Text</label>
        <textarea
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <br />
        <label>Author</label>
        <input
          type="text"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <label>Year</label>
        <input
          type="text"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <label>Categories</label>
        <input
          type="text"
          onChange={(e) => {
            setCategories(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Create Blog Post</button>
      </form>
    </div>
  );
};

export default BlogForm;
