import React, { memo, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import "./Editor.css";
import { useEditorContext } from "../contexts/EditorContext";

const Editor = ({ setQuery, query, executeQuery }) => {
  const { content, setContent } = useEditorContext();

  useEffect(() => {
    if (query) {
      setContent(query);
    }
  }, []);

  return (
    <div className="editor">
      <CodeMirror
        value={content}
        extensions={[sql()]}
        onChange={(value) => {
          setContent(value);
        }}
      />
      <div className="buttons">
        <button
          className="clear button"
          onClick={() => {
            setQuery("");
          }}
        >
          Clear
        </button>
        <button
          className="run button"
          onClick={() => {
            setQuery(content);
            executeQuery(content);
          }}
        >
          Run
        </button>
      </div>
    </div>
  );
};

export default memo(Editor);
