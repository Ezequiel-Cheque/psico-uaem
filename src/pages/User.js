import React from "react";
import { useParams, Link } from "react-router-dom";
import { Table } from "../components/Table";

import homeIcon from "../assets/icons/home.svg";
import account from "../assets/icons/account.svg";
import progress from "../assets/icons/progress.svg";

import '../styles/pages/user.scss';

export default function User () {

    const params = useParams();
    const { id } = params;
    
    const clickHandler = (test, available) => {
        console.log({id, test, available});
    };

    const data = [
        {
            test: "SIMON",
            progress: "20/20",
            finished: true
        },
        {
            test: "STOP",
            progress: "01/120",
            finished: false
        },
        {
            test: "MMST",
            progress: "0/50",
            finished: false
        }
    ];

    const setButton = (row, available) => {return (
        <button
          className={ available ? "table__button--active" : "table__button--inactive"}
          onClick={(e)=>clickHandler(row.test, available)}
        >
          {
            available ? "Finalizado" : "Empezar"
          }
        </button>
    )};

    const columns = [
        {
            name: 'Tipo de test',
            selector: row => row.test,
            center: true
        },
        {
            name: 'Avance',
            selector: row => row.progress,
            center: true
            
        },
        {
          selector: row => row.finished,
          cell: (row) => (setButton(row, row.finished)),
          ignoreRowClick: true,
          allowOverflow: true,
          center: true
        }
      ];

return (
    <div className="user">
        <div className="user__menubar">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              <div className="user__menubar-icon">
                <embed src={homeIcon} />
                <p>Inicio</p>
              </div>
            </Link>
            <div className="user__menubar-icon">
              <embed src={account} />
              <p>{ id }</p>
            </div>
            <div className="user__menubar-icon">
              <embed src={progress} />
              <p>Progreso</p>
            </div>
        </div>
        <div className="panel__table-container">
          <Table
            columns={columns}
            data={data}
          />
        </div>
    </div>
);
};