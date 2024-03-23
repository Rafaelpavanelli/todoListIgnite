import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
    card: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 4,
        marginVertical: 12,
    },
    checkButton:{
        borderWidth: 1,
        borderRadius: 500,
        borderColor: 'blue',
        width: 20,
        height: 20,
        marginHorizontal: 10
    },
    todoText:{
        textAlign: 'left',
        width: 270,
        maxWidth: 270,
        color: '#E1E1E6'
    },
    todoTextComplete:{
        textAlign: 'left',
        width: 270,
        maxWidth: 270,
        color: '#323238',
        textDecorationLine: 'line-through'

    }
})