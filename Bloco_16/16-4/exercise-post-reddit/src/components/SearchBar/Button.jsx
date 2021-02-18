import React from 'react';

const button = {
  backgroundColor: '#2ea44f',
  color: '#fff',
  borderColor: 'rgb(27, 31, 35, 0.15)',
  boxShadow: '0 1px 0 rgba(27,31,35,0.04)',
  borderRadius: '6px',
  display: 'inline-block',
  padding: '5px 16px',
  fontSize: '14px',
  fontWeight: ' 500',
  lineHeight: '20px',
  cursor: 'Pointer',
  margin: '0 10px',
};

function Button({ name, ...restProps }) {
  return (
    <>
      <button style={button} {...restProps}>
        {name}
      </button>
    </>
  );
}



export default Button;
