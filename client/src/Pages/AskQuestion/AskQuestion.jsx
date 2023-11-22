import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import { } from 'cloudinary-react'
import "./AskQuestion.css";
import { askQuestion } from "../../actions/question";
import CloudinaryContextProvider from '../../CloudinaryContextProvider.js'

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  const { isNightTheme } = useTheme();
  const themeClass = isNightTheme ? 'night-theme' : 'day-theme';
  const [codeSnippet, setCodeSnippet] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              codeSnippet,
              videoLink,
              userPosted: User.result.name,
            },
            navigate
          )
        );
      } else alert("Please enter all the fields");
    } else alert("Login to ask question");
  };
  const handleVideoFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'ml_default'); // Replace with your Cloudinary upload preset

      const response = await fetch('https://api.cloudinary.com/v1_1/dca7yxbfr/video/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      setVideoLink(data.secure_url+"");
      // console.log(data.secure_url);
    }
  };


  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };
  return (
    <CloudinaryContextProvider>
      <div className={`ask-question ${themeClass}`}>
        <div className={`ask-ques-container ${themeClass}`}>
          <h1>Ask a public Question</h1>
          <form onSubmit={handleSubmit}>
            <div className={`ask-form-container ${themeClass}`}>
              <label htmlFor="ask-ques-title">
                <h4>Title</h4>
                <p>
                  Be specific while asking your question so that it can be
                  answered easily
                </p>
                <input
                  type="text"
                  id="ask-ques-title"
                  onChange={(e) => {
                    setQuestionTitle(e.target.value);
                  }}
                  style={{ borderRadius: "15px" }}
                  placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                />
              </label>
              <label htmlFor="ask-ques-body">
                <h4>Body</h4>
                <p>
                  Include all the information someone would need to answer your
                  question
                </p>
                <textarea
                  name=""
                  id="ask-ques-body"
                  onChange={(e) => {
                    setQuestionBody(e.target.value);
                  }}
                  cols="30"
                  rows="10"
                  onKeyPress={handleEnter}
                  style={{ borderRadius: "15px" }}
                ></textarea>
                <h4>Code Snippet</h4>
                <p>
                  Include a code snippet for describing your problem more clearly
                </p>
                <textarea
                  id="ask-ques-body"
                  onChange={(e) => {
                    setCodeSnippet(e.target.value);
                  }}
                  cols="30"
                  rows="10"
                  onKeyPress={handleEnter}
                  style={{ borderRadius: "15px" }}
                ></textarea>
                {/* <label htmlFor="ask-ques-video"> */}
                <h4>Video File</h4>
                <p>Upload a video file to describe your problem more clearly</p>
                <input
                  type="file"
                  id="ask-ques-video"
                  onChange={handleVideoFileChange}
                  accept="video/*"
                  style={{ borderRadius: "15px" }}
                />
              </label>

              <label htmlFor="ask-ques-tags">
                <h4>Tags</h4>
                <p>Add up to 5 tags to describe what your question is about</p>
                <input
                  type="text"
                  id="ask-ques-tags"
                  onChange={(e) => {
                    setQuestionTags(e.target.value.split(" "));
                  }}
                  placeholder="e.g. (xml typescript wordpress)"
                  style={{ borderRadius: "15px" }}
                />
              </label>
            </div>
            <input
              type="submit"
              value="Reivew your question"
              className="review-btn"
            />
          </form>
          {console.log(videoLink)}
        </div>
      </div>
    </CloudinaryContextProvider>
  );
};

export default AskQuestion;
