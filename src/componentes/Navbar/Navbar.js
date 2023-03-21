import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

function Navbar() {
  return(
    <ul className={styles.ul}>
      <li>
        <Link to="/">Homepage</Link>
      </li>
      <li>
        <Link to="/Create">Create</Link>
      </li>
      <li>
        <Link to="/Delete">Delete</Link>
      </li>
      <li>
        <Link to="/Update">Update</Link>
      </li>
    </ul>
  )
}

export default Navbar