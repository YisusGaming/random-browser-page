import './App.css';

export default function App() {

    const messages = [
        "Under Construction",
        "Not ready yet!",
        "Too early...",
        "Working hard",
        "Nope, not ready",
        "Still waiting"
    ];

    function randomMessage(): string {
        let randomIndex = Math.floor(Math.random() * messages.length);

        return messages[randomIndex] ?? 'Under construction';
    }

    return (
        <div className="under-construction">
            <h1>{randomMessage()}</h1>
            <p>This website is still under construction, come back later!</p>
        </div>
    );
}
