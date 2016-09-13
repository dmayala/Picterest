import * as React from 'react';

export default (): React.ReactElement<any> => {
  return (
    <div className="container" id="content">
      <header id="banner" className="hero-unit">
        <div className="container">
          <div><h1>Picterest</h1>
            <p className="lead">This will soon be something good soon.</p>
          </div>
        </div>
      </header>
    </div>
  );
}