import { StyleSheet, View, Image } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import { AnyIcon, Label } from '../reuseables'
import { TEXT_STYLE, hp, COLOR, wp } from '../../enums/StyleGuide'
import { IMAGES } from '../../assests/images'
import moment from 'moment'
import Video from 'react-native-video'
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { ICONS } from '../../assests/icons'

const MessageView = ({ item }: any) => {
    const { timestamp, text, sentBy, type } = item

    const CURRENT_USER_ID = '1'

    const formattedTime = moment(timestamp).format('hh:mm a')

    const isReceived = sentBy === CURRENT_USER_ID

    const audioRecorderPlayer = new AudioRecorderPlayer()
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = async (uri: string) => {
        if (isPlaying) {
            await audioRecorderPlayer.stopPlayer();
            audioRecorderPlayer.removePlayBackListener();
            setIsPlaying(false);
        } else {
            try {
                await audioRecorderPlayer.startPlayer(uri);
                setIsPlaying(true);
                audioRecorderPlayer.addPlayBackListener((e: any) => {
                    if (e.current_position === e.duration) {
                        audioRecorderPlayer.stopPlayer();
                        audioRecorderPlayer.removePlayBackListener();
                        setIsPlaying(false);
                    }
                    return;
                });
            } catch (error) {
                console.error('Failed to play audio', error);
            }
        }
    };

    useEffect(() => {
        return () => {
            audioRecorderPlayer.stopPlayer();
            audioRecorderPlayer.removePlayBackListener();
        };
    }, []);
    const renderMessageContent = () => {
        switch (type) {
            case 'text':
                return <Label style={[styles.text, isReceived && styles.rightText]}>{text}</Label>;
            case 'image':
                return <Image source={{ uri: text }} style={styles.media} />;
            case 'video':
                return (
                    <Video
                        source={{ uri: text }}
                        style={styles.media}
                        resizeMode="cover"
                        controls={true}
                        paused={true}
                    />
                );
            case 'voice':
                return (
                    <AnyIcon
                        name={!isPlaying ? 'controller-play' : 'pause'}
                        color={COLOR.dark}
                        size={21}
                        type={!isPlaying ? ICONS.Entypo : ICONS.Ionicons}
                        onPress={() => togglePlayPause(text)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <View style={[styles.container, { flexDirection: isReceived ? 'row-reverse' : 'row' }]}>

            <Image source={isReceived ? IMAGES.Profile : IMAGES.USer} style={[styles.profileImage, { flexDirection: isReceived ? 'row-reverse' : 'row' }]} />

            <View style={styles.contentContainer}>

                <View style={[styles.messageContainer, !isReceived && styles.sender]}>
                    {renderMessageContent()}

                    <Label style={[styles.timeText, isReceived && styles.rightText]}>{formattedTime}</Label>
                </View>

            </View>

        </View>
    )
}

export default memo(MessageView)

const styles = StyleSheet.create({
    container: {
        marginVertical: hp(1),
        marginHorizontal: '5%',
    },
    profileImage: {
        height: hp(5.5),
        width: hp(5.5),
        borderRadius: hp(5.5),
    },
    contentContainer: {
        maxWidth: '75%',
        marginHorizontal: wp(2),
    },
    messageContainer: {
        minWidth: wp(17),
        borderRadius: hp(1),
        borderTopRightRadius: 0,
        paddingVertical: hp(1),
        marginTop: hp(2),
        paddingHorizontal: wp(2),
        backgroundColor: COLOR.lightgreen,
        paddingBottom: 0,
    },
    sender: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: hp(1),
        backgroundColor: COLOR.lightGrey,
    },
    text: {
        ...TEXT_STYLE.textMedium,
    },
    timeText: {
        ...TEXT_STYLE.smallText,
        fontSize: 9,
        color: COLOR.gray_06,
        marginTop: hp(0.2),
    },
    rightText: {
        textAlign: 'right',
    },
    media: {
        width: hp(25),
        height: hp(25),
        borderRadius: 12,
    }
})
