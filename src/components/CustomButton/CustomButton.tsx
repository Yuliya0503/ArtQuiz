import { IButtonChildren } from '../../models/interfaces';

const CustomButton = ({ children }: IButtonChildren) => {
  return <button>{children}</button>;
};

export default CustomButton;
