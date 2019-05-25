import React from 'react';
import UserCreate from './UserCreate';
//import LanguageContext from '../contexts/LanguageContext';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';


class App extends React.Component {

    // state = { language:'EN'};

    // onLanguageChange = (lang) => {
    //     console.log('lang : ' , lang);
    //     this.setState({ language:lang})
    // }

    render() {

        // return (
        //     <div className="ui container">

        //         <LanguageSelector onLanguageChange={this.onLanguageChange} />        

        //         selected lang : {this.state.language}
        //         <br/>
                              
        //         <ColorContext.Provider value="red">
        //             <LanguageContext.Provider value={this.state.language}>                    
        //                 <UserCreate />
        //             </LanguageContext.Provider>
        //         </ColorContext.Provider>    
        //     </div>
            
        // );
        
        ////selected lang : {this.state.language}

        return (
            <div className="ui container">

                <LanguageStore>
                    
                    <LanguageSelector/>        

                    
                    <br/>
                                
                    <ColorContext.Provider value="red">                   
                            <UserCreate />                   
                    </ColorContext.Provider>
                </LanguageStore>   

            </div>
            
        );

    }
}

/* 
 const App = () => {

    
        return (
            <div>App...</div>
        );
    
} */

export default App;