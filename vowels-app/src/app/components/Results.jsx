import React from 'react';

const Results = (props) => {
    let resultRows = props.resultCounts.map((element,index) => {
        return (
            <li key={index}>Line {index}: {element} vowels</li>
        );
    });
    
    if( props.showResults) {
        return (
            <div>
                <h2>Result Counts</h2>
                <ul>
                    {resultRows}
                </ul>
                <button type="button" onClick={props.handleResetFunc}>Reset</button>
            </div>       
        ); 
    } else {
        return null;
    }
    
};

export default Results;