import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About/About';
import { Catalog } from './components/Catalog/Catalog';
import { ChangeSize } from './components/ChangeSize/ChangeSize';
import { Checkout } from './components/Checkout/Checkout';
import { Contact } from './components/Contact/Contact';
import { Details } from './components/Details/Details';
import { Faqs } from './components/Faqs/Faqs';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Lorem } from './components/Lorem/Lorem';
import { Orders } from './components/Orders/Orders';
import { Register } from './components/Register/Register';
import { Success } from './components/Success/Success';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {

    const [basket, setBasket] = useState([]);
    const [user, setUser] = useLocalStorage('userPS');

    return (
        <>
            <Header user={user} setUser={setUser}/>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog/:params" element={<Catalog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/checkout" element={<Checkout user={user} basket={basket} setBasket={setBasket} />} />
                    <Route path="/contacts" element={<Contact />} />
                    <Route path="/orders/change-size/:orderId/:itemId" element={<ChangeSize />} />
                    <Route path="/catalog/:params/details/:itemId" element={<Details user={user} basket={basket} setBasket={setBasket}/>} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route path="/login" element={<Login setUser={setUser} setBasket={setBasket}/>} />
                    <Route path="/register" element={<Register setUser={setUser}/>} />
                    <Route path="/lorem" element={<Lorem />} />
                    <Route path="/orders" element={<Orders user={user}/>} />
                    <Route path="/successful-order" element={<Success />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
