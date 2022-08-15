import React, { useState } from "react";
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

export default function Panel() {

  const [extraTable, setExtraTable] = useState(DEFAULT_EXTRA_TABLE);

  const data = [
    {
        id: 1,
        idusuario: 'ID-1000000001',
        register: '14-07-2022',
        simon: false, 
        stop: true,
        mmst: true,
    },
    {
      id: 2,
      idusuario: 'ID-1000000002',
      register: '14-07-2022',
      simon: true, 
      stop: true,
      mmst: true,
    },
    {
      id: 3,
      idusuario: 'ID-1000000003',
      register: '14-07-2022',
      simon: true, 
      stop: false,
      mmst: true,
    },
    {
      id: 4,
      idusuario: 'ID-1000000004',
      register: '14-07-2022',
      simon: true, 
      stop: true,
      mmst: false,
    },
    {
      id: 5,
      idusuario: 'ID-1000000005',
      register: '14-07-2022',
      simon: true, 
      stop: false,
      mmst: true,
    },
    {
      id: 6,
      idusuario: 'ID-1000000006',
      register: '14-07-2022',
      simon: true, 
      stop: true,
      mmst: false,
    }
];

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
      data = simonData.filter((data)=>data.idusuario)[0].data;
    } else if (title === "stop") {
      data = stopData.filter((data)=>data.idusuario)[0].data;
    } else if (title === "mmst") {
      data = stopMMST.filter((data)=>data.idusuario)[0].data;
    }
    setExtraTable({
      ...extraTable,
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
              <embed src={groupIcon} />
              <p>Administrador</p>
            </div>
            <div className="panel__menubar-icon">
              <embed src={account} />
              <p>Pruebas realizadas 50</p>
            </div>
        </div>

        <div className="panel__table-container">
          <Table
            columns={columns}
            data={data}
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