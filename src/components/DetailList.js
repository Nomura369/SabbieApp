/*情緒細節清單的單個元件*/
import { Text } from "@gluestack-ui/themed";
import { useTheme, useNavigation } from '@react-navigation/native';
import { Pressable } from "react-native";

const DetailList = ({ detail, name }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    // 會影響排版的變數
    const textColor = detail === "自定義" ? colors.character_sec : colors.character;

    // 傳遞到下個 stack 導覽的物件
    const choice = {name, detail};

    return (
        <Pressable onPress={ () => {navigation.navigate("Diary", choice)} }>
            <Text 
                fontFamily="cjkFonts"
                color={textColor} 
                fontSize={24} 
                px={52} py={12} mx={8}
                bg={colors.bg_normal} 
                borderRadius={30}>{detail}</Text>
        </Pressable>
    );
};

export default DetailList;