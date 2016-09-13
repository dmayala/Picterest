import * as React from 'react';
import  * as MasonryClass  from 'react-masonry-component';
declare var process:any;

const Masonry = MasonryClass.default;

var masonryOptions = {
    transitionDuration: 0
};

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
        return (<div>loading...</div>);
      } else {
        var childElements = [{ src: 'http://placehold.it/350x150' },
          { src: 'http://placehold.it/240x150' },
          { src: 'http://placehold.it/300x150' }].map(function(element){
            return (
              <li className="image-element-class">
                <img src={element.src} />
              </li>
            );
        });

        return (
          <Masonry
            className={'my-gallery-class'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {childElements}
          </Masonry>
        );
      }
  }
}