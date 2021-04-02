import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Book from '../Book/Book';

const CheckOut = () => {
    const {id} = useParams();
    const [book, setBook] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/book/${id}`)
        .then(response => response.json())
        .then(data => setBook(data));
    }, [id])

    return (
        <div>
           {
               book.map(item => <Book item={item} key={item._id}></Book>)
           }

        </div>
    );
};

export default CheckOut;