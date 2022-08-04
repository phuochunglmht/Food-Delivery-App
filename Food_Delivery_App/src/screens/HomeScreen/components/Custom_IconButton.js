import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import CUSTOM_COLORS from '../../../constants/colors';
import scale from '../../../constants/responsive';

export default class Custom_IconButton extends Component {
  constructor(props) {
    super(props);
  }
  navigate = location => {
    this.props.navigation.navigate(location);
  };
  render() {
    return (
      <TouchableOpacity
        style={styles.touchableContainer(this.props)}
        // onPress={this.props.onPress}
        onPress={() => {
          this.props.navigation.navigate(this.props.name);
        }}>
        <Image source={this.props.icon} style={styles.iconContainer} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchableContainer: props => ({
    width: scale(31),
    height: scale(31),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: CUSTOM_COLORS.Concreate,
    left: props.left,
    ...props.style,
  }),
  iconContainer: {
    width: '100%',
    height: '100%',
  },
});