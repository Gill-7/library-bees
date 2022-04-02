import React from "react";
import classes from "./BookModal.module.css";

function BookModal({ setShowModal, modalData }) {
  const data = modalData.data;
  const publisher = data.volumeInfo.publisher;
  console.log(publisher);
  const getLanguage =
    data.volumeInfo.language === "en" ? "English" : data.volumeInfo.language;

  return (
    <>
      <div
        className={classes.modalBackground}
        onClick={() => {
          setShowModal(false);
        }}
      />
      <div className={classes.modalContainer}>
        <div className={classes.container}>
          <div className={classes.left_side}>
            <h2 className={classes.title}>{data.volumeInfo.title}</h2>
            <p className={classes.otherData}>
              {data.volumeInfo.authors} {data.volumeInfo.authors && "|"}{" "}
              {data.volumeInfo.publishedDate}
            </p>
            <p className={classes.description}>
              {data.volumeInfo.description
                ? `${data.volumeInfo.description}`
                : ""}
            </p>
            <div>
              <p>
                {data.volumeInfo.publisher === undefined
                  ? ""
                  : `Publisher: ${data.volumeInfo.publisher}`}
              </p>
              <p>
                {data.volumeInfo.categories === undefined
                  ? ""
                  : `Category: ${data.volumeInfo.categories}`}
              </p>
              <p>Language: {getLanguage}</p>
            </div>
          </div>
          <div className={classes.right_side}>
            <img
              src={
                data.volumeInfo.imageLinks
                  ? data.volumeInfo.imageLinks.thumbnail
                  : "No Image Available"
              }
              alt="Not Available"
            />
            <p>
              {data.volumeInfo.pageCount === undefined
                ? ""
                : `${data.volumeInfo.pageCount} page`}
            </p>
          </div>
        </div>
        <div className={classes.footer}>
          <button
            onClick={() => {
              setShowModal(false);
            }}
            id={classes.backBtn}
          >
            back
          </button>
        </div>
      </div>
    </>
  );
}

export default BookModal;
