import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckOut from './CheckOut';
import Login from './Login';
import React, { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';
import Footer from './Footer';


const promise = loadStripe(
  'pk_test_51KgnLXFG04c8ipPDaKNp3kjZQ9gir6QJFrOgiEjMX6nJpCr0vWlGPDCwpUGkgI89IBy6Xl3XAaSwrL0jh6i4TNQB00ylGi3cT9'
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (

     <Router>
      <div className="App">
                
              <Routes>
          <Route path='/Orders' element={<><Header/><Orders /></>} />
          <Route  path='/Login' element={<Login />} />
          <Route  path='/Payment' element= {<Elements stripe={promise}><Payment /></Elements>} />
          <Route path="/CheckOut" element={<><Header /><CheckOut /></>} />
          <Route path='/' element={<><Header/><Home /><Footer/></>} />
                
        </Routes>

      </div>
    </Router>


  );
}


export default App;
