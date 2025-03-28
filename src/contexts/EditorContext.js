import React, { createContext, useState } from "react";

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [content, setContent] = useState("");

  return (
    <EditorContext.Provider value={{ query, setQuery, content, setContent }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => {
  const context = React.useContext(EditorContext);
  if (context === undefined) {
    throw new Error("useEditorContext must be used within a EditorProvider");
  }
  return context;
};
