import * as React from 'react';
import  * as MasonryClass  from 'react-masonry-component';
const Masonry = MasonryClass.default;

interface S {
  mounted: boolean;
}

export default class Home extends React.Component<void, S> {

  state = {
    mounted: false
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {   
      if (!this.state.mounted) {
        return (<div className="container">loading...</div>);
      } else {
        var childElements = [{ src: 'http://placehold.it/350x150' },
          { src: 'http://placehold.it/350x100' },
          { src: 'http://placehold.it/350x120' }].map(function(element){
            return (
              <li className="image-element-class">
                <img src={element.src} />
              </li>
            );
        });

        return (
          <div className="container">
            <Masonry
              className={'container'}
              elementType={'div'}
              options={{}}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false}
            >
              {childElements}
            </Masonry>
          </div>
        );
      }
  }
}