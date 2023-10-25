import { clearValue, getValue, saveValue } from "../Common/Utils/localStorage";

export const formatDirectoriesData = (directoriesData) => {
    const baseDirectories = [];
    const childrenDict = {};
    const directoriesDict = {};

    directoriesData.forEach(directory => {
        const { parent, id } = directory;
        
        directoriesDict[id] = directory;

        if (!parent) {
            baseDirectories.push(id);
            return;
        }

        if (parent) {
            if (!childrenDict[parent]) {
                childrenDict[parent] = [];
            }
    
            childrenDict[parent].push(id);
        }
    });

    Object.keys(childrenDict).forEach(parentId => {
        if (directoriesDict[parentId]) {
            directoriesDict[parentId].children = childrenDict[parentId];
        }
    })

    return { main: { id: "main_id", isDir: true, isMain: true, children: baseDirectories }, directoriesDict }
}

const getDirectoryOpenedState = (dirId) => {
    return !!getValue(dirId);
}

export const setDirectoryOpenedState = (dirId, value) => {
    if (value) {
        saveValue(dirId, true);
        return;
    }

    clearValue(dirId);
}

export const isDirectoryOpened = (directoryId, openDefault) => {    
    let isOpened = getDirectoryOpenedState(directoryId);

    if (!isOpened && openDefault) {
        setDirectoryOpenedState(directoryId, true);
        isOpened = true;
    }

    return isOpened;
}