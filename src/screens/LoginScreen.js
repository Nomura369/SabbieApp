// 因為不是包在 navigation 之下所以不能用 useTheme 取得顏色
import { useState } from "react"
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
    ButtonText,
    HStack,
    Center,
    Pressable,
} from "@gluestack-ui/themed";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
    Easing,
} from 'react-native-reanimated';
import { StyleSheet } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { gotoRegister, loginAsync } from "../redux/accountSlice"
import { selectcolorScheme } from "../redux/colorModeSlice";

const AnimatedButton = Animated.createAnimatedComponent(Button);

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [loginRequest, setLoginRequest] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    // 色彩模式相關
    const colorScheme = useSelector(selectcolorScheme);
    const textColorScheme = colorScheme === "light" ? "#515151" : "#F5F5F5";

    // 按鈕的載入動畫
    const rotation = useSharedValue(0);
    const btnWidth = useSharedValue("100%");
    const animatedSpinnerStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateZ: `${rotation.value}deg`,
                },
            ],
        };
    }, [rotation.value]);

    const animatedButtonStyles = useAnimatedStyle(() => {
        return {
            width: btnWidth.value,
        };
    }, [btnWidth.value]);

    const onPressButton = () => {
        dispatch(loginAsync({ email, password }))
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

    const goToRegister = () => {
        dispatch(gotoRegister())
    }

    return (
        <Center 
            w="100%" flex={1}
            bg={colorScheme === "light" ? "#F5F5F5" : "#1D1D1D"}    
        >
            <Box p={2} py={8} w="90%" maxW={290}>
                <VStack alignItems="center" mb={4}>
                    <Text fontFamily="cjkFonts" fontSize={35} color={textColorScheme}>登入</Text>
                </VStack>
                <VStack space={3} mt={15}>
                    <FormControl mb={17}>
                        <FormControlLabel>
                            <FormControlLabelText
                                fontFamily="cjkFonts"
                                fontSize={20}
                                color={textColorScheme}
                            >Email</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                type="email"
                                value={email}
                                onChangeText={email => setEmail(email)}
                            />
                        </Input>
                    </FormControl>
                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabelText
                                fontFamily="cjkFonts"
                                fontSize={20}
                                color={textColorScheme}
                            >密碼</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                type="password"
                                value={password}
                                onChangeText={password => setPassword(password)}
                            />
                        </Input>
                    </FormControl>
                    <AnimatedButton
                        // 使用預設色彩
                        mt={20} h={50} w="100%" mx="auto"
                        borderRadius={5}
                        style={animatedButtonStyles}
                        onPress={onPressButton}
                    >
                        {
                            loginRequest
                                ? <Animated.View style={[styles.spinner, animatedSpinnerStyles]} />
                                : <ButtonText fontFamily="cjkFonts" fontSize={20} color="#F5F5F5">登入</ButtonText>
                        }
                    </AnimatedButton>
                    <HStack mt={20} justifyContent="center" alignItems="center">
                        <Text fontFamily="cjkFonts" fontSize={16} color={textColorScheme}>
                            我是新來的。{" "}
                        </Text>
                        <Pressable onPress={goToRegister}>
                            <Text
                                underline="true"
                                color={textColorScheme}
                                fontFamily="cjkFonts"
                                fontSize={16}
                            >註冊</Text>
                        </Pressable>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

const styles = StyleSheet.create({
    //    buttonStyle: {
    //       color: "white",
    //       backgroundColor: 'black',
    //       textAlign: 'center',
    //       paddingVertical: 10,
    //       width: '100%',
    //       borderRadius: 200,
    //    },
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

export default LoginScreen;