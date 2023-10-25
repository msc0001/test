import { useCallback, useState } from "react";
import { isDirectoryOpened, setDirectoryOpenedState } from "../Helpers/directory";


export default function useDirectoryState(id, defaultValue) {
    const [isExpanded, setIsExpanded] = useState(isDirectoryOpened(id, defaultValue));

    const toggleDirectory = useCallback(() => {
        setIsExpanded(prev => {
            setDirectoryOpenedState(id, !prev);
            return !prev;
        });
    }, [id]);

    return {
        isExpanded,
        toggleDirectory
    }
}