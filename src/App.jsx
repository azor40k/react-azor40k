import Routing from './Route/Router'
import './App.scss';
import './Sass/components/App-dark.scss';
import DarkButton from './Components/DarkButton';
import { useState } from 'react';

const App = () => {

    const [darkmode, setDarkMode] = useState(true)
    
    return (
        <div className={darkmode ? 'App' : 'App-dark'}>
            <DarkButton setDarkMode={setDarkMode}/>
            <Routing/>
        </div>
    );
}

export default App;
