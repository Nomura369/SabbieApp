import { Center, VStack, Text } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';

import EmotionList from "../components/EmotionList"

const Question1Screen = ({ navigation }) => {
    const { colors } = useTheme(); // 該 Hooks 函數由<NavigationContainer>傳遞，得寫在函式裡
    return (
        <Center flex={1} bg={colors.bg_normal}>
            <VStack>
                <Text color={colors.character} fontSize={30} fontFamily="cjkFonts">Hi！你今天感覺如何？</Text>
                <EmotionList />
            </VStack>
        </Center>
    );
};

export default Question1Screen;