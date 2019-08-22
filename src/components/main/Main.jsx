import React from 'react';

const Main = (props) => {
  const {title, children} = props;

  return (
    <div>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  )
}

export default Main;