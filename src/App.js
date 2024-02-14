import logo from './logo.svg';
import './App.css';
import PhotoDex from './components/PhotoDex/PhotoDex';
import { BrowserRouter} from 'react-router-dom';
import PhotoRouter from './routers/PhotoRoter';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PhotoRouter/>
        hello
      </div>
    </BrowserRouter>
    
  );
}

export default App;
