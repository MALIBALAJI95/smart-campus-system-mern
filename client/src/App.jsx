// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/common/Header';
// import Sidebar from './components/common/Sidebar';
// import Dashboard from './pages/Dashboard';
// import Bookings from './pages/Bookings';
// import Inventory from './pages/Inventory';
// import Maintenance from './pages/Maintenance';
// import './App.css';

// const App = () => {
//     return (
//         <Router>
//             <div className="app-container">
//                 <Header />
//                 <Sidebar />
//                 <main>
//                     <Switch>
//                         <Route path="/" exact component={Dashboard} />
//                         <Route path="/bookings" component={Bookings} />
//                         <Route path="/inventory" component={Inventory} />
//                         <Route path="/maintenance" component={Maintenance} />
//                     </Switch>
//                 </main>
//             </div>
//         </Router>
//     );
// };

// export default App;
import React from 'react';
import Login from './components/login';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <Login />
        </div>
    );
};

export default App;