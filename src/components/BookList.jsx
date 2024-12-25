import React from 'react';
import BookCard from './BookCard';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    image: 'https://picsum.photos/200/300?random=1',
    author: 'F. Scott Fitzgerald',
    description: 'A novel set in the 1920s about wealth, love, and the American dream.',
    genre: 'Classic',
    year: 1925,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    image: 'https://picsum.photos/200/300?random=2',
    author: 'Harper Lee',
    description: 'A story of racial injustice and moral growth in the American South.',
    genre: 'Fiction',
    year: 1960,
  },
  {
    id: 3,
    title: '1984',
    image: 'https://picsum.photos/200/300?random=3',
    author: 'George Orwell',
    description: 'A dystopian novel about a totalitarian regime and the perils of absolute power.',
    genre: 'Dystopian',
    year: 1949,
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    image: 'https://picsum.photos/200/300?random=4',
    author: 'Jane Austen',
    description: 'A romantic novel about manners, marriage, and social standing.',
    genre: 'Romance',
    year: 1813,
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    image: 'https://picsum.photos/200/300?random=5',
    author: 'J.D. Salinger',
    description: 'A story of teenage rebellion and identity in 1950s America.',
    genre: 'Fiction',
    year: 1951,
  },
  {
    id: 6,
    title: 'The Hobbit',
    image: 'https://picsum.photos/200/300?random=6',
    author: 'J.R.R. Tolkien',
    description: 'A fantasy adventure about a hobbit who joins a quest to reclaim a treasure.',
    genre: 'Fantasy',
    year: 1937,
  },
  {
    id: 7,
    title: 'Moby Dick',
    image: 'https://picsum.photos/200/300?random=7',
    author: 'Herman Melville',
    description: 'An epic tale of a sea captain’s obsession with a white whale.',
    genre: 'Adventure',
    year: 1851,
  },
  {
    id: 8,
    title: 'War and Peace',
    image: 'https://picsum.photos/200/300?random=8',
    author: 'Leo Tolstoy',
    description: 'A sweeping narrative of Russian society during the Napoleonic era.',
    genre: 'Historical Fiction',
    year: 1869,
  },
  {
    id: 9,
    title: 'The Alchemist',
    image: 'https://picsum.photos/200/300?random=9',
    author: 'Paulo Coelho',
    description: 'A philosophical novel about following one’s dreams and destiny.',
    genre: 'Philosophy',
    year: 1988,
  },
  {
    id: 10,
    title: 'The Road',
    image: 'https://picsum.photos/200/300?random=10',
    author: 'Cormac McCarthy',
    description: 'A post-apocalyptic journey of a father and son.',
    genre: 'Post-Apocalyptic',
    year: 2006,
  },
];

function BookList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Book List</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
