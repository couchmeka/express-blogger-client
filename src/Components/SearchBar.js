import { useState } from "react";

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");
    const { blogs } = props;
    const [searchItems, setSearchItems] = useState(blogs);
  
    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
      setSearchItems(
        blogs.filter((blog) => {
          return blog.title.toLowerCase().includes(searchInput.toLowerCase());
        })
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
        <table>
          <tr>
            <th>Blog</th>
            <th>Content</th>
          </tr>
          {searchItems.map((blog, index) => (
            <div key={index}>
              <tr>
                <td>{blog.title}</td>
                <td>{blog.text}</td>
              </tr>
            </div>
          ))}
        </table>
      </div>
    );
};

export default SearchBar;
