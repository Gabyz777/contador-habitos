import { useState } from 'react';

export default function GestorDeHabitos() {
  const [contador, setContador] = useState(0);
  const [habito, setHabito] = useState('');

  return (
    <div>
      <h1>Registo de Hábito</h1>

      <div>
        <label htmlFor="habito">Nome do Hábito: </label>
        <input
          type="text"
          id="habito"
          value={habito}
          placeholder="Escreva aqui"
          onChange={(e) => setHabito(e.target.value)}
        />
      </div>

      <div>
        <p>Frequência: <strong>{contador}</strong></p>
        <button onClick={() => setContador(prev => prev + 1)} >+1</button>
        <button onClick={() => setContador(prev => (prev > 0 ? prev - 1 : 0))}>-1</button>
        <button onClick={() => setContador(0)}>Resetar</button>
      </div>
    </div>
  );
}
