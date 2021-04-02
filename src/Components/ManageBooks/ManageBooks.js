import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteBooks from "../DeleteBooks/DeleteBooks";
import "./ManageBooks.css";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://blooming-chamber-00564.herokuapp.com/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="main">
      <div className="main_container">
        <div className="left_pannel">
          <ul>
            <li>
              <Link className="link-item" to="/manage">
                Manage Books
              </Link>
            </li>
            <li>
              <Link className="link-item" to="/addBooks">
                Add Books
              </Link>
            </li>
            <li>
              <Link className="link-item" to="/manage">
                Edit Books
              </Link>
            </li>
          </ul>
        </div>
        <div className="right_pannel">
          <table>
            <tbody>
              <tr height="60px">
                <th width="300px">
                  <h2>Name</h2>
                </th>
                <th width="300px">
                  <h2>Author</h2>
                </th>
                <th width="300px">
                  <h2>Price</h2>
                </th>
                <th width="300px">
                  <h2>Action</h2>
                </th>
              </tr>
            </tbody>
          </table>
          <div className="content">
            {books.map((book) => (
              <DeleteBooks book={book}></DeleteBooks>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBooks;
