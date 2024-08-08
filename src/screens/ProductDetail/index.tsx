import { Image, ImageBackground, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../../enums/StyleGuide'
import { Button, Counter, Label, Pressable, Scrollable } from '../../components'
import { IMAGES } from '../../assests/images'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../redux/reducer/CartSlice'
import { SCREEN } from '../../enums/AppEnums'
import { styles } from './style'
import { ImageUrl } from '../../utils/Helper'

const ProductDetail = (props: any) => {
    const dispatch = useDispatch()
    const { route, navigation } = props
    const { item } = route?.params
    const [counter, setCounter] = useState<number>(0)
    const handleDecrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const handleAddToCart = () => {
        if (counter > 0) {
            dispatch(
                addItemToCart({
                    id: item?.id,
                    name: item?.name,
                    image: item?.image,
                    price: item?.price,
                    description: item?.detail,
                    quantity: counter,
                })
            )
            navigation.navigate(SCREEN.Cart)
        } else {
            ToastAndroid.show('Please Add Quantity', ToastAndroid.SHORT)
        }
    }


    return (
        <View style={styles.Container}>
            <Scrollable>

                <Pressable style={styles.Header} onPress={() => navigation.goBack()}>
                    <Image source={IMAGES.BackArrow} style={styles.IconStyle} />
                </Pressable>

                {/* Product Image*/}
                <View style={styles.ProductContainer}>
                    <Label style={styles.TitleLabel}>{item?.name}</Label>
                    <ImageBackground source={IMAGES.ringImage} style={styles.RingContainer}>
                        <Image source={{ uri: `${ImageUrl}${item?.image}` }} style={styles.ProductImage} />
                    </ImageBackground>
                </View>

                <View style={styles.SizeContainer}>
                    <Label style={styles.SizeLabel}>Unit - <Label style={styles.SizeLabel}>{item?.unit}</Label></Label>
                    <Pressable style={styles.AddFav}>
                        <Image source={IMAGES.HeartIcon} style={styles.heartStyle} />
                    </Pressable>
                </View>

                {/* Counter and Price Section */}
                <View style={styles.CounterContainer}>
                    <Counter
                        value={counter}
                        onDecrement={handleDecrement}
                        onIncrement={() => setCounter(counter + 1)} />

                    <Label style={styles.PriceLabel}>${item.price}</Label>
                </View>

                {/* Decription */}
                <Label style={styles.DescLabel}>Description:</Label>
                <Label style={styles.Description}>{item?.detail}</Label>

            </Scrollable>


            {/* Bottom Card */}
            <View style={styles.BottomBar}>
                {/* cart button */}
                <Pressable style={styles.CartStyle} onPress={() => handleAddToCart()}>
                    <Ionicons
                        name={'cart-sharp'}
                        color={COLOR.primary}
                        size={33} />
                    <Entypo
                        name={'plus'}
                        color={COLOR.primary}
                        size={30} />
                </Pressable>

                <Button
                    title='Buy now'
                    style={styles.BuyButton} />
            </View>

        </View>
    )
}

export default ProductDetail

