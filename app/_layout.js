import { Stack } from 'expo-router';
import { StyleSheet} from 'react-native';



export default function Layout() {
    return (

            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name='(tabs)' />
                <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            </Stack>

    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     header: {
//         height: 80,
//         backgroundColor: 'white',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         padding: 15,
//         marginTop: 10,
//     },

// });