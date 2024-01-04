import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
    label: string
    onPress?: () => void
}

const Button = (props: Props): JSX.Element => {
    const { label, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ec4899',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24
    },
    buttonLabel: {
        fontSize: 18,
        lineHeight: 32,
        color: '#ffffff',
        paddingHorizontal: 24,
        paddingVertical: 8,
        fontWeight: 'bold'
    },
})

export default Button;
