import { Link } from 'react-router-dom';
import Card from '../shared/Card';

function About() {
  return (
    <div className='about'>
      <Card reverse={false}>
        <div className='about'>
          <h1>About this project</h1>
          <p>This is a react app to give feedback</p>
          <p>Version: 1.0.0</p>
          <p>
            <Link to='/'>Back to Home</Link>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default About;
