import { StyleSheet } from "react-native";

export const style  = StyleSheet.create({
    Container: {
        flex: 1
    },
    counters:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25
    },
    count1: {
        color:'#4EA8DE',
        fontFamily: 'Inter_400Regular'
    },
    count2: {
        color:'#8284FA',
        fontFamily: 'Inter_400Regular'
    },
    countNumber: {
        fontSize: 12,
        fontFamily: 'Inter_400Regular',
        borderRadius: 100,
        color: 'white',
    },
    divider:{
        height: 1,
        backgroundColor: '#333333',
        marginHorizontal: 22,
        marginVertical: 20
    }
})