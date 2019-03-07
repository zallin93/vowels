import React from 'react';


class FileUploader extends React.Component {
    constructor(props) {
        super(props);
        this.submitFunc = this.submitFunc.bind(this);
    }

    submitFunc(e) {
        e.preventDefault();
        this.props.handleUploadFunc(this.fileInput.files[0]);
    }

    render() {
        return (
            <div>
                <input type='file' ref={(ref) => {this.fileInput = ref;}} />
                <button type='button' onClick={this.submitFunc} disabled={!this.props.isSubmitEnabled}>Submit</button>
            </div>
        );
    }
};

export default FileUploader;