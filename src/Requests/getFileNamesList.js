import data from '../Data/files.json';

export default async function  getFileNamesList() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 0);
    }) 
}