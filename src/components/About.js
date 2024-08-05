import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div className='container'>
      <h1>About</h1>
      <h2>Developers are working on it</h2>
      {/* <User name={"John Funcky"}/> */}
      <UserClass name={'John Classy'} loc={'Patna'} />
    </div>
  );
};

export default About;
