import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

    //we have 2 ways create context
    //it should be contextType
    //1. way
    static contextType = LanguageContext;




    render() {

        //console.log(this.context);

        const text = this.context === 'EN' ? 'Submit': 'Voorleggen';

        return (
            <div>
                
                <button className="ui button primary">
                    {text}
                </button>

                submit with this.context

             </div>
        );
    }
}

//2. way
//Button.contextType = LanguageContext;

export default Button;