import React from "react";
import { useHistory} from "react-router";
import "./Books.css";

const Books = (props) => {
  const { name, imageURL, price, author, _id} = props.book;
  const history = useHistory();

  const handleBuyNow = (id) => {
    history.push(`/checkout/${id}`)
    fetch(`https://blooming-chamber-00564.herokuapp.com/book/${id}`)
    .then(response => response.json())
    .then(data => console.log(data));
  }

  return (
    <div className="book">
      <img className="cover" src={imageURL} alt="" />
      <h3>{name}</h3>
      <p>{author}</p>
      <h4 style={{marginBottom: '1rem'}}>${price}</h4>
      <button onClick={() => handleBuyNow(_id)} className='buy-btn'>Buy Now</button>
    </div>
  );
};

export default Books;
