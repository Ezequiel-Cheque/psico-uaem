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
  available: false
};

const stopMMST = [
  {
    idusuario: "ID-1000000001",
    data: [
      {
        number: "Ensayo 1",
        response: "Acierto",
        time: "2s"
      },
      {
        number: "Ensayo 2",
        response: "Acierto",
        time: "3s"
      },
      {
        number: "Ensayo 3",
        response: "Acierto",
        time: "2s"
      },
      {
        number: "Ensayo 4",
        response: "Acierto",
        time: "2s"
      }
    ]
  }
];

const stopData = [
  {
    idusuario: "ID-1000000001",
    data: [
      {
        block: "Prueba",
        number: "1",
        signal: "sin senal",
        response: "Acierto"
      },
      {
        block: "Prueba",
        number: "2",
        signal: "sin senal",
        response: "Acierto"
      },
      {
        block: "Prueba",
        number: "3",
        signal: "sin senal",
        response: "Acierto"
      },
      {
        block: "Prueba",
        number: "4",
        signal: "con senal",
        response: "Error"
      }
    ]
  }
];

const simonData = [
  {
    idusuario: "ID-1000000001",
    data: [
      {
        id: "1",
        type: "congruente",
        response: "Acierto",
        time: "0.5 s"
      },
      {
        id: "2",
        type: "congruente",
        response: "Acierto",
        time: "0.5 s"
      },
      {
        id: "3",
        type: "congruente",
        response: "Acierto",
        time: "0.5 s"
      },
      {
        id: "4",
        type: "congruente",
        response: "Acierto",
        time: "0.5 s"
      },
      {
        id: "5",
        type: "congruente",
        response: "Error",
        time: "0.5 s"
      }
    ]
  }
];

const DEFAULT_TEST_DATA = {
  data: [],
  numTest: 0
};

export default function Panel() {

  const [extraTable, setExtraTable] = useState(`DEFAULT_EXTRA_TABLE`);
  const [tests, setTests] = useState(DEFAULT_TEST_DATA);

  const getTests = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      const dataTable = data.map((item, index)=>{
        const simon = item.test.filter((t)=>t.test === "Simon");
        const stop = item.test.filter((t)=>t.test === "Stop");
        const MMST = item.test.filter((t)=>t.test === "MMST"); 
        
        return {
          id: index + 1,
          idusuario: item.id,
          register: item.date,
          simon: simon.length > 0 ? true : false,
          stop: stop.length > 0 ? true : false,
          mmst: MMST.length > 0 ? true : false,
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
  "stop": columnsStop,
  "mmst": columnsMMST
};

const clickHandler = (id, title, available) => {
  if (available) {
    let data=[];
    if (title === "simon") {
      const dataUser = tests.allData.filter((item)=>item.id === id)[0];
      const testData = dataUser.test.filter((item)=>item.test === "Simon")[0].data;
      data = [
        ...testData.practicaCongruentes.map((ensayo, index)=>(
          {
            id: index + 1,
            type: ensayo.title,
            response: ensayo.response ? "Acierto" : "Error",
            time: ensayo.time
          }
        )),
        ...testData.congruentes.map((ensayo, index)=>(
          {
            id: index + 9,
            type: ensayo.title,
            response: ensayo.response ? "Acierto" : "Error",
            time: ensayo.time
          }
        )),
        ...testData.practicaIncongruentes.map((ensayo, index)=>(
          {
            id: index + 29,
            type: ensayo.title,
            response: ensayo.response ? "Acierto" : "Error",
            time: ensayo.time
          }
        )),
        ...testData.incongruentes.map((ensayo, index)=>(
          {
            id: index + 37,
            type: ensayo.title,
            response: ensayo.response ? "Acierto" : "Error",
            time: ensayo.time
          }
        )),
        ...testData.practicaMixtos.map((ensayo, index)=>(
          {
            id: index + 57,
            type: ensayo.title,
            response: ensayo.response ? "Acierto" : "Error",
            time: ensayo.time
          }
        )),
        ...testData.mixtos.map((ensayo, index)=>(
          {
            id: index + 65,
            type: ensayo.title,
            response: ensayo.response ? "Acierto" : "Error",
            time: ensayo.time
          }
        ))
      ];
    } else if (title === "stop") {
      const dataUser = tests.allData.filter((item)=>item.id === id)[0];
      const testData = dataUser.test.filter((item)=>item.test === "Stop")[0].data;
      data = [
        ...testData.Practica.map((ensayo, index)=>(
          {
            block: "Prueba",
            number: index + 1,
            signal: ensayo.signal ? "con senal" : "sin senal",
            response: ensayo.response ? "Acierto" : "Error",
            time: ensayo.time
          }
        )),
        ...testData.Ensayo.map((ensayo, index) => (
          {
            block: "Ensayo",
            number: index + 33,
            signal: ensayo.signal ? "con senal" : "sin senal",
            response: ensayo.response ? "Acierto" : "Error",
            time: ensayo.time
          }
        ))
      ];
    } else if (title === "mmst") {
      data = stopMMST.filter((data)=>data.idusuario)[0].data;
    }
    setExtraTable({
      columns: extraTableColumns[title],
      title:`Table ${title} ${id}`,
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
      name: 'Test tipo Simon',
      selector: row => row.simon,
      cell: (row) => (setButton(row, "simon")),
      ignoreRowClick: true,
      allowOverflow: true,
      center: true
      
  },
  {
    name: 'Test tipo Stop',
    selector: row => row.stop,
    cell: (row) => (setButton(row, "stop")),
    ignoreRowClick: true,
    allowOverflow: true,
    center: true
  },
  {
    name: 'Test tipo MMST',
    selector: row => row.mmst,
    cell: (row) => (setButton(row, "mmst")),
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
                columns={extraTable.columns}
                data={extraTable.data}
                filter={true}
              />
            </div>
          )
        }
      
      </div>
    );
}