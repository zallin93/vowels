import React from 'react';
import FileUploader from '../../app/components/FileUploader';

const LandingPage = (props) => {
    return (
        <div>
            <span>Upload your file here, then see the vowel counts in the Console!</span>
            <FileUploader />
        </div>
    );
};

export default LandingPage;