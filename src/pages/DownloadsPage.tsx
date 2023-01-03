import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import './css/downloadsPage.css';

export default function DownloadsPage() {
    return (
        <>
            <Navbar />
            <div className="select-os">
                <Link to='/random-browser/downloads/windows'>Windows</Link>
                <Link to='/random-browser/downloads/mac'>Mac OS</Link>
                <Link to='/random-browser/downloads/linux'>Linux</Link>
                <a target='_blank' id='all-releases' href="https://github.com/YisusGaming/random-browser/releases">See All Releases {"->"}</a>
            </div>
        </>
    );
}