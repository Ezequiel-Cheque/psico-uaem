import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Table } from "../components/Table";

import homeIcon from "../assets/icons/home.svg";
import account from "../assets/icons/account.svg";
import progress from "../assets/icons/progress.svg";

import '../styles/pages/user.scss';

export default function User () {

    let navigate = useNavigate();
    const params = useParams();
    const { id } = params;
    
    const clickHandler = (test, finished) => {
        if (!finished) {
            if (test === "SIMON") {
                navigate(`/simon/${id}`);
            } else if (test === "STOP") {
                navigate(`/stop/${id}`);
            } else if (test === "MMST") {
                navigate(`/mmst/${id}`);
            }
        }
    };

    const searchTest = (test) => {
      const search = JSON.parse(localStorage.getItem(test));
      if (search) {
        const find = search.filter((user)=>user.IdUser===id);
        return find ? true : false;
      } else {
        return false;
      }
    };

    const getProgress = () => {
      const Simon = searchTest("Simon") ? 1 : 0;
      const Stop = searchTest("Stop") ? 1 : 0;
      const MMST = searchTest("MMST") ? 1 : 0;
      const progress = ((Simon + Stop + MMST) / 3) * 100;
      return progress.toFixed(3);
    };

    const data = [
        {
            test: "SIMON",
            duration: "7 minutos aprox.",
            finished: searchTest("Simon")
        },
        {
            test: "STOP",
            duration: "5 minutos aprox.",
            finished: searchTest("Stop")
        },
        {
            test: "MMST",
            duration: "5 minutos aprox.",
            finished: searchTest("MMST")
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
            name: 'Duracion',
            selector: row => row.duration,
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
              {/* <embed src={progress} /> */}
              <p>{getProgress()}% Progreso</p>
            </div>
        </div>
        <div className="panel__table-container">
          <Table
            columns={columns}
            data={data}
            pagination={false}
          />
        </div>
    </div>
);
};