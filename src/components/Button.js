import React from 'react';


function Button(props) {
  return (
    <div >
      <button type={props.children} onSubmit={props.children}>Envoyer</button>
    </div>
  );
}

export default Button;