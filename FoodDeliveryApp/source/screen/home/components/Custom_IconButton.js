import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import CUSTOM_COLOR from '../../../constants/color';

export default class Custom_IconButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  navigate = location => {
    this.props.navigation.navigate(location);
  };
  render() {
    return (
      <TouchableOpacity
        style={styles.touchableContainer(this.props)}
        onPress={this.props.onPress}>
        <Image source={this.props.icon} style={styles.iconContainer} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchableContainer: props => ({
    width: 31,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: CUSTOM_COLOR.Concreate,
    left: props.left,
    position: 'absolute',
    ...props.style,
  }),
  iconContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});