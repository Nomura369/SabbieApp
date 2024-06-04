import { Center, VStack, Text } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';

import EmotionList from "../components/EmotionList";


const Question1Screen = ({ navigation }) => {
    const { colors } = useTheme();
    return (
        <Center flex={1} bg={colors.bg}>
            <VStack>
                <Text color={colors.character1} fontSize={30} fontFamily="cjkFonts">Hi！你今天感覺如何？</Text>
                <EmotionList />
            </VStack>
        </Center>
    );
};

export default Question1Screen;