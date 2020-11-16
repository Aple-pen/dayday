import React from 'react';
import Customer from './components/customer/Customer';
import Header from './components/header/Header';
import SeekerMenu from './components/seeker/SeekerMenu';
import styles from './App.module.css'
import { Link, Route} from 'react-router-dom';
import SeekerView from './components/seekerView/SeekerView';
import CustomerView from './components/customerView/CustomerView';
import SeekerDetails from './components/seekerDetails/SeekerDetails';

const App = (props) => {
  return(
    <div>
      <Header />
      <div className={styles.userCategory}>
        <Link className={styles.menu} to="/seekerView"><SeekerMenu /></Link>
        <Link className={styles.menu} to="/customerView"><Customer /></Link>
      </div>
      <div className={styles.viewLocate}>
        <div className={styles.view}>
          <Route path={["/seekerView","/"]} component={SeekerView} exact={true} />
          <Route path="/customerView" component={CustomerView} />
          <Route path="/seekerView/:username" component={SeekerDetails} />
        </div>
      </div>  
    </div>
  )
}

export default App;
