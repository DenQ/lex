import React from 'react';

interface IPropTypes {
  children: any,
};

const Component = (props: IPropTypes) => {

  return (
    <>
        {props.children}
    </>
  );
};

export default Component;
