import React, { useState } from 'react';
import { useBookContext } from './BookContext';

function BookDetails() {
  const { clickedBook } = useBookContext();

  if (!clickedBook) {
    return (
      <p className="text-center text-gray-500 text-lg mt-10">
        No book selected. Please select a book first.
      </p>
    );
  }

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setFormSubmitted(true);
      setEmail('');
      setTimeout(() => setFormSubmitted(false), 3000);
    }
  };

  return (
    <div className="container mx-auto p-6 lg:p-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        {clickedBook.title}
      </h1>
      <div className="flex flex-col lg:flex-row gap-12">
        <img
          src={clickedBook.image}
          alt={clickedBook.title}
          className="w-full lg:w-1/3 h-auto rounded-lg shadow-lg object-cover"
        />
        <div className="flex-1">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold text-gray-800">Author:</span>{' '}
            {clickedBook.author}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold text-gray-800">Genre:</span>{' '}
            {clickedBook.genre}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold text-gray-800">Year:</span>{' '}
            {clickedBook.year}
          </p>
          <p className="text-gray-700 leading-relaxed">{clickedBook.description}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Comments
        </h2>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Write a comment..."
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="mt-3 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          >
            Submit Comment
          </button>
        </form>
        {comments.length > 0 && (
          <ul className="list-disc pl-6 space-y-3">
            {comments.map((comment, index) => (
              <li key={index} className="text-gray-700 bg-gray-100 p-3 rounded-lg">
                {comment}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Request This Book
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Your email"
            required
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
          >
            Submit Request
          </button>
        </form>
        {formSubmitted && (
          <p className="text-green-600 text-center mt-4">
            Request submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
}

export default BookDetails;
