import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ShowAll from './ShowAll.jsx';
import AddItem from './AddItem.jsx';
import UpdateProduct from './UpdateProduct.jsx';
createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <Routes>
<Route path="/" element={<ShowAll />} />
<Route path="/addproduct" element={<AddItem />} />
<Route path="/updateproduct/:id" element={<UpdateProduct />} />
    </Routes>
    </BrowserRouter>
    
 
)
