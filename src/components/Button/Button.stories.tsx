import React from 'react';
import Button from './Button'; 

export default {
  title: 'Button',
  component: Button,  
};

export const Base: React.FC = () => (
  <Button onClick={() => {}} variant="solid">
    Click me
  </Button>
);
