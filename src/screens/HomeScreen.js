import React, { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { View, StyleSheet, Image, Text } from "react-native";
import { ScrollView, VStack } from "@gluestack-ui/themed";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function HomeScreen({ navigation }) {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const SegmentedContent = () => {
        // <View style={styles.header}>
        //   <Pressable onPress={() => navigation.toggleDrawer()}>
        //     <Image 
        //       source={{uri: 'https://github.com/joyce0129/BookApp_wk3/blob/main/img/icon.png?raw=true'}}
        //       style={{width: 20, height: 20, margin: 20}}
        //     />
        //    </Pressable>

        // </View>

        if (selectedIndex == 1) { // 按日排序
            return (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack alignItems="center">
                        <Text style={{ fontSize: 18, marginTop: 20, fontFamily: "cjkFonts", color: "#515151" }}>2024年3月17日 星期日</Text>
                        {/*卡片日記元件*/}
                        <View style={styles.containerStyle}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name="pencil-outline" color="#515151" size={24} />
                                <MaterialCommunityIcons name="trash-can" color="#515151" size={24} />
                            </View>
                            <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{ uri: 'https://i.imgur.com/2Fgs3eP.png' }}
                                />
                                <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 10, fontFamily: "cjkFonts", color: "#515151" }}>滿足</Text>
                            </View>
                            <View style={styles.wordContainer}>
                                <Text style={{ fontSize: 15, fontFamily: "cjkFonts", color: "#515151" }}>今天吃到了夢寐以求的豆花加珍珠，好開心!</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 18, marginTop: 20, fontFamily: "cjkFonts", color: "#515151" }}>2024年3月18日 星期一</Text>
                        {/*卡片日記元件*/}
                        <View style={styles.containerStyle}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name="pencil-outline" color="#515151" size={24} />
                                <MaterialCommunityIcons name="trash-can" color="#515151" size={24} />
                            </View>
                            <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri: "https://i.imgur.com/ov1GABB.png"
                                    }}
                                />
                                <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 10, fontFamily: "cjkFonts", color: "#515151" }}>不安</Text>
                            </View>
                            <View style={styles.wordContainer}>
                                <Text style={{ fontSize: 15, fontFamily: "cjkFonts", color: "#515151" }}>要期中考了好緊張...</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 18, marginTop: 20, fontFamily: "cjkFonts", color: "#515151" }}>2024年4月26日 星期五</Text>
                        {/*卡片日記元件*/}
                        <View style={styles.containerStyle}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name="pencil-outline" color="#515151" size={24} />
                                <MaterialCommunityIcons name="trash-can" color="#515151" size={24} />
                            </View>
                            <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri: "https://i.imgur.com/1fX4Fxj.png"
                                    }}
                                />
                                <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 10, fontFamily: "cjkFonts", color: "#515151" }}>失望</Text>
                            </View>
                            <View style={styles.wordContainer}>
                                <Text style={{ fontSize: 15, fontFamily: "cjkFonts", color: "#515151" }}>期中考考差了...</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 18, marginTop: 20, fontFamily: "cjkFonts", color: "#515151" }}>2024年5月17日 星期五</Text>
                        {/*卡片日記元件*/}
                        <View style={styles.containerStyle}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name="pencil-outline" color="#515151" size={24} />
                                <MaterialCommunityIcons name="trash-can" color="#515151" size={24} />
                            </View>
                            <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri: "https://i.imgur.com/gGU7q3G.png"
                                    }}
                                />
                                <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 10, fontFamily: "cjkFonts", color: "#515151" }}>震怒</Text>
                            </View>
                            <View style={styles.wordContainer}>
                                <Text style={{ fontSize: 15, fontFamily: "cjkFonts", color: "#515151" }}>捷運上有人推我!</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 18, marginTop: 20, fontFamily: "cjkFonts", color: "#515151" }}>2024年6月3日 星期一</Text>
                        {/*卡片日記元件*/}
                        <View style={styles.containerStyle}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name="pencil-outline" color="#515151" size={24} />
                                <MaterialCommunityIcons name="trash-can" color="#515151" size={24} />
                            </View>
                            <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri: "https://i.imgur.com/0tMzo5S.png"
                                    }}
                                />
                                <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 10, fontFamily: "cjkFonts", color: "#515151" }}>疲累</Text>
                            </View>
                            <View style={styles.wordContainer}>
                                <Text style={{ fontSize: 15, fontFamily: "cjkFonts", color: "#515151" }}>SIM卡卡進手機裡了。</Text>
                            </View>
                        </View>
                    </VStack>
                </ScrollView>
            )
        } else { // 按月排序
            return (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack alignItems="center">
                        <Text style={{ fontSize: 18, marginTop: 20, fontFamily: "cjkFonts", color: "#515151" }}>2024年3月</Text>
                        {/*卡片日記元件*/}
                        <View style={styles.containerStyle}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name="pencil-outline" color="#515151" size={24} />
                                <Text style={{ fontSize: 18, fontFamily: "cjkFonts", color: "#515151" }}>17日</Text>
                                <MaterialCommunityIcons name="trash-can" color="#515151" size={24} />
                            </View>
                            <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri: "https://i.imgur.com/2Fgs3eP.png"
                                    }}
                                />
                                <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 10, fontFamily: "cjkFonts", color: "#515151" }}>滿足</Text>
                            </View>
                            <View style={styles.wordContainer}>
                                <Text style={{ fontSize: 15, fontFamily: "cjkFonts", color: "#515151" }}>今天吃到了夢寐以求的豆花加珍珠，好開心!</Text>
                            </View>
                        </View>
                        {/*卡片日記元件*/}
                        <View style={styles.containerStyle}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name="pencil-outline" color="#515151" size={24} />
                                <Text style={{ fontSize: 18, fontFamily: "cjkFonts", color: "#515151" }}>18日</Text>
                                <MaterialCommunityIcons name="trash-can" color="#515151" size={24} />
                            </View>
                            <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri: "https://i.imgur.com/ov1GABB.png"
                                    }}
                                />
                                <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 10, fontFamily: "cjkFonts", color: "#515151" }}>不安</Text>
                            </View>
                            <View style={styles.wordContainer}>
                                <Text style={{ fontSize: 15, fontFamily: "cjkFonts", color: "#515151" }}>要期中考了好緊張...</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 18, marginTop: 20, fontFamily: "cjkFonts", color: "#515151" }}>2024年4月</Text>
                        {/*卡片日記元件*/}
                        <View style={styles.containerStyle}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name="pencil-outline" color="#515151" size={24} />
                                <Text style={{ fontSize: 18, fontFamily: "cjkFonts", color: "#515151" }}>26日</Text>
                                <MaterialCommunityIcons name="trash-can" color="#515151" size={24} />
                            </View>
                            <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri: "https://i.imgur.com/1fX4Fxj.png"
                                    }}
                                />
                                <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 10, fontFamily: "cjkFonts", color: "#515151" }}>失望</Text>
                            </View>
                            <View style={styles.wordContainer}>
                                <Text style={{ fontSize: 15, fontFamily: "cjkFonts", color: "#515151" }}>期中考考差了...</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 18, marginTop: 20, fontFamily: "cjkFonts", color: "#515151" }}>2024年5月</Text>
                        {/*卡片日記元件*/}
                        <View style={styles.containerStyle}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name="pencil-outline" color="#515151" size={24} />
                                <Text style={{ fontSize: 18, fontFamily: "cjkFonts", color: "#515151" }}>17日</Text>
                                <MaterialCommunityIcons name="trash-can" color="#515151" size={24} />
                            </View>
                            <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri: "https://i.imgur.com/gGU7q3G.png"
                                    }}
                                />
                                <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 10, fontFamily: "cjkFonts", color: "#515151" }}>震怒</Text>
                            </View>
                            <View style={styles.wordContainer}>
                                <Text style={{ fontSize: 15, fontFamily: "cjkFonts", color: "#515151" }}>捷運上有人推我!</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 18, marginTop: 20, fontFamily: "cjkFonts", color: "#515151" }}>2024年6月</Text>
                        {/*卡片日記元件*/}
                        <View style={styles.containerStyle}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons name="pencil-outline" color="#515151" size={24} />
                                <Text style={{ fontSize: 18, fontFamily: "cjkFonts", color: "#515151" }}>3日</Text>
                                <MaterialCommunityIcons name="trash-can" color="#515151" size={24} />
                            </View>
                            <View style={styles.emoContainer}>
                                <Image
                                    style={styles.emopic}
                                    source={{
                                        uri: "https://i.imgur.com/0tMzo5S.png"
                                    }}
                                />
                                <Text style={{ fontSize: 24, marginTop: 10, marginLeft: 10, fontFamily: "cjkFonts", color: "#515151" }}>疲累</Text>
                            </View>
                            <View style={styles.wordContainer}>
                                <Text style={{ fontSize: 15, fontFamily: "cjkFonts", color: "#515151" }}>SIM卡卡進手機裡了。</Text>
                            </View>
                        </View>
                    </VStack>
                </ScrollView>
            )
        }
    }
    return (
        <View style={{ flex: 1, marginTop: 10 }}>
            <SegmentedControlTab
                values={["按月排序", "按日排序"]}
                activeTabStyle={{
                    backgroundColor: "white",
                    marginTop: 50,
                    borderColor: "lightgray",
                }}
                tabStyle={{
                    backgroundColor: "lightgray",
                    marginTop: 50,
                    borderColor: "lightgray",
                }}
                firstTabStyle={{ marginLeft: 50 }}
                lastTabStyle={{ marginRight: 50 }}
                tabTextStyle={{ fontSize: 16, padding: 5, color: "white" }}
                activeTabTextStyle={{ color: "#515151" }}
                selectedIndex={selectedIndex}
                onTabPress={(index) => setSelectedIndex(index)}
            />
            <SegmentedContent />
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderColor: "#B7E5C0",
        borderWidth: 2,
        borderRadius: 10,
        width: 310,
        marginTop: 15,
        marginBottom: 15,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 20,
        width: 260,

    },
    icon: {
        width: 15,
        height: 15
    },
    emoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    emopic: {
        height: 59,
        width: 80
    },
    wordContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },
    header: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: '#ffff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

}
)