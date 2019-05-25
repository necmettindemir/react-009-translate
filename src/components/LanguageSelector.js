import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {


    static contextType = LanguageContext;

    render() {

        console.log(this.context);

        return (
            <div>
                select language :  

                <i className="flag us" 
                onClick={ () => this.context.onLanguageChange('EN')}/>

                <i className="flag nl"
                onClick={ () => this.context.onLanguageChange('NL')}/>

            </div>
        );


    }
 
}

export default LanguageSelector;