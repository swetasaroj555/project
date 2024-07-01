
import styles from './Navigation.module.css';

const Navigation = () => {

  return (
    <nav className={`${styles.navigation} container`}>
      <img src="/images/frame.png" alt="do some coding logo" />
        <ul>
           <li>home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>


    </nav>

  );
};

export default Navigation;