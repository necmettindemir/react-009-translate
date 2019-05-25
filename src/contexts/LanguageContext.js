import React from 'react';

// //for def value send parameter directlu 
// const context = React.createContext('EN');
// //const context = React.createContext( {language:'EN'});
// export default context;


const Context = React.createContext('EN');

export class LanguageStore extends React.Component {

    state = {language:'EN'};

    onLanguageChange = (lang) => {
        this.setState({ language:lang});
    }

    render() {

        return (
            <Context.Provider value={ { ...this.state, onLanguageChange:this.onLanguageChange } }>
                { this.props.children }
            </Context.Provider>
        );

    }
}


export default Context;
