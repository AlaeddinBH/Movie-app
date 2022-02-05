import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./StarRating";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Edit = ({movie,handelEdit}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [name, setName] = useState(movie.name);
  const [date, setDate] = useState(movie.date);
  const [rating, setRating] = useState(movie.rating);
  const [image, setImage] = useState(movie.image);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // handel rating
  const handelRating = (x) => {
    setRating(x);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      name,
      date,
      rating,
      image
    }
    handelEdit(newMovie);
    closeModal()
  }

  return (
    <div>
      <button className="add-movie-btn" onClick={openModal}>
        Add Movie
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="form-container">
          <form onSubmit={handelSubmit} className="Add-Movie-form">
            <p type="Name:">
              <input
                type="text"
                className="formEntry"
                placeholder="Enter the name of the movie"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>

            <p type="Date:">
              <input
                type="date"
                className="name formEntry"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </p>

            <StarRating handelRating={handelRating} rating={rating} />

            <p type="URL">
              <input
                type="text"
                className="name formEntry"
                placeholder="Url Poster"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </p>

            <button onClick={closeModal}>Cancel</button>

            <button type="submit">Save</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Edit;
