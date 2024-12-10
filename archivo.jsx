import React, { useState } from 'react';

const Spoiler = ({ children }) => {
  // Estado para controlar si el spoiler está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del spoiler
  const toggleSpoiler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleSpoiler}>
        {isOpen ? 'Ocultar Spoiler' : 'Mostrar Spoiler'}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default spoiler;
import React from 'react';
import Spoiler from './Spoiler'; // Importa el componente Spoiler

const App = () => {
  return (
    <div>
      <h1>Bienvenido a mi Portfolio</h1>
      <Spoiler>
        <p>Este es un spoiler de contenido secreto que se muestra cuando se hace clic.</p>
      </Spoiler>
    </div>
  );
};

export default App;

import React from 'react';
import Spoiler from './Spoiler'; // Importa el componente Spoiler

const App = () => {
  return (
    <div>
      <h1>Bienvenido a mi Portfolio</h1>
      <Spoiler>
        <p>Este es un spoiler de contenido secreto que se muestra cuando se hace clic.</p>
      </Spoiler>
    </div>
  );
};

export default App;
