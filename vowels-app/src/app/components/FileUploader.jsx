import React from 'react';
import {countVowels} from 'vowels-util';

class FileUploader extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeFunc = this.handleChangeFunc.bind(this);
    }

    handleChangeFunc(e) {
        let curFile = e.target.files[0];
        let reader = new FileReader();
        reader.onload = e => {
            let lines = reader.result.split('\n');
            lines.forEach((line) => {
            countVowels(line);
            });
        };
        
        reader.readAsText(curFile, 'utf8');
    }

    render() {
        return (
            <div>
                <input type='file' onChange={this.handleChangeFunc} />
            </div>
        );
    }
};

export default FileUploader;