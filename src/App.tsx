import React from 'react';
import './App.scss';
import { Carousel } from './components/Carousel';
import { CarouselSettings } from './components/CarouselSettings';

interface State {
  images: string[];
  step: number;
  frameSize: number;
  animationDuration: number;
  infinite: boolean;
  itemWidth: number;
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    step: 3,
    frameSize: 3,
    animationDuration: 1000,
    infinite: false,
    itemWidth: 130,
  };

  handleChangeStep = (value: number) => {
    this.setState({ step: value });
  };

  handleChangeFrameSize = (value: number) => {
    this.setState({ frameSize: value });
  };

  handleChangeDuration = (value: number) => {
    this.setState({ animationDuration: value });
  };

  handleChangeItemWidth = (value: number) => {
    this.setState({ itemWidth: value });
  };

  handleChangeInfinite = (value: boolean) => {
    this.setState({ infinite: value });
  };

  render() {
    const { images, animationDuration, frameSize, infinite, itemWidth, step } =
      this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 data-cy="title">Carousel with {images.length} images</h1>

        <CarouselSettings
          duration={animationDuration}
          frameSize={frameSize}
          itemWidth={itemWidth}
          step={step}
          infinite={infinite}
          onChangeDuration={this.handleChangeDuration}
          onChangeFrameSize={this.handleChangeFrameSize}
          onChangeItemWidth={this.handleChangeItemWidth}
          onChangeStep={this.handleChangeStep}
          onChangeInfinite={this.handleChangeInfinite}
        />

        <Carousel
          images={images}
          step={step}
          frameSize={frameSize}
          infinite={infinite}
          itemWidth={itemWidth}
          animationDuration={animationDuration}
        />
      </div>
    );
  }
}

export default App;
