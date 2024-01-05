import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import Icon from './Icon';
import { type Memo } from '../../types/memo';

interface Props {
    memo: Memo
}

const MemoListItem = (props: Props): JSX.Element | null => {
    const { memo } = props
    const { bodyText, updatedAt } = memo
    if (bodyText === null || updatedAt === null) { return null }
    const dataString = updatedAt.toDate().toLocaleString('ja-jp')
    return (
        <Link href='/memo/detail' asChild>
            <TouchableOpacity style={styles.memoListItem}>
                <View>
                    <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
                    <Text style={styles.memoListDate}>{dataString}</Text>
                </View>
                <TouchableOpacity>
                    <Icon name='delete' size={32} color='#9ca3af' />
                </TouchableOpacity>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: '#f9fafb',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.25)',
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListDate: {
        fontSize: 14,
        lineHeight: 16,
        color: '#848484',
    }
})

export default MemoListItem;