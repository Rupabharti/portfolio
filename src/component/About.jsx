import React from 'react';

const About = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-50 p-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80"
          alt="Bookstore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content on top of the background image */}
      <div className="relative z-10 max-w-4xl text-center text-white p-8 rounded-lg">
        <h2 className="text-4xl font-bold mb-6">About Our Bibliobyte</h2>
        <p className="text-lg mb-4">
          Welcome to our  Bibliobyte ! We are passionate about bringing the joy of reading to everyone. Whether you are looking for the latest bestseller, a classic novel, or something off the beaten path, we have something for every reader.
        </p>
        <p className="text-lg mb-4">
          Our  Bibliobyte was founded with the belief that books have the power to change lives. We carefully curate our collection to include a wide variety of genres, authors, and perspectives. Our team is dedicated to helping you find the perfect book, whether it's for yourself or a gift for someone special.
        </p>
        <p className="text-lg mb-4">
          Beyond just selling books, we strive to create a community space where readers can connect, discover, and share their love of books. From author events to book clubs, we are more than just a store—we are a hub for book lovers.
        </p>
        <p className="text-lg">
          Thank you for supporting our independent  Bibliobyte. We are committed to providing excellent customer service, a diverse selection of books, and a welcoming environment for all readers.
        </p>
      </div>
    </div>
  );
};

export default About;
