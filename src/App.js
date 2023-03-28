import { Routes, Route } from 'react-router-dom';
import { About } from './components/About/About';
import { Catalog } from './components/Catalog/Catalog';
import { ChangeSize } from './components/ChangeSize/ChangeSize';
import { Checkout } from './components/Checkout/Checkout';
import { Contact } from './components/Contact/Contact';
import { Details } from './components/Details/Details';
import { Faqs } from './components/Faqs/Faqs';
import { Footer } from './components/Footer/Footer';
import { RouteGuard } from './components/Guard/RouteGuard';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Lorem } from './components/Lorem/Lorem';
import { Orders } from './components/Orders/Orders';
import { Register } from './components/Register/Register';
import { Success } from './components/Success/Success';
import { SessionProvider } from './context/sessionContext';

function App() {

    return (
        <SessionProvider>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog/:params" element={<Catalog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contact />} />
                    <Route path="/catalog/:params/details/:itemId" element={<Details />} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/lorem" element={<Lorem />} />
                    <Route path="/successful-order" element={<Success />} />
                    <Route element={<RouteGuard />}>
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/orders/change-size/:orderId/:itemId" element={<ChangeSize />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Route>
                </Routes>
            </main>
            <Footer />
        </SessionProvider>
    );
}

export default App;
