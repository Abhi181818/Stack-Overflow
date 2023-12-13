import React, { useState, useRef, useEffect } from 'react';
import "./RichTextEditor.css"
const RichTextEditor = ({ onContentChange }) => {
  const contentRef = useRef(null);
  const formatDoc = (cmd, value = null) => {
    contentRef.current.focus()
    if (value) {
      document.execCommand(cmd, false, value);
    } else {
      document.execCommand(cmd);
    }
    if (onContentChange) onContentChange(contentRef.current.innerHTML)
  };

  return (
    <div className="container">
      <div className="toolbar">
        <div className="toolbar_item" >
          <button type="button" onClick={() => formatDoc('bold')}>
            <i className="fas fa-bold"></i>
          </button>
          <button type="button" onClick={() => formatDoc('italic')}>
            <i className="fas fa-italic"></i>
          </button>
          <button type="button" onClick={() => formatDoc('underline')}>
            <i className="fas fa-underline"></i>
          </button>
          <button type="button" onClick={() => formatDoc('strikeThrough')}>
            <i className="fas fa-strikethrough"></i>
          </button>
          <button type="button" onClick={() => formatDoc('justifyLeft')}>
            <i className="fas fa-align-left"></i>
          </button>
          <button type="button" onClick={() => formatDoc('justifyCenter')}>
            <i className="fas fa-align-center"></i>
          </button>
          <button type="button" onClick={() => formatDoc('justifyRight')}>
            <i className="fas fa-align-right"></i>
          </button>
          <select onChange={(e) => formatDoc('fontSize', e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3" defaultValue="3">
              3
            </option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div style={{ display: "flex", alignItems: "center" }}>
            Color
            <input type="color" onChange={(e) => formatDoc('foreColor', e.target.value)} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            Hilight
            <input type="color" onChange={(e) => formatDoc('backColor', e.target.value)} />
          </div>

          <button type="button" onClick={() => formatDoc('insertUnorderedList')}>
            <i className="fas fa-list-ul"></i>
          </button>
          <button type="button" onClick={() => formatDoc('insertOrderedList')}>
            <i className="fas fa-list-ol"></i>
          </button>
          <button type="button" onClick={() => formatDoc('indent')}>
            <i className="fas fa-indent"></i>
          </button>
          <button type="button" onClick={() => formatDoc('outdent')}>
            <i className="fas fa-outdent"></i>
          </button>

        </div>
      </div>
      <div id="content" ref={contentRef} style={{ padding: "5px", marginTop: "20px", marginBottom: "12px", height: "auto", minHeight: "120px", border: "1px solid blue", borderRadius: "15px", overflowWrap: "break-word" }} contentEditable="true" onBlur={() => onContentChange(contentRef.current.innerHTML)} spellCheck="false">
      </div>
    </div>
  );
};

export default RichTextEditor;
