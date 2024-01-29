import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem, DrawerToggleButton } from '@react-navigation/drawer';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


const CustomDrawerContent = (props) => {
    const pathname = usePathname();

    useEffect(() => {
        console.log(pathname);
    }, [pathname]);
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.userInfoWrapper}>
                <Image
                    source={{ uri: "https://i.ibb.co/42Jp7pN/Screenshot-2024-01-29-182723.png" }}
                    width={80}
                    height={80}
                    style={styles.userImg}
                />
                <View style={styles.userDetailsWrapper}>
                    <Text style={styles.userName}>Dr. Eng. Shimul</Text>
                    <Text style={styles.userEmail}>facebook.com/shimul186</Text>
                </View>
            </View>
            <DrawerItem
                label={"Home"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/home" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/home" ? "#aacc00" : "#fff" }}
                icon={() => (
                    <Entypo
                        name="home"
                        size={24}
                        color={pathname == "/home" ? "#fff" : "#000"}
                    />)}

                onPress={() => {
                    router.push("/(drawer)/(tabs)/home");
                }}

            >

            </DrawerItem>
            <DrawerItem
                label={"Profile"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/profile" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/profile" ? "#aacc00" : "#fff" }}
                icon={() => (<Ionicons
                    name="people" size={24}
                    color={pathname == "/profile" ? "#fff" : "#000"} />)}
                onPress={() => {
                    router.push("/(drawer)/(tabs)/profile");
                }}
            >

            </DrawerItem>
            <DrawerItem
                label={"Settings"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/settings" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/settings" ? "#aacc00" : "#fff" }}
                icon={() => (<Ionicons name="settings" size={24} color={pathname == "/settings" ? "#fff" : "#000"} />)}
                onPress={() => {
                    router.push("/settings");
                }}
            >

            </DrawerItem>
            <DrawerItem
                label={"Favourites"}
                labelStyle={[
                    styles.navItemLabel,
                    { color: pathname == "/favourites" ? "#fff" : "#000" },
                ]}
                style={{ backgroundColor: pathname == "/favourites" ? "#aacc00" : "#fff" }}
                icon={() => (<MaterialIcons name="favorite" size={24} color={pathname == "/favourites" ? "#fff" : "#000"} />)}
                onPress={() => {
                    router.push("/favourites");
                }}

            >

            </DrawerItem>

        </DrawerContentScrollView>
    )
}

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }} >
            <Drawer   drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{ headerShown: false }}>
               <Drawer.Screen
                    name="(tabs)"
                    options={{
                        headerTitle: "Favourites",
                        headerShown: true,
                        drawerPosition: "right",
                        headerShown:false,
                        headerRight: () => <DrawerToggleButton />,
                        headerLeft: () => (
                            <Image
                                source={require("../../assets/logo.png")}
                                style={{ width: 50, height: 50, marginLeft: 10 }}
                            />
                        ),
                        headerTitleAlign: 'center'
                    }} />
               {/*   <Drawer.Screen
                    name="settings"
                    options={{
                        headerShown: true,
                        headerTitle: "Settings",
                        drawerPosition: "right",
                        headerRight: () => <DrawerToggleButton />,
                        headerLeft: () => (
                            <Image
                                source={require("../../assets/logo.png")}
                                style={{ width: 50, height: 50, marginLeft: 10 }}
                            />
                        ),
                        headerTitleAlign: 'center'
                    }} /> */}
            </Drawer>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    navItemLabel: {
        marginLeft: -20,
        fontSize: 18,
    },
    userInfoWrapper: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    userImg: {
        borderRadius: 40,
    },
    userDetailsWrapper: {
        marginTop: 25,
        marginLeft: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 16,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    }
});