import React from 'react';


import DataTable from 'react-data-table-component';

import '../styles/table.scss';

export const Table = ({ columns, data }) => {

  // createTheme('solarized', {
  //   text: {
  //     primary: '#fff',
  //     secondary: '#fff',
  //   },
  //   background: {
  //     default: '#555555'
  //   },
  //   divider: {
  //     default: '#073642',
  //   },
  //   action: {
  //     button: 'rgba(0,0,0,.54)',
  //     hover: 'rgba(0,0,0,.08)',
  //     disabled: 'rgba(0,0,0,.12)',
  //   }
  // });

  return (
    <div className='table'>
      <DataTable
        columns={columns}
        data={data}
        // theme="solarized"
        pagination
      />
    </div>
  )
};
