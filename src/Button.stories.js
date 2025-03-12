// src/Button.stories.js
import React from 'react';
import Button from './Button'; // Corrija a importação para usar o default export

export default {
  title: 'Button',
  component: Button,  // Definindo o componente a ser mostrado no Storybook
};

export const Base = () => <Button>Click Me</Button>;  // Exemplo de história
