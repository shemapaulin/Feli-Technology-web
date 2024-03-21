import { ChildrenProps } from '../../modal/index';
import './main.scss';

export const Main = ({ children }: ChildrenProps) => {
  return (
    <main className='main'>
      {children}
    </main>
  );
};
