import { KeyboardAvoidingView, FlatList, StyleSheet, View, Alert } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { COLOR, commonStyles, hp, wp } from '../../enums/StyleGuide';
import { AnyIcon, Indicator, Input } from '../../components';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import Header from '../../components/Header';
import MessageView from '../../components/MessageView';
import { ICONS } from '../../assests/icons';
import { launchImageLibrary } from 'react-native-image-picker';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions'

const dummyChats = [
    { type: 'text', text: "Testing", timestamp: 1645743000000, sentBy: '2' },
    { type: 'text', text: "Testing", timestamp: 1645757100000, sentBy: '2' },
    { type: 'text', text: "Testing", timestamp: 1645743000000, sentBy: '2' },
];

const ChatScreen = (props: any) => {
    const { navigation } = props;
    const flatListRef = useRef<FlatList<any>>(null);
    const [text, setText] = useState('');
    const [messages, setMessages] = useState(dummyChats);
    const [loading, setLoading] = useState({ image: false, video: false, voice: false });
    const [isRecording, setIsRecording] = useState(false);
    const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current;
    const [currentAudio, setCurrentAudio] = useState<string | null>(null)
    
    const addNewMessage = (type: string, content: string) => {
        if (content) {
            const formattedMessage = {
                type,
                text: content,
                sentBy: '1',
                timestamp: Date.now(),
            };

            setMessages((prev: any) => [...prev, formattedMessage]);
            setText('');
        }
    };

    const handleImagePick = () => {
        setLoading({ ...loading, image: true });
        launchImageLibrary({ mediaType: 'photo' }, (response: any) => {
            setLoading({ ...loading, image: false });
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else {
                const source = { uri: response.assets[0].uri };
                addNewMessage('image', source.uri);
            }
        });
    };

    const handleVideoPick = () => {
        setLoading({ ...loading, video: true });
        launchImageLibrary({ mediaType: 'video' }, (response: any) => {
            setLoading({ ...loading, video: false });
            if (response.didCancel) {
                console.log('User cancelled video picker');
            } else if (response.errorMessage) {
                console.log('VideoPicker Error: ', response.errorMessage);
            } else {
                const source = { uri: response.assets[0].uri };
                addNewMessage('video', source.uri);
            }
        });
    };

    const requestMicrophonePermission = async () => {
        const result = await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
        if (result !== RESULTS.GRANTED) {
            Alert.alert('Permission Denied', 'Microphone permission is required to record audio.');
            return false;
        }
        return true;
    };

    const startRecording = async () => {
        const hasPermission = await requestMicrophonePermission();
        if (!hasPermission) return;

        setIsRecording(true);
        try {
            await audioRecorderPlayer.startRecorder();
            audioRecorderPlayer.addRecordBackListener((e) => {
            });
        } catch (error) {
            setIsRecording(false);
            console.error('Failed to start recording', error);
            Alert.alert('Error', 'Failed to start recording.');
        }
    };

    const stopRecording = async () => {
        setIsRecording(false);
        try {
            const result = await audioRecorderPlayer.stopRecorder();
            audioRecorderPlayer.removeRecordBackListener();
            addNewMessage('voice', result);
        } catch (error) {
            console.error('Failed to stop recording', error);
            Alert.alert('Error', 'Failed to stop recording.');
        }
    };

    useEffect(() => {
        if (messages.length >= 1) {
            if (flatListRef?.current?.scrollToEnd) {
                setTimeout(() => {
                    flatListRef.current?.scrollToEnd({ animated: true });
                }, 500);
            }
        }
    }, [messages?.length]);

    return (
        <View style={commonStyles.mainContainer}>

            <Header
                title={'Test Chat'}
                onPress={() => navigation.goBack()} />

            <KeyboardAwareFlatList
                bounces={false}
                data={messages}
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <MessageView item={item} />}
            />

            <Input
                value={text}
                onChange={setText}
                style={styles.inputContainer}
                onSubmitEditing={() => addNewMessage('text', text)}
                textStyle={styles.inputStyle}
                placeholder={'Message'}
                addRight={
                    <View style={{ flexDirection: 'row', width: wp(30), justifyContent: 'space-between' }}>
                        {loading.image ? (
                            <Indicator />
                        ) : (
                            <AnyIcon
                                name={'image'}
                                color={COLOR.dark}
                                size={21}
                                type={ICONS.Entypo}
                                onPress={handleImagePick}
                            />
                        )}
                        {loading.video ? (
                            <Indicator />
                        ) : (
                            <AnyIcon
                                name={'video-camera'}
                                color={COLOR.dark}
                                size={21}
                                type={ICONS.Entypo}
                                onPress={handleVideoPick}
                            />
                        )}
                        {isRecording ? (
                            <AnyIcon
                                name={'controller-stop'}
                                color={COLOR.red}
                                size={21}
                                type={ICONS.Entypo}
                                onPress={stopRecording}
                            />
                        ) : (
                            <AnyIcon
                                name={'mic'}
                                color={COLOR.dark}
                                size={21}
                                type={ICONS.Entypo}
                                onPress={startRecording}
                            />
                        )}
                    </View>
                }
            />

        </View>
    );
}

export default ChatScreen;

const styles = StyleSheet.create({
    inputContainer: {
        height: hp(6),
        borderRadius: hp(5),
        elevation: 0,
        marginBottom: hp(1),
    },
    inputStyle: {
        marginBottom: -3,
    },
});
