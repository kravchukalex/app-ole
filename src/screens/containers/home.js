import React, {Component, Fragment} from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import API from '../../../utils/api';
import SuggestionList from '../../videos/containers/suggestion-list';
import CategoryList from '../../videos/containers/category-list';

class Home extends Component {
  // async componentDidMount() {
  //   const categoryList = await API.getList();
  //   const suggestionList = await API.getHome();

  //   this.props.dispatch({
  //     type: 'SET_CATEGORY_LIST',
  //     payload: {
  //       categoryList,
  //     },
  //   });
  //   this.props.dispatch({
  //     type: 'SET_SUGGESTION_LIST',
  //     payload: {
  //       suggestionList,
  //     },
  //   });
  // }

  componentDidMount() {
    API.getList().then(resp =>
      this.props.dispatch({
        type: 'SET_CATEGORY_LIST',
        payload: {
          categoryList: resp,
        },
      }),
    );
    API.getHome().then(resp =>
      this.props.dispatch({
        type: 'SET_SUGGESTION_LIST',
        payload: {
          suggestionList: resp,
        },
      }),
    );
  }
  render() {
    return (
      <ScrollView>
        <Image
          style={styles.cover}
          source={require('../../../assets/banner-messi.png')}
        />
        <CategoryList />
        <SuggestionList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cover: {
    height: 205,
    width: 'auto',
    resizeMode: 'contain',
    paddingVertical: 30,
    paddingHorizontal: 10,
    //  backgroundColor: 'red',
  },
});

export default connect(null)(Home);
