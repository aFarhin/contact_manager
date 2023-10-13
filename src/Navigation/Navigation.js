import { Link } from 'react-router-dom';
import '../App.css'
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Progressbar</Link>
        </li>
        <li>
          <Link to="/automatic-progress">Automatic Progress</Link>
        </li>
        <li>
          <Link to="/stopwatch">Stopwatch</Link>
        </li>
        <li>
            <Link to='/todolist'>TodoList</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;