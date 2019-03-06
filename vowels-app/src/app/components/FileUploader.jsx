import React from 'react';
import {countVowels} from 'vowels-util';

class FileUploader extends React.Component {
    constructor(props) {
        super(props);
        this.handleUploadFunc = this.handleUploadFunc.bind(this);
    }

    handleUploadFunc(e) {
        e.preventDefault();

        let curFile = this.fileInput.files[0];
        let reader = new FileReader();
        reader.onload = e => {
            let lines = reader.result.split('\n');
            lines.forEach((line) => {
                console.log( countVowels(line) );
            });
        };
        
        reader.readAsText(curFile, 'utf8');
    }

    render() {
        return (
            <div>
                <input type='file' ref={(ref) => {this.fileInput = ref;}} />
                <button type='button' onClick={this.handleUploadFunc} >Submit</button>
            </div>
        );
    }
};

export default FileUploader;