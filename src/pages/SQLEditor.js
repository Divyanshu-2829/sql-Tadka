import React, { useEffect, useState, memo, lazy, Suspense } from "react";
import SideNavbar from "../components/SideNavbar";
import { fetchData } from "../helpers/helpers";

import "./SQLEditor.css";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import TABLE_NAMES from "../constants/constants";
import SearchComponent from "../components/SearchComponent";
import ResultSection from "../components/ResultSection";
import { EditorProvider } from "../contexts/EditorContext";

const Editor = lazy(() => import("../components/Editor"));

const loader = () => {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={50}
      width={50}
      strokeWidth={5}
      color="#2F2E41"
      secondaryColor="#d1d5db"
    />
  );
};
const SQLEditor = () => {
  const [tableName, setTableName] = useState("Customers");
  const [query, setQuery] = useState("SELECT * FROM Customers");
  const [result, setResult] = useState("");
  const [resultIsLoading, setResultIsLoading] = useState(false);
  const [history, setHistory] = useState([]);

  // Function to get Table name out of the query String
  const getTableName = (items) => {
    console.log("Items: ", items);
    const idx = items.indexOf("FROM");
    if (idx !== -1 && idx + 1 < items.length) {
      const tableName = items[idx + 1].split(/\s+/)[0]; // Take only the first part before spaces/newlines
      setTableName(tableName);
      return tableName;
    }
    return null;
  };

  const executeQuery = (query) => {
    if (query === "") {
      toast.custom(
        <div className="customToast">Please enter a query to execute</div>
      );
      setResultIsLoading(false);
    } else if (query.split(" ").length > 3 && query.split(" ")[3].length > 0) {
      setResultIsLoading(true);
      const items = query.split(" ");
      if (items[0].toLowerCase() === "select") {
        const table = getTableName(items);
        if (TABLE_NAMES.includes(table)) {
          fetchData(
            table.toLowerCase(),
            setResult,
            setResultIsLoading,
            setHistory,
            query
          );
        } else {
          console.log("Table name is not valid: ", table);
          const tableName = "customers";
          fetchData(
            tableName,
            setResult,
            setResultIsLoading,
            setHistory,
            "SELECT * FROM Customers"
          );
        }
      } else {
        toast.error("Sorry! SELECT queries are only supported for now.");
        setResultIsLoading(false);
      }
    } else {
      console.log("Query is not valid: ", query);
      const tableName = "customers";
      fetchData(
        tableName,
        setResult,
        setResultIsLoading,
        setHistory,
        "SELECT * FROM Customers"
      );
      // toast.error("Sorry! Something is wrong with your query");
      setResultIsLoading(false);
    }
  };

  useEffect(() => {
    if (query === "") {
      setResult("");
    }
    console.log("Query changed: ", result);
  }, [query]);

  return (
    <div className="sql-editor">
      <EditorProvider>
        <Toaster />
        <div className="navbar">
          <SideNavbar />
        </div>
        <div className="container">
          <div className="col1">
            <div className="editor-section section">
              <Suspense
                fallback={<div className="suspense-loader">{loader()}</div>}
              >
                <Editor
                  setQuery={setQuery}
                  query={query}
                  executeQuery={executeQuery}
                />
              </Suspense>
            </div>
            <div className="search-section">
              <div className="available-tables-section section">
                <SearchComponent
                  searchList={TABLE_NAMES}
                  head={"Available Tables"}
                  type={"table"}
                />
              </div>
              <div className="history-section section">
                <SearchComponent
                  searchList={history}
                  head={"History"}
                  type={"history"}
                />
              </div>
            </div>
          </div>
          <div className="col2">
            <div className="result-section section">
              <ResultSection
                tableName={tableName}
                result={result}
                resultIsLoading={resultIsLoading}
              />
            </div>
          </div>
        </div>
      </EditorProvider>
    </div>
  );
};

export default memo(SQLEditor);
