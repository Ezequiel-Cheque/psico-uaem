import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Table } from "../components/Table";

import homeIcon from "../assets/icons/home.svg";
import account from "../assets/icons/account.svg";

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
            } else if (test === "Prueba sin estres") {
              navigate(`/mmst2/${id}`);
          }
        }
    };

    const searchTest = (name) => {
      const data = JSON.parse(localStorage.getItem("data"));
      if (data) {
        const existUser = data.filter((item)=>item.id === id);
        if (existUser.length > 0) {
          const userData = data.filter((item)=>item.id === id)[0];
          const search = userData.preTest.filter((item)=>item.test === name);
          if (search.length > 0) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    };

    const searchTest2 = (name) => {
      if (searchTest(name)) {
        const data = JSON.parse(localStorage.getItem("data"));
        const userData = data.filter((item)=>item.id === id)[0];
        const search = userData.posTest.filter((item)=>item.test === name);
        if (search.length > 0) {
          return "done";
        } else {
          return "enable";
        }
      } else {
        return "disabled";
      }
    };

    const getProgress = () => {
      const Simon = searchTest("Simon") ? 1 : 0;
      const Simon2 = searchTest2("Simon") === "done" ? 1 : 0;
      const Stop = searchTest("Stop") ? 1 : 0;
      const Stop2 = searchTest2("Stop") === "done" ? 1 : 0;
      const MMST = searchTest("MMST") ? 1 : 0;
      const MMST2 = searchTest2("MMST") === "done" ? 1 : 0;
      const progress = ((Simon + Simon2 + Stop + Stop2 + MMST + MMST2) / 6) * 100;
      return progress.toFixed(1);
    };

    const data = [
        {
            test: "SIMON",
            duration: "7 minutos aprox.",
            finished: searchTest("Simon"),
            finished2: searchTest2("Simon")
        },
        {
            test: "STOP",
            duration: "5 minutos aprox.",
            finished: searchTest("Stop"),
            finished2: searchTest2("Stop")
        },
        {
            test: "MMST",
            duration: "5 minutos aprox.",
            finished: searchTest("MMST"),
            finished2: searchTest2("MMST")
        },
        {
          test: "Prueba sin estres",
          duration: "5 minutos aprox.",
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

    const setButton2 = (row, classname, available) => {
      return (
        <button
          className={`table__button--${classname}`}
          onClick={(e)=>clickHandler(row.test, available)}
        >
          {
            classname == "enable" && "Empezar"
          }
          {
            classname == "disabled" && "No disponible"
          }
          {
            classname == "done" && "Finalizado"
          }
        </button>
      )
    };

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
          name: 'Pre-test',
          selector: row => row.finished,
          cell: (row) => (setButton(row, row.finished)),
          ignoreRowClick: true,
          allowOverflow: true,
          center: true
        },
        { 
          name: 'Pos-test',
          selector: row => row.finished2,
          cell: (row) => (setButton2(row, row.finished2, row.finished2 == "enable" ? false: true)),
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