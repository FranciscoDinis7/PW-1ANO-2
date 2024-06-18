import ProductList from "./paginas/Produtos";
import Login from "./paginas/login";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Produtos from "./paginas/Produtos";
import Detalhes from "./paginas/detalhes";
import Navbar from "./components/Navbar/navbar";
import Registo from "./paginas/registo";
import Novo from "./paginas/novoproduto";
import Carrinho from "./paginas/carrinho";
import Rodape from "./components/rodape/rodape"

const App = () => {
  return (
    <Router>
      <Navbar/>
       <Routes>
          
          <Route path="/" element= {<ProductList/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/produtos" element= {<Produtos/>}/>
          <Route path="/produtos/:id" element= {<Detalhes/>}/>
          <Route path="/registo" element= {<Registo/>}/>
          <Route path="/novoproduto" element= {<Novo/>}/>
          <Route path="/carrinho" element= {< Carrinho/>}/>
      </Routes>
      <Rodape/>
    </Router>

  );
};
export default App;
 
