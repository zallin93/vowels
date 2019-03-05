import React from 'react';
import FileUploader from '../../app/components/FileUploader';

class LandingPage extends React.Component {



    render() {
        return (
            <div>
                Upload your file here, then see the vowel counts in the Console!
                <FileUploader />
            </div>
        );
        
    }
};

export default LandingPage;