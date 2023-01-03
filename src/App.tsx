import Navbar from './components/Navbar';
import './App.css';

export default function App() {
    return (
        <>
            <Navbar />
            <div className="brand-wrap">
                <div className="latest-brand">
                    <h1>1.2.0 is here!</h1>
                    <a target='_blank' href="https://github.com/YisusGaming/random-browser/releases/latest">Download {"->"}</a>
                </div>
            </div>
        </>
    );
}
