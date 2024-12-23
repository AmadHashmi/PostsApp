/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [bodyEntered, setBodyEntered] = useState("");
  const [authorEntered, setAuthorEntered] = useState("");

  function onBodyChangeHandler(event) {
    setBodyEntered(event.target.value);
  }

  function onAuthorChangeHandler(event) {
    setAuthorEntered(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const postData = {
      body: bodyEntered,
      author: authorEntered,
    };
    onAddPost(postData);
    console.log(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChangeHandler} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={onAuthorChangeHandler}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
