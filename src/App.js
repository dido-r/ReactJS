import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { Success } from './components/Success';

function App() {

    const [basket, setBasket] = useState([]);
    const [user, setUser] = useState(localStorage.userId !== undefined ? true : false);

    return (
        <>
            <Header user={user} setUser={setUser}/>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog/:params" element={<Catalog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/checkout" element={<Checkout basket={basket} setBasket={setBasket} />} />
                    <Route path="/contacts" element={<Contact />} />
                    <Route path="/orders/change-size/:orderId/:itemId" element={<ChangeSize />} />
                    <Route path="/catalog/:params/details/:itemId" element={<Details basket={basket} setBasket={setBasket}/>} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route path="/login" element={<Login setUser={setUser}/>} />
                    <Route path="/register" element={<Register setUser={setUser}/>} />
                    <Route path="/lorem" element={<Lorem />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/successful-order" element={<Success />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
