import React, { useMemo, useState } from 'react';


import DataTable from 'react-data-table-component';

import '../styles/table.scss';

export const Table = ({ columns, data }) => {

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

  const activeTransComponent = useMemo(() => {
    return (
      <ActiveTransactionsFilter
        onFilter={(e) => setactiveTransFilter(e.target.value)}
      />
    );
  }, []);

  return (
    <div className='table'>
      <DataTable
        columns={columns}
        data={generalData(data, activeTransFilter)}
        theme="dark"
        className="table__container"
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight= "600px"
        subHeader
        subHeaderComponent={activeTransComponent}
      />
    </div>
  )
};
