import './styles.css';
import FileContent from "../Components/FileContent";
import FileManager from "../Components/FileManager";

function Main() {
    return (
        <div className="container">
            <header className='border'>File Explorer</header>
            <main className="main-container">
                <FileManager />
                <FileContent />
            </main>
            <footer className='border'>footer content/options</footer>
        </div>
    )
}

export default Main;