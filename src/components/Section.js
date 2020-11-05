import React from 'react'

export default function Section(props) {
  // TODO fetch
  const name = "Section " + props.id;

  return (
    <p>{name}</p>
  );
}
