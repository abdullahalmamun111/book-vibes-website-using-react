import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = (props) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/src/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h1 className='text-[40px] font-bold text-center items-center'>Books</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    books.map((book,idx) => <Book book={book} key={idx}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;