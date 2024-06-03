/*統整表情的元件*/
import { Image, VStack, Text, HStack, Center } from "@gluestack-ui/themed";
import { useTheme, useNavigation } from '@react-navigation/native';
import { Pressable } from "react-native";

import emotionData from "../json/emotions.json";

const EmotionList = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    let emotions = emotionData.data;

    const w = 115, h = 115;

    return (
        <Center>
            <HStack mt={54}>
                <VStack alignItems="center" mr={40}>
                    <Text fontFamily="cjkFonts" color={colors.character} fontSize={20} mb={8}>喜悅</Text>
                    <Pressable onPress={ () => {navigation.navigate("Q2", emotions[0].name)} }> 
                        <Image
                            width={w}
                            height={h}
                            source={{ uri: emotions[0].img }} 
                            alt={emotions[0].name}
                        />
                    </Pressable>
                </VStack>
                <VStack alignItems="center">
                    <Text fontFamily="cjkFonts" color={colors.character} fontSize={20} mb={10}>憤怒</Text>
                    <Pressable onPress={ () => {navigation.navigate("Q2", emotions[1].name)} }>
                        <Image
                            width={w}
                            height={h}
                            source={{ uri: emotions[1].img }} 
                            alt={emotions[1].name}
                        />
                    </Pressable>
                </VStack>
            </HStack>

            <HStack mt={23}>
                <VStack alignItems="center" mr={40}>
                    <Text fontFamily="cjkFonts" color={colors.character} fontSize={20} mb={8}>哀傷</Text>
                    <Pressable onPress={ () => {navigation.navigate("Q2", emotions[2].name)} }>
                        <Image
                            width={w}
                            height={h}
                            source={{ uri: emotions[2].img }} 
                            alt={emotions[2].name}
                        />
                    </Pressable>
                </VStack>
                <VStack alignItems="center">
                    <Text fontFamily="cjkFonts" color={colors.character} fontSize={20} mb={8}>恐懼</Text>
                    <Pressable onPress={ () => {navigation.navigate("Q2", emotions[3].name)} }>
                        <Image
                            width={w}
                            height={h}
                            source={{ uri: emotions[3].img }} 
                            alt={emotions[3].name}
                        />
                    </Pressable>
                </VStack>
            </HStack>
        </Center>
    );
};

export default EmotionList;