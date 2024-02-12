import { INavLink } from '../../models/interfaces';
import CustomButton from '../CustomButton/CustomButton';
import { Link } from 'react-router-dom';

const NavLink = ({ children, link }: INavLink) => {
  return (
    <Link to={link}>
      <CustomButton>{children}</CustomButton>
    </Link>
  );
};

export default NavLink;
