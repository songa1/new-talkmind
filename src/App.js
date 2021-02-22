import React from 'react';
import Navbar from './Components/Layout/Navbar';
import Sidebar from './Components/Layout/Sidebar';
import Footer from './Components/Layout/Footer';
import Dashboard from './Components/Dashboard';
import {ContentRoutes} from './Routes/Routers'
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  const user = localStorage.getItem('userToken');


  return (
        <div className="App">
          

          return (
            <Router>
              <div className="App">
                <Navbar/>
                <div className="content">
                  <ContentRoutes />
                  <div>
                    {!user &&<Route><Sidebar/></Route>}
                    {user &&<Router><Dashboard/></Router>}
                  </div>
                </div>
                <Footer/>
              </div>
            </Router>
          );
        </div>
  );
}

export default App;
