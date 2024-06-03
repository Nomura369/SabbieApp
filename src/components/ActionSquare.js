import React from "react";

import {
  Box,
  Pressable,
  //Text,
  Image,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  //ActionsheetItemText,
  ActionsheetContent,
  HStack
} from "@gluestack-ui/themed";

//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import StickerBox from "./StickerBox";
import emotionData from "../json/emotions.json"

export default ({ choice }) => { // 物件，裡面有 name 和 detail 
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  const emotions = emotionData.data;
  
  const imgWidth = 108, imgHeight = 100;
  const itemWidth = 120, itemHeight = 120;
  let imgSrc;

  switch(choice.name){
      case "happy":
          imgSrc = emotions[0].img_detail
          break;
      case "angry":
          imgSrc = emotions[1].img_detail
          break;
      case "sad":
          imgSrc = emotions[2].img_detail
          break;
      case "fear":
          imgSrc = emotions[3].img_detail
          break;
      default:
          console.log("找不到對應的細節圖");
  }
  return (
    <Box>
      <Pressable onPress={handleClose}>
        <StickerBox choice={choice} emotions={emotions} />
      </Pressable>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="$72" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <HStack>
            <ActionsheetItem onPress={handleClose} width={itemWidth} height={itemHeight}>
              <Image alt="option1" width={imgWidth} height={imgHeight} source={{ uri: imgSrc[0] }} />
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose} width={itemWidth} height={itemHeight}>
              <Image alt="option2" width={imgWidth} height={imgHeight} source={{ uri: imgSrc[1] }} />
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose} width={itemWidth} height={itemHeight}>
              <Image alt="option3" width={imgWidth} height={imgHeight} source={{ uri: imgSrc[2] }} />
            </ActionsheetItem>
          </HStack>
          <HStack>
            <ActionsheetItem onPress={handleClose} width={itemWidth} height={itemHeight}>
              <Image alt="option4" width={imgWidth} height={imgHeight} source={{ uri: imgSrc[3] }} />
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose} width={itemWidth} height={itemHeight}>
              <Image alt="option5" width={imgWidth} height={imgHeight} source={{ uri: imgSrc[4] }} />
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose} width={itemWidth} height={itemHeight}>
              <Image alt="option6" width={imgWidth} height={imgHeight} source={{ uri: imgSrc[5] }} />
            </ActionsheetItem>
          </HStack>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};