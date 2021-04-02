import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import './Home.css';
import spinner from '../../images/spinner.png';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('https://blooming-chamber-00564.herokuapp.com/books')
        .then(response => response.json())
        .then(data => {
            setBooks(data);
            setLoading(false);
        });
    }, [])

    return (
        <div className='book-container'>
            <div className='books'>
                <div className='item'>
                    {/* {
                        books.length === 0 && <p>loading...</p>
                    } */}
                    {
                        loading ? <img src={spinner} alt=""/> : 
                        books.map(book => <Books book={book} key={book._id}></Books>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;