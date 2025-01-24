import React from 'react';

const Button = React.lazy(() => import('provider/Button'));

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <React.Suspense fallback={<div>Loading Button...</div>}>
        <Button>Contact Page Button</Button>
      </React.Suspense>
    </div>
  );
};

export default Contact; 