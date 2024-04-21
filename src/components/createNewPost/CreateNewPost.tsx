import { useState } from "react";

import { CreateNewPostProps } from "../../models/CreateNewPostProps";
import "./createNewPost.css";

const CreateNewPost: React.FC<CreateNewPostProps> = ({ onSubmit }) => {
  const [showModal, setShowModal] = useState(false);
  const [showTitleError, setShowTitleError] = useState(false);
  const [showDescriptionError, setShowDescriptionError] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");

  const closeModal = () => {
    setShowModal(false);
    setPostTitle("");
    setPostDescription("");
  };

  const openModal = () => {
    setShowModal(true);
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  const textareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostDescription(e.target.value);
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!postTitle) {
      setShowTitleError(true);
      return;
    }
    setShowTitleError(false);
    if (!postDescription) {
      setShowDescriptionError(true);
      return;
    }
    setShowDescriptionError(false);
    if (postTitle && postDescription) {
      onSubmit(postTitle, postDescription);
      closeModal();
    }
  };
  return (
    <>
      <div className={`modal-container ${showModal ? "active" : ""}`}>
        <form className="modal-form" onSubmit={onSubmitHandler}>
          <div className="modal-btn-controler">
            <button type="button" onClick={closeModal}>
              Close
            </button>
          </div>
          <div>
            <label className="modal-label" htmlFor="new-post-title">
              Enter a title for the post:
            </label>
            <input
              value={postTitle}
              type="text"
              className="modal-input"
              id="new-post-title"
              onChange={inputChange}
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
              onChange={textareaChange}
              value={postDescription}
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
        onClick={openModal}
      ></button>
    </>
  );
};

export default CreateNewPost;
