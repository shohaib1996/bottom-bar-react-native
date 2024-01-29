import { Tabs } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
// import Logo from '../../components/logo';
import { Image, StyleSheet, Text, View } from 'react-native';



export default function Layout() {

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "orange",
                tabBarInactiveBackgroundColor: "#b5e48c",
                tabBarStyle: {
                    height: 70,
                    borderWidth: 1,
                    backgroundColor: "#76c893"
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "bold",
                    marginBottom: 10,
                },

                headerRight: () => <DrawerToggleButton />,
                headerLeft: () => (
                    <Image
                        source={require("../../../assets/logo.png")}
                        style={{ width: 50, height: 50, marginLeft: 10 }}
                    />
                ),
                headerTitleAlign: 'center'
            }}

        >
            <Tabs.Screen
                name='home'
                options={{
                    title: "Home",
                    headerTitle: "",
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name="home"
                            size={24}
                            color={focused ? "orange" : "white"}
                            style={{
                                transform: focused ? [{ scale: 1.5 }] : [{ scale: 1 }]
                            }}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: "bold"
                    }
                }}
            />

            <Tabs.Screen
                name='list'
                options={{
                    title: "List",
                    headerTitle: "",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="document-text-sharp"
                            size={24}
                            color={focused ? "orange" : "white"}
                            style={{
                                transform: focused ? [{ scale: 1.5 }] : [{ scale: 1 }]
                            }}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: "bold"
                    }
                }}
            />
            <Tabs.Screen
                name='videos'
                options={{
                    title: "Videos",
                    headerTitle: "",
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="play-circle"
                            size={24}
                            color={focused ? "orange" : "white"}
                            style={{
                                transform: focused ? [{ scale: 1.5 }] : [{ scale: 1 }]
                            }}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: "bold"
                    }
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: "Profile",
                    headerTitle: "",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="people"
                            size={24}
                            color={focused ? "orange" : "white"}
                            style={{
                                transform: focused ? [{ scale: 1.5 }] : [{ scale: 1 }]
                            }}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: "bold"
                    }
                }}
            />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 80,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        marginTop: 10,
    },

});