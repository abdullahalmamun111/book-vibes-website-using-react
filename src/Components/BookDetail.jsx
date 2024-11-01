import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToReadList, addToWhishList } from "./addToDb";
import { toast } from "react-toastify";

const BookDetail = (props) => {
  const { bookId } = useParams();
  const Id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === Id);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    publisher,
    yearOfPublishing,
  } = book;

//   handle mark as read button handle and functionality

  const handleMarkAsRead = (id) => {
    addToReadList(id)
  }

//   handle add to whish list button and functionality

  const handleAddToWhishList = (id) => {
    addToWhishList(id);
  }

  return (
    <div className=" p-5">
      <div className=" flex flex-col md:flex-row gap-5 ">
        <div className="w-[50%] bg-base-200 p-5 flex justify-center rounded-xl">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="w-[50%] p-5 space-y-3">
          <h1 className="text-[40px] font-bold">{bookName}</h1>
          <p className="text-[26px] text-gray-400">By : {author}</p>
          <div className="divider divider-end"></div>
          <p className="text-[26px] text-gray-400">Fiction</p>
          <div className="divider divider-end"></div>
          <p className="text-gray-500">Review : {review}</p>
          <div className="divider divider-end"></div>
          <p className="text-gray-500">Number OF Pages : <span className="ml-5 font-bold">{totalPages}</span></p>
          <p className="text-gray-500">Publisher : <span className="ml-5 font-bold">{publisher}</span></p>
          <p className="text-gray-500">Year OF Publishing : <span className="ml-5 font-bold">{yearOfPublishing}</span></p>
          <p className="text-gray-500">Rating: <span className="ml-5 font-bold">{rating}</span></p>
          <div className="flex gap-5">
          <button class="btn btn-outline" onClick={() => handleMarkAsRead (bookId)}>Mark As Read</button>
          <button class="btn btn-warning" onClick={() => handleAddToWhishList(bookId)}>Add To Whish List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
