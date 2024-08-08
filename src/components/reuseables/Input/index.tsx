import React, { memo } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { COLOR, FONT, commonStyles } from '../../../enums/StyleGuide';
import { inputProps } from '../../../enums/Types';

const Input = (props: inputProps) => {
    const { placeholder, keyboardType, onChange, value, addLeft, addRight, style, secureText, onFocus, onBlur, textStyle, placeholderColor, onRightPress, textAlignVertical, onSubmitEditing } = props
    return (

        <View style={[styles.InputStyle, style]}>
            {addLeft}
            <TextInput
                style={[styles.Input, textStyle]}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor ? placeholderColor : COLOR.dark}
                keyboardType={keyboardType}
                onChangeText={x => onChange && onChange(x)}
                value={value}
                secureTextEntry={secureText}
                onFocus={onFocus}
                autoCapitalize="none"
                onBlur={onBlur}
                onSubmitEditing={onSubmitEditing}
                textAlignVertical={textAlignVertical} />
            {<TouchableOpacity onPress={onRightPress}>
                {addRight}
            </TouchableOpacity>}
        </View>
    );
};

export default memo(Input)

const styles = StyleSheet.create({
    InputStyle: {
        ...commonStyles.justifyView,
        width: '92%',
        height: 50,
        alignSelf: 'center',
        paddingHorizontal: '4%',
        borderWidth: .5,
        borderColor: COLOR.dark,
        borderRadius: 10,
    },
    Input: {
        flex: 1,
        fontFamily: FONT.regular,
        fontSize: 15,
        color: COLOR.dark,
        marginLeft: '1%'
    },

});
