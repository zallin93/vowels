import React from 'react';

class FileUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: undefined
        };
    }

    render() {
        return (
            <input type=file value={this.state.file} />
        );
    }
};

export default FileUploader;