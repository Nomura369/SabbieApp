import { Text, VStack, KeyboardAvoidingView, ScrollView, HStack } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';
import { Dimensions, Platform, TextInput } from 'react-native';

import ActionSquare from "../components/ActionSquare";
import BottomBar from "../components/BottomBar";

const DiaryScreen = ({ route }) => {
    const { colors } = useTheme(); 

    const choice = route.params; // 物件，裡面有 name 和 detail 

    const windowWidth = Dimensions.get('window').width; // 裝置的高
    const textAreaWidth = windowWidth - 55 * 2;

    // 文字顏色設定
    const textColor = choice.detail === "自定義" ? colors.character2 : colors.character1;
    
    // 背景色設定
    let bgColor;
    switch(choice.name){
        case "happy":
            bgColor = colors.bg_happy_light;
            break;
        case "angry":
            bgColor = colors.bg_angry_light;
            break;
        case "sad":
            bgColor = colors.bg_sad_light;
            break;
        case "fear":
            bgColor = colors.bg_fear_light;
            break;
        default:
            console.log("無法設定日記頁面的背景色");
    }

    // 日期設定
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let week;
    switch(d.getDay()){
        case 0:
            week = "日";
            break;
        case 1:
            week = "一";
            break;
        case 2:
            week = "二";
            break;
        case 3:
            week = "三";
            break;
        case 4:
            week = "四";
            break;
        case 5:
            week = "五";
            break;
        case 6:
            week = "六";
            break;
        default:
            console.log("今天星期幾？");
    }
    const date = year + "年" + month + "月" + day + "日 星期" + week; //今日日期


    return (
        <KeyboardAvoidingView
                keyboardVerticalOffset={Platform.select({ ios: 0, android: -500 })}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                flex={1}
                bg={bgColor}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack alignItems="center">
                        <Text fontFamily="cjkFonts" color={colors.character1} fontSize={18} mt={60} mb={5}>{date}</Text>
                        <ActionSquare choice={choice} />
                        <Text fontFamily="cjkFonts" color={textColor} fontSize={24} mt={5} mb={20}>{choice.detail}</Text>
                        <TextInput
                            width={textAreaWidth}
                            placeholder="從開始這裡輸入吧。"
                            multiline={true}
                            textAlignVertical="top" //統一 iOS 和 Android 的對齊方式
                            fontSize={20}
                            color={colors.character1}
                            style={{ fontFamily: "cjkFonts" }}
                        />
                    </VStack>
                </ScrollView>
                <BottomBar choice={choice} />
        </KeyboardAvoidingView>
    );
};

export default DiaryScreen;