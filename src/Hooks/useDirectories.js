import { useCallback, useEffect, useState } from "react";
import getFileNamesList from "../Requests/getFileNamesList";
import { formatDirectoriesData } from "../Helpers/directory";

let cachedData = null;

export default function useDirectories() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [directoriesDetails, setDirectoriesDetails] = useState({});

    const fetchAndFormatData = useCallback(async () => {
        if (cachedData) {
            return cachedData;
        }

        const directoriesData = await getFileNamesList();
        cachedData = formatDirectoriesData(directoriesData);

        return cachedData;
    }, [])

    useEffect(() => {
        (async function() {
            try {
                setLoading(true);
                setError(null);
                const { main, directoriesDict } = await  fetchAndFormatData();
                setData(main);
                setDirectoriesDetails(directoriesDict);
            } catch(ex) {
                setError(ex);
            } finally {
                setLoading(false);
            }
        })();
    }, [fetchAndFormatData]);


    return {
        loading, error, directory: data, directoriesDetails
    }
}