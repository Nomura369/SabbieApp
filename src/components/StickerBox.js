/*DiaryScreen裡的表情區*/
import { Text, Center, Image } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';

const ImageSource = ({ choice, emotions }) => {
    const name = choice.name;
    const detail = choice.detail;

    let imgIndex, imgSrc;

    switch(name){
        case "happy":
            imgIndex = (emotions[0].detail).indexOf(detail);
            imgSrc = emotions[0].img_detail[imgIndex]
            break;
        case "angry":
            imgIndex = (emotions[1].detail).indexOf(detail);
            imgSrc = emotions[1].img_detail[imgIndex]
            break;
        case "sad":
            imgIndex = (emotions[2].detail).indexOf(detail);
            imgSrc = emotions[2].img_detail[imgIndex]
            break;
        case "fear":
            imgIndex = (emotions[3].detail).indexOf(detail);
            imgSrc = emotions[3].img_detail[imgIndex]
            break;
        default:
            console.log("找不到對應的細節圖");
    }

    return (
        <Image width={162} height={150} source={{ uri: imgSrc }} alt="expression" />
    );
}

const TextSource = () => {
    const { colors } = useTheme();

    return (
        <Text fontSize={18} color={colors.character_sec}>請選擇...</Text>
    );
}


const StickerBox = ({ choice, emotions }) => { 
    const { colors } = useTheme();
    const name = choice.name;
    const detail = choice.detail;
    let bgColor, renderContent;

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
            console.log("無法設定背景色");
    }

    renderContent = detail === "自定義" ? 
        <TextSource choice={choice} /> : <ImageSource choice={choice} emotions={emotions}/>;

    return (
        <Center width={162} height={150} bg={bgColor} borderRadius={30}>
            {renderContent}
        </Center>
    );
};

export default StickerBox;