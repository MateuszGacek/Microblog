import { useState } from "react";

import { CreateNewPostProps } from "../../models/CreateNewPostProps";
import "./createNewPost.css";

const CreateNewPost: React.FC<CreateNewPostProps> = ({ onSubmit }) => {
  const [showModal, setShowModal] = useState(false);
  const [showTitleError, setShowTitleError] = useState(false);
  const [showDescriptionError, setShowDescriptionError] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostDescription, setNewPostDescription] = useState("");
  const closeModalHandle = () => {
    setShowModal(false);
    setNewPostTitle("");
    setNewPostDescription("");
  };

  const openModalHandle = () => {
    setShowModal(true);
  };
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewPostTitle(e.target.value);
  };
  const textareaChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewPostDescription(e.target.value);
  };
  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!newPostTitle) {
      setShowTitleError(true);
      return;
    }
    setShowTitleError(false);
    if (!newPostDescription) {
      setShowDescriptionError(true);
      return;
    }
    setShowDescriptionError(false);
    if (newPostTitle && newPostDescription) {
      onSubmit(newPostTitle, newPostDescription);
      closeModalHandle();
    }
  };
  return (
    <>
      <div className={`modal-container ${showModal ? "active" : ""}`}>
        <form className="modal-form" onSubmit={onSubmitHandler}>
          <div className="modal-btn-controler">
            <button type="button" onClick={closeModalHandle}>
              Close
            </button>
          </div>
          <div>
            <label className="modal-label" htmlFor="new-post-title">
              Enter a title for the post:
            </label>
            <input
              value={newPostTitle}
              type="text"
              className="modal-input"
              id="new-post-title"
              onChange={inputChangeHandler}
            ></input>
            <p className={`modal-error ${showTitleError ? "active" : ""}`}>
              Please enter a title
            </p>
          </div>
          <div>
            <label className="modal-label" htmlFor="new-post-description">
              Enter the content of the article:
            </label>
            <textarea
              onChange={textareaChangeHandler}
              value={newPostDescription}
              className="modal-textarea"
              id="new-post-description"
            ></textarea>
            <p
              className={`modal-error ${showDescriptionError ? "active" : ""}`}
            >
              Please enter a description
            </p>
          </div>
          <div className="modal-btn-controler">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <button
        type="button"
        className="btn-active-modal"
        onClick={openModalHandle}
      ></button>
    </>
  );
};

export default CreateNewPost;
