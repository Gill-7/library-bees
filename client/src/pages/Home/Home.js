import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
// import { AiOutlineSearch } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import BookModal from "../../components/BookModal/BookModal";

function Home() {
  const [bookData, setbookData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  let startIdx = 1;
  let limit = 10;

  const submitHandler = async (input, startIdx) => {
    try {
      startIdx = 1;
      const res = await fetch(
        `/book?search=${input}&startIdx=${startIdx}&limit=${limit}`
      );
      const data = await res.json();
      setTotal(Math.ceil(data.totalItems / limit));
      setbookData(data.items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPageData = async (input, startIdx) => {
    try {
      const res = await fetch(
        `/book?search=${input}&startIdx=${startIdx}&limit=${limit}`
      );
      const data = await res.json();
      setbookData(data.items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(bookData);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [bookData]);

  const handlePageClick = (e) => {
    const startingIndex = e.selected * 10 + 1;
    fetchPageData(input, startingIndex);
  };

  const fetchData = async (e) => {
    setLoading(true);
    e.preventDefault();
    submitHandler(input, startIdx);
  };

  const showModalHandler = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  return (
    <div className={classes.main_content}>
      <form onSubmit={fetchData}>
        <input
          placeholder="type here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      {loading ? <p style={{ color: "#fff" }}>Loading...</p> : ""}
      {bookData.map((data, id) => (
        <div className={classes.container} key={id}>
          <div className={classes.left}>
            <img
              src={
                data.volumeInfo.imageLinks
                  ? data.volumeInfo.imageLinks.thumbnail
                  : "No Image Available"
              }
              onClick={() => showModalHandler({ data })}
              alt="Not Available"
            />
          </div>
          <div className={classes.right}>
            <div className={classes.right_header}>
              <h2 onClick={() => showModalHandler({ data })}>
                {data.volumeInfo.title}
              </h2>
              <button>Add to Reading List</button>
            </div>
            <h5>{data.volumeInfo.authors} </h5>
            <p>{data.volumeInfo.publishedDate}</p>
            <p>
              {data.volumeInfo.description
                ? `${data.volumeInfo.description.substring(0, 300)}...`
                : "No description provided for this book!"}
            </p>
            <div></div>
          </div>
        </div>
      ))}
      {showModal && (
        <BookModal setShowModal={setShowModal} modalData={modalData} />
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={total}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={3}
        containerClassName={classes.pagination}
        pageClassName={classes.page_item}
        pageLinkClassName={classes.page_link}
        previousClassName={classes.page_item}
        previousLinkClassName={classes.page_link}
        nextClassName={classes.page_item}
        nextLinkClassName={classes.page_link}
        activeLinkClassName={classes.active}
        breakClassName={classes.page_item}
        breakLinkClassName={classes.page_links}
      />
    </div>
  );
}

export default Home;
