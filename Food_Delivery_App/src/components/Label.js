import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import scaleWidth from '../responsive/ScaleWidth';
import scaleHeight from '../responsive/ScaleHeight';
import CUSTOM_COLOR from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';

class Label extends React.Component {
  render() {
    return (
        <>
        <Text 
            style={this.props.isActived === "true" ? [styles.label, styles.label_actived] : styles.label}
        >
            {this.props.text}
        </Text>
        <View style={this.props.isActived === "true" ? [styles.line, styles.line_actived] : styles.line} />
        </>
    )
  }
}

export default Label;

const styles = StyleSheet.create({
    label: {
        fontSize: scaleWidth(17),
        color: CUSTOM_COLOR.Manatee,
        fontFamily: FONT_FAMILY.Bold,

    },
    line: {
        height: scaleHeight(3),
        width: scaleWidth(87),
        backgroundColor: 'transparent',
    },
    label_actived: {
        color: CUSTOM_COLOR.Vermilion,
    },
    line_actived: {
        backgroundColor: CUSTOM_COLOR.Vermilion,
    }
})