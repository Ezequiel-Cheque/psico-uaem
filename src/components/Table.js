import React, { useMemo, useState } from 'react';
import { downloadExcel } from 'react-export-table-to-excel';

import DataTable from 'react-data-table-component';

import '../styles/table.scss';

import downloadIcon from "../assets/images/download.png";

export const Table = ({ columns, data, title="", filter=false , pagination = true, download = false, name, id}) => {

  const [activeTransFilter, setactiveTransFilter] = useState("");

  const inArray = (needle, haystack = []) => {
    if (haystack.length > 0) {
      let length = haystack.length;
      for (let i = 0; i < length; i++) {
        if (haystack[i] === needle) return true;
      }
    }
    return false;
  };

  const generalData = (data, filter) => {
    let aux = data.filter((item) => {
      let a = Object.keys(item).map((element) => {
        if (
          item[element] &&
          item[element].toString().toLowerCase().includes(filter.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
      if (inArray(true, a)) {
        return true;
      }
      return false;
    });
    return aux;
  };

  const ActiveTransactionsFilter = ({ onFilter }) => (
    <div className="table__header">
      <input
        id="searchActiveTransactions"
        type="text"
        placeholder="filter"
        aria-label="Search Input"
        onChange={onFilter}
        className="table__filter"
      />
    </div>
  );

  const paginationOptions = {
    rowsPerPageText: "Filas por pagina",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "todos"
  };

  const handleDownloadExcel = () => {
    const header = columns.map((c)=>c.name);
    let body = [];
    if (["simon", "simon2"].includes(name)) {
      body = data.map((c)=>[
        c.idu, c.typeTest, c.id, c.type, c.response, c.time
      ]);
    }
    downloadExcel({
      fileName: `Table-data-${name}`,
      sheet: "Data",
      tablePayload: {
        header,
        body: body,
      },
    });
  };

  const activeTransComponent = useMemo(() => {
    return (
      <div className='table-header-component'>
        {
          download && (
            <button onClick={handleDownloadExcel}>
              <img src={downloadIcon}/> <p>Descargar datos</p>
            </button>
          )
        }
        <div>
          <ActiveTransactionsFilter
            onFilter={(e) => setactiveTransFilter(e.target.value)}
          />
        </div>
      </div>
    );
  }, [title]);

  return (
    <div className='table'>
      <DataTable
        title={title}
        columns={columns}
        data={generalData(data, activeTransFilter)}
        theme="dark"
        className="table__container"
        pagination={pagination}
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight= "600px"
        subHeader
        subHeaderComponent={filter && activeTransComponent}
      />
    </div>
  )
};
