import React, {useState} from 'react';

import Navbar from '../../components/Navbar';
import { DataGrid } from '@mui/x-data-grid';
import { idID } from '@mui/material/locale';
import Button from '../../components/Button';
import NewProduct from '../../components/NewProduct';
import ShowProduct from '../../components/ShowProduct';


// import { Container } from './styles';

const DashMenu: React.FC = () => {
  const [newProductShow, setNewProductShow] = React.useState(false);
  const [showProduct, setShowProduct] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState()

  const toReal = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  const orders = [
    {
      id: 1,
      name: 'X-Burguer',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpapersdsc.net%2Fwp-content%2Fuploads%2F2016%2F09%2FJunk-Food-Pictures.jpg&f=1&nofb=1',
      value: 13.99,
      details: {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        discount: 10,
        category: 'Lanches',
      }
    },
    {
      id: 2,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpapersdsc.net%2Fwp-content%2Fuploads%2F2016%2F09%2FJunk-Food-Pictures.jpg&f=1&nofb=1',
      name: 'X-Salada',
      value: 15.99,
      details: {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        discount: 15,
        category: 'Lanches',
      }
    },
    {
        id: 3,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.cybercook.com.br%2Fimagens%2Freceitas%2F818%2Fsuco-de-laranja-com-linhaca-1.jpeg&f=1&nofb=1",
        name: 'Suco de laranja',
        value: 15.99,
        details: {
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          discount: 25,
          category: 'Bebidas',
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
    { field: 'value', headerName: 'Preço', flex: 1 },
    { field: 'discount', headerName: 'Desconto', flex: 1},
    { field: 'info', headerName: 'Detalhes', flex: 1, renderCell: (params) => (
      <div 
      onClick={()=>{
        console.log(params.row)
        setSelectedProduct(params.row)
        setShowProduct(true)
      }}
      style={{
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
    orders.map(order => ({ 
      id: order.id, 
      name: order.name,
      image: order.image, 
      value: toReal(order.value),
      discount: order.details.discount+"%",
      categoria: order.details.category,
      info: order.details 
    }));

  return <>
  <NewProduct show={newProductShow} setShow={setNewProductShow}/>
  <ShowProduct show={showProduct}  setShow={setShowProduct} product={selectedProduct}/>
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
        }}>Seu cardápio:</h2>
        <Button 
            text="+Adicionar produto" 
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

export default DashMenu;