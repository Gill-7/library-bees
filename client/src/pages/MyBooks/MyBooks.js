import React from "react";
import classes from "./MyBooks.module.css";

const MyBooks = () => {
  return (
    <>
      <div className={classes.books_container}>
        <div className={classes.sidebar}>
          <p>My Library</p>
          <p>Reading Now (0)</p>
          <p>Next to Read</p>
          <p>Have Read (0)</p>
          <button>New</button>
          <p>Other places to find books</p>
          <p>Website 1</p>
          <p>Website 2</p>
          <p>Website 3</p>
        </div>
        <div className={classes.main}>
          <p>Book here</p>
        </div>
      </div>
    </>
  );
};

export default MyBooks;
