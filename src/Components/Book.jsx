import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, author, image, review, category, publisher, rating,bookId } = book;
  return (
    <Link to ={`books/${bookId}`}>
      <div className=" bg-base-100 card shadow-xl rounded-xl p-5">
        <figure className="py-6 rounded-xl bg-gray-300 ">
          <img
            src={image}
            alt={bookName}
            className="h-[166px] w-[166px] rounded-md"
          />
        </figure>
        <div className="py-5 space-y-3">
          <div className="flex gap-5">
            <button className="px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] rounded-full">
              Young Adult
            </button>
            <button className="px-4 py-2 bg-[#23BE0A0D] text-[#23BE0A] rounded-full">
              Identity
            </button>
          </div>
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p className="text-xl ">By: {author}</p>
          <div className="card-actions justify-between border-t-2 border-dashed border-gray-500 py-4">
            <div className="badge badge-outline">Fiction</div>
            <div className="badge badge-outline">Ratings: {rating}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
