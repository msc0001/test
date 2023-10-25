import FileContent from "../Components/FileContent";
import FileManager from "../Components/FileManager";

function Main() {
    return (
        <div className="container">
            <header>File Explorer</header>
            <main className="main-container">
                <FileManager />
                <FileContent />
            </main>
            <footer>footer content/options</footer>
        </div>
    )
}

export default Main;