import {
    View, Text, TouchableOpacity,
    StyleSheet, TextInput
} from 'react-native';

import { Link, router } from 'expo-router';

import Header from '../../components/Header';
import Button from '../../components/Button';

const handlePress = (): void => {
    // 会員登録
    router.push('/memo/list')
}

const SignUp = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} value='Email address' />
                <TextInput style={styles.input} value='Password' />
                <Button label='Submit' onPress={handlePress} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registerd?</Text>
                    <Link href='/auth/log_in' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log In</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}
TouchableOpacity
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f3ff',
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24
    },
    input: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#d946ef',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 16,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 16,
        lineHeight: 24,
        color: '#ec4899',
        fontWeight: 'bold'
    }
});

export default SignUp;