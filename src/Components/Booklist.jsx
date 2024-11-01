import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredList } from "./addToDb";
import Book from "./Book";

const Booklist = (props) => {
    const [readList, setReadList] = useState([])
    const AllBooks = useLoaderData();

    useEffect(()=> {
        const storedReadList = getStoredList();
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        console.log(storedReadList,AllBooks)

        const readBookList = AllBooks.filter(book => storedReadListInt.includes(book.bookId))

        setReadList(readBookList)
    },[])

    

  return (
    <div>
      <h1>Listed All Books</h1>
      <div role="tablist" className="tabs tabs-lifted mt-5">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab "
          aria-label="Read List"
          
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <h1>Listed Read Books {readList.length}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                readList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Whish List"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <h1>Listed All Whish Book</h1>
        </div>

      </div>
    </div>
  );
};

export default Booklist;
