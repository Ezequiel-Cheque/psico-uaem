import React, { useState, useEffect } from "react";
import { Table } from "../components/Table";
import { Link } from "react-router-dom";

import homeIcon from "../assets/icons/home.svg";
import groupIcon from "../assets/icons/group.svg";
import account from "../assets/icons/account.svg";

import '../styles/pages/panel.scss';

const DEFAULT_EXTRA_TABLE = {
  columns: null,
  title: null,
  data: null,
  available: false,
  name: "",
  id: null
};

const DEFAULT_TEST_DATA = {
  data: [],
  numTest: 0,
  allData: []
};

export default function Panel() {

  const [extraTable, setExtraTable] = useState(DEFAULT_EXTRA_TABLE);
  const [tests, setTests] = useState(DEFAULT_TEST_DATA);

  const getTests = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      const dataTable = data.map((item, index)=>{
        const simon = item.preTest.filter((t)=>t.test === "Simon");
        const simon2 = item.posTest.filter((t)=>t.test === "Simon");
        const stop = item.preTest.filter((t)=>t.test === "Stop");
        const stop2 = item.posTest.filter((t)=>t.test === "Stop");
        const MMST = item.preTest.filter((t)=>t.test === "MMST");
        const MMST2 = item.posTest.filter((t)=>t.test === "MMST");
        
        return {
          id: index + 1,
          idusuario: item.id,
          register: item.date,
          simon: simon.length > 0 ? true : false,
          simon2: simon2.length > 0 ? true : false,
          stop: stop.length > 0 ? true : false,
          stop2: stop2.length > 0 ? true : false,
          mmst: MMST.length > 0 ? true : false,
          mmst2: MMST2.length > 0 ? true : false,
        };
      })
      setTests({
        numTest: dataTable.length,
        data: dataTable,
        allData: data
      });
    }
  };

const columnsSimon = [
  {
    name: 'ID Usuario',
    selector: row => row.idu,
    sortable: true,
    center: true
  },
  {
    name: 'Tipo de test',
    selector: row => row.typeTest,
    sortable: true,
    center: true
  },
  {
    name: 'N. Estimulo',
    selector: row => row.id,
    sortable: true,
    center: true
  },
  {
    name: 'Tipo de Estimulo',
    selector: row => row.type,
    sortable: true,
    center: true
  },
  {
    name: 'Respuesta',
    selector: row => row.response,
    sortable: true,
    center: true
  },
  {
    name: 'Tiempo de respuesta',
    selector: row => row.time,
    sortable: true,
    center: true
  }
];

const columnsStop = [
  {
    name: 'ID Usuario',
    selector: row => row.idu,
    sortable: true,
    center: true
  },
  {
    name: 'Tipo de test',
    selector: row => row.typeTest,
    sortable: true,
    center: true
  },
  {
    name: 'Bloque',
    selector: row => row.block,
    sortable: true,
    center: true
  },
  {
    name: 'N. ensayo',
    selector: row => row.number,
    sortable: true,
    center: true
  },
  {
    name: 'Senal de stop',
    selector: row => row.signal,
    sortable: true,
    center: true
  },
  {
    name: 'Respuesta',
    selector: row => row.response,
    sortable: true,
    center: true
  },
  {
    name: 'Tiempo de respuesta',
    selector: row => row.time,
    sortable: true,
    center: true
  }
];

const columnsMMST = [
  {
    name: 'N. Ensayo',
    selector: row => row.number,
    sortable: true,
    center: true
  },
  {
    name: 'Respuesta',
    selector: row => row.response,
    sortable: true,
    center: true
  },
  {
    name: 'Tiempo de respuesta',
    selector: row => row.time,
    sortable: true,
    center: true
  }
];

const extraTableColumns = {
  "simon" : columnsSimon,
  "simon2" : columnsSimon,
  "stop": columnsStop,
  "stop2": columnsStop,
  "mmst": columnsMMST,
  "mmst2": columnsMMST
};

