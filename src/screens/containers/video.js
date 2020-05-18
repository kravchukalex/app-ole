import React, {Component} from 'react';
import VideoLayout from '../components/videoLayout';
import Player from '../../player/containers/player';
import Details from '../../videos/components/details';
import {connect} from 'react-redux';
import {Animated} from 'react-native';

function mapsStateToPros(state) {
  return {
    video: state.selectedVideo,
    favourites: state.favourites,
  };
}

class Video extends Component {
  state = {
    opacity: new Animated.Value(0),
  };

  favouriteVideo = info => {
    this.props.dispatch({
      type: 'SET_FAVOURITES',
      payload: {
        favourite: this.props.video,
      },
    });
  };
  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
    }).start();
  }
  render() {
    return (
      <Animated.View style={{flex: 1, opacity: this.state.opacity}}>
        <VideoLayout>
          {/* <Player /> */}
          <Details onPress={this.favouriteVideo} {...this.props.video} />
        </VideoLayout>
      </Animated.View>
    );
  }
}

export default connect(mapsStateToPros)(Video);
