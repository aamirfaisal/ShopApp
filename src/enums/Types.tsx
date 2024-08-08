import React, { ReactNode } from 'react';
import { TextStyle, ViewStyle, KeyboardTypeOptions, StyleProp } from "react-native"

export interface textProps {
    children: React.ReactNode
    style?: any
}

export interface inputProps {
    placeholder: any,
    keyboardType?: KeyboardTypeOptions
    onChange?: Function
    value?: any
    addLeft?: ReactNode
    addRight?: ReactNode
    style?: ViewStyle
    secureText?: boolean
    onFocus?: () => void,
    onBlur?: () => void,
    textStyle?: TextStyle
    placeholderColor?: string
    multiline?: boolean
    onRightPress?: () => void
    onSubmitEditing?: () => void
    textAlignVertical?: any
}

export interface buttonProps {
    title: string
    style?: ViewStyle
    onPress?: () => void
    activeOpacity?: number
    disabled?: boolean
    textStyle?: Text
    isLoading?: boolean;
    size?: any
}

export interface scrollProps {
    children?: React.ReactNode
    hasInput?: ReactNode
    horizontal?: boolean
    containerStyle?: ViewStyle
}

export interface pressable {
    children: React.ReactNode
    style?: any
    onPress?: () => void
    opacity?: number
}

export interface ForgetPasswordModalProps {
    visible?: any
    onRequestClose?: () => void
    onPressYes?: () => void
    onPressNo?: () => void
}

export interface AnyIconProps {
    type: React.ElementType
    name: string
    color?: string
    size?: number
    style?: StyleProp<ViewStyle | TextStyle>
    onPress?: () => void
}

export interface counterProps {
    onIncrement?: () => void
    onDecrement?: () => void
    value: number
}

export interface cartModal {
    visible: boolean
    onClose?: () => void
    addressValue?: any
    onAddressChange?: Function


}