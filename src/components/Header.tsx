import { View, Text, StyleSheet } from 'react-native'

const Header = (): JSX.Element => {
    return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerTitle}>Memo App</Text>
                <Text style={styles.headerRight}>Log Out</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ec4899',
        height: 104,
        justifyContent: 'flex-end',
    },
    headerInner: {
        alignItems: 'center',
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: 'rgba(255,255,255,0.8)',
        fontWeight: 'bold',
    },
    headerTitle: {
        marginBottom: 10,
        fontSize: 24,
        lineHeight: 36,
        fontWeight: 'bold',
        color: '#ffffff'
    },
})

export default Header;
