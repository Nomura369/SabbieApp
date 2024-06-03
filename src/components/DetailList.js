/*情緒細節清單的單個元件*/
import { Text, Pressable } from "@gluestack-ui/themed";
import { useTheme, useNavigation,  } from '@react-navigation/native';
//import { Pressable } from "react-native";

const DetailList = ({ detail, name }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    // 傳遞到下個 stack 導覽的物件
    const choice = { name, detail };

    // 會影響排版的變數
    const textColor = detail === "自定義" ? colors.character_sec : colors.character;
    let bgColor;
    
    switch(name){
        case "happy":
            bgColor = colors.bg_happy_dark;
            break;
        case "angry":
            bgColor = colors.bg_angry_dark;
            break;
        case "sad":
            bgColor = colors.bg_sad_dark;
            break;
        case "fear":
            bgColor = colors.bg_fear_dark;
            break;
        default:
            console.log("選項顏色無法正常顯示");
    }

    return (
        <Pressable 
            onPress={() => { navigation.navigate("Diary", choice) }}
            mx={8}
        >   
            <Text
                fontFamily="cjkFonts"
                color={textColor}
                fontSize={24}
                px={52} py={18}
                height={60}
                bg={bgColor}
                borderRadius={30}
                >{detail}</Text>
        </Pressable>
    );
};

export default DetailList;