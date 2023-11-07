import * as React from 'react';
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div>
        <Link to='/'>This is Home component</Link>
    </div>
  );
}
export default Home;