import React from "react";
import { Table } from "../components/Table";

import homeIcon from "../assets/icons/home.svg";
import groupIcon from "../assets/icons/group.svg";
import account from "../assets/icons/account.svg";

import '../styles/pages/panel.scss';

export default function Panel() {

  const clickHandler = (id, title) => {
    console.log(id);
    console.log(title);
  };

  const columns = [
    {
        name: 'ID Usuario',
        selector: row => row.idusuario,
        sortable: true,
        center: true
    },
    {
        name: 'Test tipo Simon',
        cell: (row) => {return (
          <button
            className="table__button--active"
            onClick={(e)=>clickHandler(row.id, row.title)}
          >
            Ver resultados
          </button>
        )},
        ignoreRowClick: true,
        allowOverflow: true,
        center: true
        
    },
    {
      name: 'Test tipo Stop',
      cell: (row) => { return (
        <button
          className="table__button--inactive"
          onClick={(e)=>clickHandler(row.id, row.title)}
        >
          No finalizado
        </button>
      )},
      ignoreRowClick: true,
      allowOverflow: true,
      center: true
    },
    {
      name: 'Test tipo MMST',
      cell: (row) => {return (
        <button
          className="table__button--active"
          onClick={(e)=>clickHandler(row.id, row.title)}
        >
          No finalizado
        </button>
      )},
      ignoreRowClick: true,
      allowOverflow: true,
      center: true
    },
    {
      name: 'Fecha registro',
      selector: row => row.register,
      sortable: true,
      center: true
  }
];

const data = [
    {
        id: 1,
        idusuario: 'ID-1000000001',
        register: '14-07-2022',
    },
    {
      id: 2,
      idusuario: 'ID-1000000002',
      register: '14-07-2022',
    },
    {
      id: 3,
      idusuario: 'ID-1000000003',
      register: '14-07-2022',
    },
    {
      id: 4,
      idusuario: 'ID-1000000004',
      register: '14-07-2022',
    },
    {
      id: 5,
      idusuario: 'ID-1000000005',
      register: '14-07-2022',
    },
    {
      id: 6,
      idusuario: 'ID-1000000006',
      register: '14-07-2022',
    }
];

    return (
      <div className="panel">
        <div className="panel__menubar">
            <div className="panel__menubar-icon"><embed src={homeIcon} /> <p> Inicio</p></div>
            <div className="panel__menubar-icon"><embed src={groupIcon} /> <p> Administrador</p></div>
            <div className="panel__menubar-icon"><embed src={account} /> <p> Pruebas realizadas 50</p></div>
        </div>

        <div className="panel__table-container">
          <Table columns={columns} data={data} />
        </div>
      
      </div>
    );
}