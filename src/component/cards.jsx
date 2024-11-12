import React from 'react';

function Cards({ item }) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl mb-10  hover:shadow-2xl transition duration-300 ease-in-out dark:bg-slate-900 dark:text-white dark:border">
        <figure className="overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white">Buy now</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
