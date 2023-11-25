import React, { useState } from 'react';
import "./RichTextEditor.css"
const RichTextEditor = () => {
  const [content, setContent] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderlineClick = () => {
    setIsUnderline(!isUnderline);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const getEditorStyles = () => {
    let styles = {};
    if (isBold) {
      styles = { ...styles, fontWeight: 'bold' };
    }
    if (isItalic) {
      styles = { ...styles, fontStyle: 'italic' };
    }
    if (isUnderline) {
      styles = { ...styles, textDecoration: 'underline' };
    }

    return styles;
  };

  return (
    <div className='editor'>
      <h2>
        <b>Rich Text Editor</b>
      </h2>
      <button className='editor-btn' onClick={handleBoldClick}>Bold</button>
      <button className='editor-btn' onClick={handleItalicClick}>Italic</button>
      <button onClick={handleUnderlineClick} className='editor-btn'>Underline</button>
      <div
        contentEditable
        style={{ border: '1px solid  #ccc', padding: '8px', marginBottom: '10px', borderRadius: '12px', minHeight: '100px', ...getEditorStyles() }}
        onInput={handleContentChange}
      >
        {content}
      </div>
    </div>
  );
};

export default RichTextEditor;