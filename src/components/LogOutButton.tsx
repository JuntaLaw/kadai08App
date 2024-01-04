import { TouchableOpacity, Text, StyleSheet } from "react-native";

const LogutButton = (): JSX.Element => {
    return (
        <TouchableOpacity>
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
