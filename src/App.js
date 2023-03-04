import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';

function App() {
    return (
        <div>
            <Header />
                <main>
                    <Contact />
                </main>
            <Footer />
        </div>
    );
}

export default App;
