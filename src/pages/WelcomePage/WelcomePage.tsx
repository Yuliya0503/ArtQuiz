import NavLink from '../../components/NavLink/NavLink';
import Header from '../../components/Header/Header';

const WelcomePage = () => {
  return (
    <div>
      <Header />
      <h1>WelcomePage!</h1>
      <div>
        <NavLink link={'/settings'}>Settings</NavLink>
        <NavLink link={'/auth'}>Auth</NavLink>
        <NavLink link={'/artists'}>Artists</NavLink>
        <NavLink link={'/blitz'}>Blitz</NavLink>
        <NavLink link={'/paintings'}>Paintings</NavLink>
      </div>
    </div>
  );
};

export default WelcomePage;
