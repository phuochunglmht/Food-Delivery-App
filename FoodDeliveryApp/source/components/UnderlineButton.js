import React from "react";
import { Pressable, Text, StyleSheet, } from "react-native";
import scale from "../../responsive";
import CUSTOM_COLOR from "../constants/color";

const UnderlineButton = props => {
    const {isChoosing, onPress, style, textStyle, children} = props;

    return (
        <Pressable onPress={onPress} style={[styles.background(isChoosing), style]}>
            <Text style={[styles.text, textStyle]}>{children}</Text>
        </Pressable>
    );
};

export default UnderlineButton;

const styles = StyleSheet.create({
    background: isChoosing => ({
        borderBottomWidth: 3,
        borderBottomColor: isChoosing ? CUSTOM_COLOR.SunsetOrange : 'transparent',
    }),
    text: {
        color: CUSTOM_COLOR.Manatee,
        padding: scale(15),
        fontWeight: '700',
        fontSize: scale(17),
    },
});