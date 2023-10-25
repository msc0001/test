import React from 'react';
import useDirectories from '../../Hooks/useDirectories';
import Directory from '../Directory';
import './styles.css';

function FileManager(){
    const { loading, directory, directoriesDetails } = useDirectories();

    const renderContent = () => {
        if (loading) {
            return 'Loading...';
        }

        if (!directory) {
            return null;
        }

        return <Directory id={directory.id} details={directoriesDetails} directory={directory} />   
    }

    return <section className='file-manager-container border'>
        <div className='files'>
            {renderContent()}
        </div>
    </section>
}

export default FileManager;