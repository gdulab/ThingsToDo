import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch';
import List from './components/List/List';


const App = () => {
    return (
        <main>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/list/:listId" element={<List />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </main>
    );
};

export default App;
