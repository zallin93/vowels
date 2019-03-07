import React from 'react';
import FileUploader from '../../app/components/FileUploader';
import Results from '../../app/components/Results';
import {countVowels} from 'vowels-util';

const initialState = {
    resultCounts: [], 
    hasSubmitted: false
};

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleUploadFunc = this.handleUploadFunc.bind(this);

        this.state = initialState;
    }

    handleUploadFunc(file) {
        let reader = new FileReader();
        let self = this;
        reader.onload = (e) => {
            let lines = reader.result.split('\n');
            let resultArray = this.state.resultCounts;
            lines.forEach((line) => {
                console.log('resultsArray', resultArray);
                let count = countVowels(line);
                resultArray.push(count);
            });

            self.setState({
                hasSubmitted: true,
                resultCounts: resultArray
            });
        };
        
        reader.readAsText(file, 'utf8');
    }

    render() {
        return (
            <div>
                <h1>Count the Vowels</h1>
                <div>Upload your file here, and I will give you the counts of vowels in all substrings!</div>
                <FileUploader handleUploadFunc={this.handleUploadFunc} 
                    isSubmitEnabled={!this.state.hasSubmitted} />
                <Results resultCounts={this.state.resultCounts} 
                    showResults={this.state.hasSubmitted} 
                    handleResetFunc={() => {this.setState({...initialState});}} />
            </div>
        );
    }
};

export default LandingPage;