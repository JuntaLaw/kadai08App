import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#ec4899'
        },
        headerTintColor: '#ffffff',
        headerTitle: 'Memo App',
        headerBackTitle: 'Back',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
        }
    }} />
}

export default Layout