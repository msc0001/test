import './styles.css';
import DownArrow from "../../Common/Components/Icons/Arrow";
import useDirectoryState from "../../Hooks/useDirectoryState";

export default function Directory({ id, details, directory }) {
    const { name, isDir, children, isMain } = directory || details[id] || {};

    const { isExpanded, toggleDirectory } = useDirectoryState(id, isMain);

    const onHover = (event) => {
        event.stopPropagation()
    }

    const renderContent = () => {
        if (isDir) {
            return (
                <>
                    {name 
                        ? (
                        <button
                          className="directory-btn dict-title" 
                          onClick={toggleDirectory}
                         >
                            <span className={!isExpanded ? "opened" : ""}><DownArrow /></span>
                            <span>{name}</span>
                        </button>
                    ) : null}
                    {Array.isArray(children) && isExpanded
                        ? <ul className="directories">{children.map(childrenId => (
                            <Directory key={childrenId} id={childrenId} details={details} />
                        ))}</ul>
                        : null
                    }
                </>
                
            )
        };
    
        return (
            <span className="file dict-title">{name}</span>
        )
    }

    return <li className={`directory ${isMain ? "main" : ""}`} onMouseEnter={onHover}>
        {renderContent()}
    </li>
}