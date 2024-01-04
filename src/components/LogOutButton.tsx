import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../config";
import { router } from "expo-router";

const handlePress = (): void => {
    signOut(auth)
        .then(() => {
            router.replace('/auth/log_in')
        })
        .catch(() => {
            Alert.alert('ログアウトに失敗しました')
        })
}

const LogutButton = (): JSX.Element => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>Log out</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.7)'
    }

})

export default LogutButton;
