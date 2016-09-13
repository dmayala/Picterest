import * as React from 'react';

export interface AppProps {
  children: React.ReactElement<any>;
}

export default class App extends React.Component<AppProps, void> {
  render(): React.ReactElement<any> {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}