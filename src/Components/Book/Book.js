import React, { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import './Book.css';
const Book = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);  
  const { name, author, quantity, price, imageURL, _id } = props.item;
  const history = useHistory();
  const handleOrders = () =>{
    history.push(`/orders/${_id}`);
    const newOrder ={
        name: name,
        author: author,
        price: price,
        quantity: quantity,
        email: loggedInUser.email,
        date: new Date().toDateString('dd/MM/yyyy')
    }

    fetch('http://localhost:5000/addOrders', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newOrder)
    })
    .then(response => response.json())
    .then(data=> console.log(data));
  }

  return (
    <div className="book-container">
      <div className="book-description">
        <h1 style={{marginTop:'2rem', color:'lightblue'}}>CheckOut</h1> <br />
        <table width="80%" height="150px">
          <thead>
            <tr height="60px">
              <th>Description</th>
              <th>Preview</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="center">
                <h4>{name}</h4> <br />
                <p>{author}</p>
              </td>
              <td align="center">
                <img style={{ height: "100px" }} src={imageURL} alt="" />
              </td>
              <td align="center">
                <h4>{quantity}</h4>
              </td>
              <td align="center">
                <h4>${price}</h4>
              </td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td align="center"><button onClick={() =>handleOrders()} className="buy-btn">CheckOut</button></td>
            </tr>
          </tbody>         
        </table>
      </div>
    </div>
  );
};

export default Book;
