import React from 'react';
import FileUploader from '../../app/components/FileUploader';

class LandingPage extends React.Component {



    render() {
        return (
            <div>
                Upload your file here!
                <FileUploader />
            </div>
        );
        
    }
};

export default LandingPage;