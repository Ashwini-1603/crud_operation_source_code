import React, { useState } from 'react';
export default function Table({ item, index }) {
  const [count] = useState(0);
  const { name } = item;
  console.log('name is', index);

  return (
    <table>
      <tr>
        <td>Sr</td>
        <td>name</td>
      </tr>
      <tr>
        <td>{index}</td>
        <td>{name}</td>
      </tr>
    </table>
  );
}
