import { About } from './components/About';
import { CatalogMan } from './components/CatalogMan';
import { CatalogWoman } from './components/CatalogWoman';
import { Contact } from './components/Contact';
import { Details } from './components/Details';
import { Faqs } from './components/Faqs';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Lorem } from './components/Lorem';
import { Register } from './components/Register';
import { Return } from './components/Return';
import { Success } from './components/Success';

function App() {
    return (
        <>
            <Header />
                <main>
                    <Details />
                </main>
            <Footer />
        </>
    );
}

export default App;
