import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';

class Player extends Component {
  state = {
    //loading: true,
    paused: true,
  };
  // onBuffer = ({isBuffering}) => {
  //   this.setState({
  //     loading: isBuffering,
  //   });
  // };
  // onLoad = () => {
  //   this.setState({
  //     loading: false,
  //   });
  // };
  playPause = () => {
    this.setState({
      paused: !this.state.paused,
    });
  };
  render() {
    // {
    //   this.props.videoImage
    //     ? console.log(this.props.videoImage)
    //     : console.log('No hay nada');
    // }
    {
      let URL;
      this.props.videoImage
        ? (URL = this.props.videoImage)
        : (URL =
            'https://vod.vodgc.net/manifest/4-246-dEtPs2g_b-4i3AZV1589655107673.m3u8');
    }
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            // source={{
            //   uri: `${URL}`,
            // }}
            source={{
              uri:
                'https://vod.vodgc.net/manifest/4-246-dEtPs2g_b-4i3AZV1589655107673.m3u8',
            }}
            style={styles.video}
            resizeMode="contain"
            // onBuffer={this.onBuffer}
            // onLoad={this.onLoad}
            paused={this.state.paused}
          />
        }
        loader={<ActivityIndicator color="red" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
          </ControlLayout>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default Player;
