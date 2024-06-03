import { Center, Text, Image, VStack, FlatList } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';
import { Dimensions } from 'react-native';

import emotionData from "../json/emotions.json";
import DetailList from "../components/DetailList";

const Question2Screen = ({ route }) => {
    const { colors } = useTheme();

    const name = route.params; // 從 Q1 傳來的情緒名稱
    const windowHeight = Dimensions.get('window').height; // 裝置的高
    const marginY = (windowHeight - 504.5) / 2; // 504.5 為元件的約略總高度
    
    let emotions = emotionData.data;

    // 會影響排版的變數
    let bgColor, detail, imgSrc;
    const w = 240, h = 240;
    
    switch(name){
        case "happy":
            bgColor = colors.bg_happy_dark;
            detail = emotions[0].detail;
            imgSrc = emotions[0].img;
            break;
        case "angry":
            bgColor = colors.bg_angry_dark;
            detail = emotions[1].detail;
            imgSrc = emotions[1].img;
            break;
        case "sad":
            bgColor = colors.bg_sad_dark;
            detail = emotions[2].detail;
            imgSrc = emotions[2].img;
            break;
        case "fear":
            bgColor = colors.bg_fear_dark;
            detail = emotions[3].detail;
            imgSrc = emotions[3].img;
            break;
        default:
            console.log("Q1 到 Q2 的資料未正確傳輸");
    }

    return (
        <Center flex={1} bg={bgColor}>
            <VStack mt={marginY}>
                <VStack alignItems="center">
                    <Image 
                        width={w}
                        height={h}
                        source={{ uri: imgSrc }}
                        alt={name}
                    />
                    <Text 
                        fontFamily="cjkFonts"
                        lineHeight={40}
                        color={colors.character} 
                        fontSize={30} 
                        mx={47} mt={25} mb={40}>哪個詞彙更能形容你的感受？</Text>
                </VStack>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={detail}
                    renderItem={ ({ item }) =>  <DetailList detail={item} name={name} /> }
                    keyExtractor={ (item, index) => item + index }
                    mb={marginY}
                />
            </VStack>
        </Center>
    );
};

export default Question2Screen;