import Navbar from "../components/Navbar";
import './css/docsPage.css';

export default function DocsPage() {
    return (
        <>
            <Navbar />
            <div className="working-on-docs">
                <h1>Hey! I'm still working on Random Browser's documentation...</h1>
                <p>Keep in mind that I'm just a <strong>random</strong> guy working on a <strong>random</strong> browser...</p>
            </div>
        </>
    );
}