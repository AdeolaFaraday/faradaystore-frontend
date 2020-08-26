import {Component} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/react-carousel';

export default class MyCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel arrows dots>
          <div>
            <img scr="">

            </img>
          </div>
          <div>
            <img scr="">

            </img>
          </div>
          <div>
            <img scr="">

            </img>
          </div>
        </Carousel>
      </div>
    );
  }
}