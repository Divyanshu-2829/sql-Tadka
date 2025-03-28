import React from "react";
import "./SideNavbar.css";
import { useEditorContext } from "../contexts/EditorContext";
import { queries } from "../constants/constants";
const links = [
  { label: "Getting Started", value: "getting-started" },
  { label: "Tables", value: "tables" },
  { label: "Query Editor", value: "query-editor" },
];

//random sql queries with labels

const SideNavbar = () => {
  const { query, setQuery, setContent } = useEditorContext();
  const handleLinkClick = (value) => {
    setQuery(value);
    setContent(value);
  };
  return (
    <div className="side-navbar">
      <div className="app-logo">SQL Tadka</div>
      <hr className="h-line" />
      <div className="nav-links">
        <ul className="link-items">
          {queries.map((item, idx) => (
            <li
              key={item.label + idx}
              className={`link-item ${query === item.value ? "active" : ""}`}
              onClick={() => handleLinkClick(item.value)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
