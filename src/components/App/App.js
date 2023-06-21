import { Navbar } from '../Navbar/Navbar';
import Posts from '../Posts/Posts';
import Sidebar from '../Sidebar/Sidebar';
import Subreddits from '../Subreddits/Subreddits';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <div className='content-container'>
        <Sidebar/>
        <Posts/>
        <Subreddits/>
      </div>
    </div>
  );
}

export default App;
