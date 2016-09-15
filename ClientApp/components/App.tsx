import * as React from 'react';
import Footer from './Footer';

export interface AppProps {
  children: React.ReactElement<any>;
}

export default class App extends React.Component<AppProps, void> {
  render(): React.ReactElement<any> {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}