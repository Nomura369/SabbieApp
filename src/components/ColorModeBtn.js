import { Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectcolorScheme, togglecolorScheme } from "../redux/colorModeSlice";
import { Sun, Moon } from "../icons";

const ColorModeBtn = ({ size }) => {
  const colorScheme = useSelector(selectcolorScheme);
  const dispatch = useDispatch();

  // const toggleColorScheme = () => {
  //   const nextColorScheme = colorScheme === 'light' ? 'dark' : 'light';
  //   Appearance.setColorScheme(nextColorScheme); // 這部分是網頁專用辦法
  //   console.log(colorScheme);
  // };

  return (
    <Pressable onPress={() => dispatch(togglecolorScheme())}>
      {colorScheme === 'light' ? (
        <Sun color='#515151' size={size} />
      ) : (
        <Moon color='#F5F5F5' size={size} />
      )
      }
    </Pressable>
  )
}

export default ColorModeBtn;

