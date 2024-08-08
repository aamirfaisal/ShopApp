import { View, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState, useRef } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SCREEN } from '../../enums/AppEnums';
import { Label } from '../../components';
import { slides } from '../../data/Local';
import { styles } from './style';
import { wp } from '../../enums/StyleGuide';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoarding = (props: any) => {
    const { navigation } = props;
    const [showRealApp, setShowRealApp] = useState<boolean>(false);
    const sliderRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const renderItem = ({ item, index }: { item: any, index: number }) => {
        const isLastSlide = index === slides.length - 1;

        const handleNextSlide = () => {
            setCurrentIndex(index + 1);
            if (isLastSlide) {
                setShowRealApp(true);
            } else {
                sliderRef.current?.goToSlide(index + 1);
            }
        };

        const handleNavigate = () => {
            AsyncStorage.setItem('Boarding', JSON.stringify(true));
            navigation.navigate(SCREEN.LOGIN);
        };

        return (
            <ImageBackground source={item?.image} style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Label style={styles.TitleText}>{item?.title}</Label>
                    <Label style={styles.Description}>{item?.text}</Label>

                    {/* Pagination */}
                    {!isLastSlide && (
                        <View style={styles.bottomContainer}>
                            <View style={{ width: wp(22) }} />

                            <View style={styles.PaginationContainer}>
                                {slides.map((slide, idx) => (
                                    <View
                                        key={idx}
                                        style={[styles.PaginationDot, idx === currentIndex ? styles.ActivePaginationDot : null]}
                                    />
                                ))}
                            </View>

                            {/* Button */}
                            <TouchableOpacity style={styles.ButtonContainer} onPress={handleNextSlide}>
                                <Label style={styles.ButtonText}>Next</Label>
                            </TouchableOpacity>
                        </View>
                    )}

                    {/* Get Started Button for Last Slide */}
                    {isLastSlide && (
                        <View style={styles.bottomContainer2}>
                             <View style={styles.PaginationContainer}>
                                {slides.map((slide, idx) => (
                                    <View
                                        key={idx}
                                        style={[styles.PaginationDot, idx === currentIndex ? styles.ActivePaginationDot : null]}
                                    />
                                ))}
                            </View>
                            <TouchableOpacity style={[styles.ButtonContainer, styles.GetStartedButton]} onPress={handleNavigate}>
                                <Label style={styles.ButtonText}>Get Started</Label>
                            </TouchableOpacity>
                        </View>
                    )}

                </View>
            </ImageBackground>
        );
    };

    if (showRealApp) {
        return <OnBoarding />
    } else {
        return (
            <AppIntroSlider
                ref={sliderRef}
                renderItem={renderItem}
                data={slides}
                onSlideChange={(index) => setCurrentIndex(index)}
                renderNextButton={() => null}
                renderDoneButton={() => null}
                renderPagination={() => null}
            />
        );
    }
};

export default OnBoarding



// <TouchableOpacity style={styles.ButtonContainer} onPress={isLastSlide ? handleNavigate : handleNextSlide}>
// <Label style={styles.ButtonText}>{isLastSlide ? 'Get Started' : 'Next'}</Label>
// </TouchableOpacity>