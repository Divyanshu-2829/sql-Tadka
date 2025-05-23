import React, { memo } from "react";
import ReactTable from "./ReactTable";
import "./ResultSection.css";
import { Oval } from "react-loader-spinner";

const ResultSection = ({ tableName, result, resultIsLoading }) => {
  return (
    <div className="result-container">
      <div className="head">Result / Output</div>
      <div className="loader">
        {resultIsLoading && (
          <Oval
            ariaLabel="loading-indicator"
            height={50}
            width={50}
            strokeWidth={5}
            color="#2F2E41"
            secondaryColor="#d1d5db"
          />
        )}
      </div>
      <div className="result">
        {!resultIsLoading && result === "" && (
          <div className="no-result">Please execute a query</div>
        )}

        {!resultIsLoading && result !== undefined && result.length > 0 && (
          <ReactTable
            data={Object.values(result.slice(1))}
            columnsArray={Object.values(result[0])}
          />
        )}
      </div>
    </div>
  );
};
export default memo(ResultSection);
