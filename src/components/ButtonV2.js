import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class ButtonV2 extends React.Component {

    renderSubmit = (value) => {
        return value === 'EN' ? 'submit' : 'Voorleggen';
    }

    render() {

        //console.log(this.context);

        const text = this.context === 'EN' ? 'Submit': 'Voorleggen';

        return (
            <ColorContext.Consumer>
            {
                (color) => 
                <div>
                    <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>                    
                        { ({language}) => this.renderSubmit( language) }
                    </LanguageContext.Consumer>
                    </button>
                submit with ColorContext.Consumer
                </div>
            }            
            </ColorContext.Consumer>
        );        

    }       
}

export default ButtonV2;