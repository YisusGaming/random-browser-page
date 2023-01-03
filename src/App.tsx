import Navbar from './components/Navbar';
import './App.css';

export default function App() {
    return (
        <>
            <Navbar />
            <div className="latest-brand">
                <h1><span id="current-version">1.2.0</span> is here!</h1>
                <a target='_blank' href="https://github.com/YisusGaming/random-browser/releases/latest">Download {"->"}</a>
            </div>
        </>
    );
}
