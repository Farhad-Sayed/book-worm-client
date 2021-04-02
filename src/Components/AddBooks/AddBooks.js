import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import './AddBooks.css';

const AddBooks = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  // form data submit
  const onSubmit = (data) => {
    // console.log(data);
    const eventData = {
      name: data.name,
      author: data.author,
      price: data.price,
      quantity: data.quantity,
      imageURL: imageURL,
    };
    const url = `https://blooming-chamber-00564.herokuapp.com/addBooks`;
    console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((response) => console.log("server side response", response));
  };

  // image uploade
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "b3d84075885f27b7c533005706f44917");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)

      .then(function (response) {
        //   console.log(response.data.data.display_url);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
            <div className="add_item">
              <form onSubmit={handleSubmit(onSubmit)}>
              {/* <span>Book: </span>{" "} */}
              <input className="form-input" name="name" placeholder="Book name..." ref={register} />
              <br /> <br />
              {/* <span>Author: </span>{" "} */}
              <input className="form-input" name="author" placeholder="Author name..." ref={register} />
              <br /> <br />
              {/* <span>Price: </span>{" "} */}
              <input className="form-input" type="number" name="price" placeholder="Add price" ref={register} />
              <br /> <br />
              {/* <span>Qunatity: </span>{" "} */}
              <input className="form-input" type="number" name="quantity" defaultValue=" " placeholder="Add quantity" ref={register}
              />
              <br /> <br />
              <input className="form-input" type="file" onChange={handleImageUpload} />
              {errors.exampleRequired && <span>This field is required</span>}
              <br /> <br />
              <input className="buy-btn form-input" type="submit" />
            </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
