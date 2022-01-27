import { FC } from 'react';

import { Footer } from './Footer';


export const Main: FC = ({ children }) => {
  return (
    <div className="bg-white">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
