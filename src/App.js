import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(
    "# Hello, World!\n## Sub-heading\n[Link](https://www.google.com)\n`Inline Code`\n```\nCode Block\n```\n- List Item\n> Blockquote\n![Image](https://www.google.com/image.png)\n**Bold Text**"
  );

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="App">
      <textarea id="editor" value={markdown} onChange={handleChange}></textarea>
      <div id="preview" dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
}

export default App;
