import React, { useState } from "react";
import deleteLogo from "../../images/Group 33150.png";
import "./DeleteBooks.css";

const DeleteBooks = ({book}) => {
//   const { name, price, author, _id } = props.book;
    const [events, setEvents] = useState([]);    
  const deleteItem = (id) =>{
    fetch(`https://blooming-chamber-00564.herokuapp.com/deleteItem/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {
        const newData = events.filter((event) =>{
            return event._id !== result._id
        })
        setEvents(newData);
    })
  }
  return (
    <div className="main">
      <table>
        <tbody>
            <tr height="50px">
            <td width="300px" align="center">
                <h4>{book.name}</h4>
            </td>
            <td width="300px" align="center">
                <h4>{book.author}</h4>
            </td>
            <td width="300px" align="center">
                <h4>${book.price}</h4>
            </td>
            <td width="300px" align="center">
                <img onClick={() =>deleteItem(book._id)} style={{ height: "30px", cursor: "pointer" }} src={deleteLogo} alt="" />
            </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteBooks;
