import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Comments from './components/Comments/Comments';

import './App.css';

function App() {
    return (
        <div className="column">
            <div className="row">
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>
    );
}

export default App;
