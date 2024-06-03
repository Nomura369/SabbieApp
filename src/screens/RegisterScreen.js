import { useTheme } from '@react-navigation/native';
import { useState } from "react";

import {
    Box,
    Text,
    VStack,
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    Input,
    InputField,
    Button,
    HStack,
    Center,
    useColorMode,
    ScrollView,
} from "@gluestack-ui/themed";
import { Pressable, StyleSheet, Dimensions } from "react-native";

import { useDispatch } from "react-redux";
import { gotoLogin, registerAsync } from "../redux/accountSlice"
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
    Easing
} from 'react-native-reanimated';

import ColorModeBtn from '../components/ColorModeBtn';

const AnimatedButton = Animated.createAnimatedComponent(Pressable);

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const [loginRequest, setLoginRequest] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const colorMode = useColorMode();

    const { colors } = useTheme();
    const windowWidth = Dimensions.get('window').width; // 裝置的寬
    const textInputWidth = windowWidth - 50 * 2;

    const rotation = useSharedValue(0);
    const btnWidth = useSharedValue("100%");
    
    
    const animatedSpinnerStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateZ: `${rotation.value}deg`,
                }
            ]
        };
    }, [rotation.value]
    );

    const animatedButtonStyles = useAnimatedStyle(() => {
        return {
            width: btnWidth.value,
        };
    }, [btnWidth.value]
    );

    const onPressButton = () => {
        dispatch(registerAsync({ name, email, password }))
        setLoginRequest(!loginRequest);
        if (loginRequest) {
            rotation.value = withTiming(0, {
                duration: 1000,
                easing: Easing.linear,
            });
            btnWidth.value = withTiming('100%', {
                duration: 400,
                easing: Easing.linear,
            });
        } else {
            rotation.value = withRepeat(
                withTiming(360, {
                    duration: 1000,
                    easing: Easing.linear,
                }),
                -1
            );
            btnWidth.value = withTiming("15", {
                duration: 300,
                easing: Easing.linear,
            });
        }
    }

    const goToLogin = () => {
        dispatch(gotoLogin())
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Center
                _dark={{ bg: colors.character1 }}
                _light={{ bg: colors.bg }}
            >
                <Box
                    style={{
                        position: 'absolute',
                        top: 25,
                        left: "90%"
                    }}
                >
                    <ColorModeBtn size={30} />
                </Box>
                <Text mt={20} fontSize={20} fontFamily="cjkFonts" color={colors.character1}>歡迎你的加入！</Text>
                <VStack mt={52} mb={73}>
                    <FormControl //姓名欄位
                        isRequired
                        bg={colors.primary3}
                        borderColor={colors.primary3}
                        borderRadius={10}
                        width={textInputWidth}
                        mb={36}

                        fontFamily="cjkFonts"
                        fontSize={20}
                        color={colors.character1}
                    >
                        <FormControlLabel>
                            <FormControlLabelText>姓名</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                value={name}
                                onChangeText={text => setName(text)}
                            />
                        </Input>
                    </FormControl>
                    <FormControl //email欄位
                        isRequired
                        bg={colors.primary3}
                        borderColor={colors.primary3}
                        borderRadius={10}
                        width={textInputWidth}
                        mb={36}

                        fontFamily="cjkFonts"
                        fontSize={20}
                        color={colors.character1}
                    >
                        <FormControlLabel>
                            <FormControlLabelText>Email</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                type="email"
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />
                        </Input>
                    </FormControl>
                    <FormControl //密碼欄位
                        isRequired
                        bg={colors.primary3}
                        borderColor={colors.primary3}
                        borderRadius={10}
                        width={textInputWidth}
                        mb={50}

                        fontFamily="cjkFonts"
                        fontSize={20}
                        color={colors.character1}
                    >
                        <FormControlLabel>
                            <FormControlLabelText fontFamily="cjkFonts">密碼</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                type="password"
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                        </Input>
                    </FormControl>
                    <AnimatedButton
                        bg={colors.primary3}
                        borderColor={colors.primary3}
                        borderRadius={loginRequest ? 30 : null}
                        h="10" w="100%" mx="auto"
                        height={loginRequest ? 10 : null}

                        style={animatedButtonStyles}
                        onPress={onPressButton}
                    >
                        {
                            loginRequest
                                ? <Animated.View style={[styles.spinner, animatedSpinnerStyles]} />
                                : <Text mt={5} fontSize={20} fontFamily="cjkFonts" color={colors.character1}>註冊</Text>
                        }
                    </AnimatedButton>
                    <HStack mt={8} justifyContent="center" alignItems="center">
                        <Text 
                            fontSize={18} 
                            fontFamily="cjkFonts"
                            color={colors.character1} 
                            _dark={{
                                color: colors.bg
                            }}
                        >
                            我已經有帳戶了。{" "}
                        </Text>
                        <Pressable onPress={goToLogin}>
                            <Text
                                underline="true"
                                fontFamily="cjkFonts"
                                color={colorMode == 'dark' ? colors.bg : colors.character}
                                fontSize={18}
                            >登入</Text>
                        </Pressable>
                    </HStack>
                </VStack>
            </Center>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    // buttonStyle: {
    //     color: 'white',
    //     backgroundColor: 'black',
    //     textAlign: 'center',
    //     paddingVertical: 10,
    //     width: '100%',
    //     borderRadius: 200,
    // },
    spinner: {
        height: 20,
        width: 20,
        borderRadius: 30,
        borderWidth: 4,
        borderTopColor: '#f5f5f5',
        borderRightColor: '#f5f5f5',
        borderBottomColor: 'lightblue',
        borderLeftColor: 'lightblue',
    },
})

export default RegisterScreen;