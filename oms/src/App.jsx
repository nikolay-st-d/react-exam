import { useState } from 'react';
import { Routes, Route } from 'react-router';
import './styles.css';
import Home from './components/home/home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Help from './components/help/Help';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='help' element={<Help />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