const clickHandler = (id, title, available) => {
  if (available) {
    let data=[];
    if (title === "simon" || title === "simon2") {
      const typeTest = title === "simon"? "Pre-Test" : "Pos-Test";
      const dataUser = tests.allData.filter((item)=>item.id === id)[0];
      const testData = title === "simon" ?
      dataUser.preTest.filter((item)=>item.test === "Simon")[0].data
      : dataUser.posTest.filter((item)=>item.test === "Simon")[0].data;
      data = [
        ...testData.congruentes.map((ensayo, index)=>(
          {
            idu: id,
            typeTest: typeTest,
            id: index + 1,
            type: ensayo.title,
            response: ensayo.response ? "Acierto" : "Error",
            time: ensayo.time
          }
        )),
        ...testData.incongruentes.map((ensayo, index)=>(
          {
            idu: id,
            typeTest: typeTest,
            id: index + 21,
            type: ensayo.title,
            response: ensayo.response ? "Acierto" : "Error",
            time: ensayo.time
          }
        )),
        ...testData.mixtos.map((ensayo, index)=>(
          {
            idu: id,
            typeTest: typeTest,
            id: index + 41,
            type: ensayo.title,
            response: ensayo.response ? "Acierto" : "Error",
            time: ensayo.time
          }
        ))
      ];
    } else if (title === "stop" || title === "stop2") {
      const dataUser = tests.allData.filter((item)=>item.id === id)[0];
      const typeTest = title === "stop"? "Pre-Test" : "Pos-Test";
      const testData = title === "stop" ?
      dataUser.preTest.filter((item)=>item.test === "Stop")[0].data
      : dataUser.posTest.filter((item)=>item.test === "Stop")[0].data;
      data = [
        ...testData.Ensayo.map((ensayo, index) => (
          {
            idu: id,
            typeTest: typeTest,
            block: "Ensayo",
            number: index + 1,
            signal: ensayo.signal ? "con senal" : "sin senal",
            response: ensayo.response ? "Acierto" : "Error",
            time: ensayo.time
          }
        ))
      ];
    } else if (title === "mmst2" || title === "mmst2") {
      data = stopMMST.filter((data)=>data.idusuario)[0].data;
    }
    setExtraTable({
      columns: extraTableColumns[title],
      title:`Table ${title} ${id}`,
      name: title,
      id: id,
      available: available,
      data: data
    });
  }
};

const setButton = (row, testName) => {return (
  <button
    className={ row[testName] ? "table__button--active" : "table__button--inactive"}
    onClick={(e)=>clickHandler(row.idusuario, testName, row[testName])}
  >
    {
      row[testName] ? "Ver resultados" : "No finalizado"
    }
  </button>
)};

const columns = [
  {
      name: 'ID Usuario',
      selector: row => row.idusuario,
      sortable: true,
      center: true
  },
  {
      name: 'Pre-Test Simon',
      selector: row => row.simon,
      cell: (row) => (setButton(row, "simon")),
      ignoreRowClick: true,
      allowOverflow: true,
      center: true   
  },
  {
    name: 'Pos-Test Simon',
    selector: row => row.simon2,
    cell: (row) => (setButton(row, "simon2")),
    ignoreRowClick: true,
    allowOverflow: true,
    center: true   
  },
  {
    name: 'Pre-Test Stop',
    selector: row => row.stop,
    cell: (row) => (setButton(row, "stop")),
    ignoreRowClick: true,
    allowOverflow: true,
    center: true
  },
  {
    name: 'Pos-Test Stop',
    selector: row => row.stop2,
    cell: (row) => (setButton(row, "stop2")),
    ignoreRowClick: true,
    allowOverflow: true,
    center: true
  },
  {
    name: 'Pre-Test MMST',
    selector: row => row.mmst,
    cell: (row) => (setButton(row, "mmst")),
    ignoreRowClick: true,
    allowOverflow: true,
    center: true
  },
  {
    name: 'Pos-Test MMST',
    selector: row => row.mmst2,
    cell: (row) => (setButton(row, "mmst2")),
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

  useEffect(() => {
    getTests();
  },[]);

    return (
      <div className="panel">
        <div className="panel__menubar">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              <div className="panel__menubar-icon">
                <embed src={homeIcon} />
                <p>Inicio</p>
              </div>
            </Link>
            <div className="panel__menubar-icon">
              <embed src={account} />
              <p>Administrador</p>
            </div>
            <div className="panel__menubar-icon">
              <embed src={groupIcon} />
              <p>Pruebas realizadas {tests.numTest}</p>
            </div>
        </div>

        <div className="panel__table-container">
          <Table
            columns={columns}
            data={tests.data}
            filter={true}
          />
        </div>

        {
          extraTable.available && (
            <div className="panel__table-container extra-table">
              <Table
                title={extraTable.title}
                name={extraTable.name}
                columns={extraTable.columns}
                data={extraTable.data}
                id={extraTable.id}
                filter
                download
              />
            </div>
          )
        }
      
      </div>
    );
}