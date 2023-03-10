import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { ChangeSize } from './components/ChangeSize';
import { Checkout } from './components/Checkout';
import { Contact } from './components/Contact';
import { Details } from './components/Details';
import { Faqs } from './components/Faqs';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Lorem } from './components/Lorem';
import { Orders } from './components/Orders';
import { Register } from './components/Register';

function App() {

    const [basket, setBasket] = useState([]);

    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog/:gender" element={<Catalog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/checkout" element={<Checkout basket={basket} setBasket={setBasket}/>} />
                    <Route path="/contacts" element={<Contact />} />
                    <Route path="/changesize" element={<ChangeSize />} />
                    <Route path="/catalog/:gender/details/:itemId" element={<Details basket={basket} setBasket={setBasket}/>} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/lorem" element={<Lorem />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
