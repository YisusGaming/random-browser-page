import Navbar from './components/Navbar';
import './App.css';

export default function App() {
    return (
        <>
            <Navbar />
            <div className="latest-brand">
                <h1><span id="current-version">1.2.2</span> is here!</h1>
                <a target='_blank' href="https://github.com/YisusGaming/random-browser/releases/latest">Download {"->"}</a>
            </div>
            <div className="info-wrap">
                <div className="card">
                    <h1>What is Random Browser?</h1>
                    <p><strong>Random Browser</strong> is a little experiment of an internet browser. Built using Electron.js and the power of google's search engine.</p>
                </div>
                <div className="card">
                    <h1>Updates</h1>
                    <p>Random Browser recieves updates often. You can see the latest release <a target='_blank' href="https://github.com/YisusGaming/random-browser/releases/latest">here</a>.</p>
                </div>
            </div>
        </>
    );
}
