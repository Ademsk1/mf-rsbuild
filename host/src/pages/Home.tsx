import React from 'react';

const Button = React.lazy(() => import('provider/Button'));

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <React.Suspense fallback={<div>Loading Button...</div>}>
        <Button>Home Page Button</Button>
      </React.Suspense>
    </div>
  );
};

export default Home; 