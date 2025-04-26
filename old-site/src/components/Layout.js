import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <div className="mx-auto max-w-6xl text-gray-700">
      <Header />
      <main className="my-4 mx-auto max-w-6xl">{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
