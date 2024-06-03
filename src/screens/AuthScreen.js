import { Box, Center } from "@gluestack-ui/themed";
import { useEffect } from "react";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
} from 'react-native-reanimated';

import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import { selectLogin } from "../redux/accountSlice";
import { useSelector } from "react-redux";
import { selectcolorScheme } from "../redux/colorModeSlice";

import ColorModeBtn from "../components/ColorModeBtn";

const AnimatedBox = Animated.createAnimatedComponent(Box);

const AuthScreen = () => {
    const colorScheme = useSelector(selectcolorScheme);
    const loginPosition = useSharedValue('0%');
    const registerPosition = useSharedValue('100%');
    const login = useSelector(selectLogin);

    const loginStyle = useAnimatedStyle(() => {
        return { left: loginPosition.value }
    }, [loginPosition.value]);

    const registerStyle = useAnimatedStyle(() => {
        return { left: registerPosition.value }
    }, [registerPosition.value]);

    useEffect(() => {
        if (login.hasAccount) {
            loginPosition.value = withTiming("0%", {
                duration: 2000,
                easing: Easing.out(Easing.exp),
            });
            registerPosition.value = withTiming("100%", {
                duration: 1000,
                easing: Easing.out(Easing.exp),
            });
        } else {
            loginPosition.value = withTiming("100%", {
                duration: 1000,
                easing: Easing.out(Easing.exp),
            });
            registerPosition.value = withTiming("0%", {
                duration: 2000,
                easing: Easing.out(Easing.exp),
            });
        }
    }, [login])

    return (
        <Center
            flex={1}
            bg={colorScheme === "light" ? "#F5F5F5" : "#1D1D1D"}
        >
            <Box
                style={{
                    position: 'absolute',
                    top: 25,
                    left: "87%"
                }}
            >
                <ColorModeBtn size={30} />
            </Box>
            <AnimatedBox
                w="100%" flex={1}
                position="absolute" style={loginStyle}
            >
                <LoginScreen /></AnimatedBox>
            <AnimatedBox
                w="100%" flex={1}
                position="absolute"
                style={registerStyle}
            >
                <RegisterScreen /></AnimatedBox>
        </Center>
    );
};

export default AuthScreen;