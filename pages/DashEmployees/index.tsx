import React, {useState} from 'react';

import Navbar from '../../components/Navbar';
import { DataGrid } from '@mui/x-data-grid';
import { idID } from '@mui/material/locale';
import Button from '../../components/Button';
import NewEmployee from '../../components/NewEmployee';


// import { Container } from './styles';

const DashEmployees: React.FC = () => {
  const [newProductShow, setNewProductShow] = React.useState(false);
  const [image, setImage] = React.useState(null);

  const phoneFormating = (phoneNumber: number) => {
    let phone = phoneNumber.toString()
    return "("+phone.slice(0,2)+")"+phone.slice(2,7)+"-"+phone.slice(7,11) 
  }

  const employees = [
    {
      id: 1,
      name: 'Fernando Souza de Foliassa',
      image: 'https://pbs.twimg.com/profile_images/1509951338716798978/Vc9-o9c-_400x400.jpg',
      email: "fernandimgameplay@gmail.com",
      phone: 99999999999,
      details: {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        discount: 0.10,
        category: 'Lanches',
      }
    },
    {
      id: 2,
      image: 'https://images.tcdn.com.br/img/img_prod/671591/bola_futebol_de_society_extra_32_gomos_azure_05816_14615_1_3f7282f510322eccf7706847fe482987_20220519183414.jpg',
      name: 'Jonas Jonico Jonase',
      email: "jonas@jonas.jonas",
      phone: 16997687163,
      details: {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        discount: 0.15,
        category: 'Lanches',
      }
    },
    {
        id: 3,
        image: "https://i.pinimg.com/originals/25/bd/8b/25bd8b7f6e57cdfd17747b25d753b2ce.jpg",
        name: 'Gigus Chadus II',
        email: "canyouhearthesilence@gmail.com",
        phone: 11985163548,
        details: {
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          discount: 0.25,
          category: 'Suco',
          beverage: true,
        }
      }
  ]

  const productsColumns = [
    { field: 'id', headerName: 'Id', flex: 1 },
    { field: 'image', headerName: 'Imagem', flex: 1, renderCell: (params) => {
      return <div style ={{
          backgroundImage: `url(${params.value})`,
          backgroundSize: 'cover',
          width: 40,
          height: 40,
          borderRadius: '50%',
      }}/>
    }},
    { field: 'name', headerName: 'Nome', flex: 1 },
    { field: 'email', headerName: 'E-mail', flex: 1 },
    { field: 'phone', headerName: 'Telefone', flex: 1},
    { field: 'info', headerName: 'Detalhes', flex: 1, renderCell: (params) => (
      <div style={{
        width: 150,
        height: 30,
        backgroundColor: "#009FB7",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        cursor: "pointer",
      }}>
        Ver detalhes
      </div>
    )},
  ];

  const productsRows =
    employees.map(employee => ({ 
      id: employee.id, 
      name: employee.name,
      image: employee.image, 
      email: employee.email,
      phone: phoneFormating(employee.phone),
      categoria: employee.details.category,
      info: employee.details 
    }));

  return <>
  <NewEmployee show={newProductShow} setShow={setNewProductShow}/>
  <div style={{
      overflow: "hidden",
      backgroundColor: "#E3F2FD",
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "100vh ",
      alignItems: "center",
  }}>
    <Navbar/>
    <div style={{
      padding: 100,
      width: "100vw",
      height: "100%",
      overflowY: "auto"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        height: 50,
        marginBottom: 25,
        alignItems: "center",
      }}>
        <h2 style={{
            fontSize: 25,
        }}>Funcionários:</h2>
        <Button 
            text="+Adicionar funcionário" 
            callback={() => {setNewProductShow(true)}}
            width={180}
            height={35}
            fontSize={15}
        />
      </div>
      <DataGrid style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: 500,
        backgroundColor: "#fff"
      }} rows={productsRows} columns={productsColumns}/>
    </div>
  </div>
  </>;
}

export default DashEmployees;