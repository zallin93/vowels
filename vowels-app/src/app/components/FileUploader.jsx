import React from 'react';
const Utils = require('../../../../utils.js');

class FileUploader extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeFunc = this.handleChangeFunc.bind(this);
        this.state = {
            file: ''
        };
    }

    handleChangeFunc(e) {
        console.log('e', e);
        let curFile = e.target.files[0];
        let reader = new FileReader();
        reader.onload = e => {
            let lines = reader.result.split('\n');
            lines.forEach((line) => {
                Utils.countVowels(line);
            });
        };
        
        reader.readAsText(curFile, 'utf8');
        this.setState({
            file: curFile
        });
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