import { TextInputProps,TextInput, View,  TouchableOpacity } from "react-native"
import { useState } from "react"
import { style } from "./style"
import Plus from './../../assets/plus.svg'
import { useTodo } from "../../hooks/useTodoList"

export default function Input({...props}:TextInputProps){
    const[todo,setTodo]=useState<string>('');
    const {addTodo} = useTodo();
    function saveTodo(){
        if(todo !== ''){
            addTodo(todo);
            setTodo('')
        }
    }
    return(
        <View style={style.Container}>
        <TextInput  value={todo} style={style.Input} {...props} cursorColor={'blue'} placeholder="Adicione uma nova tarefa" placeholderTextColor={'gray'} onChangeText={(e)=>setTodo(e)}/>
        <TouchableOpacity style={style.Icon} onPress={saveTodo}>
            <Plus width={20} height={20} />
        </TouchableOpacity >
        </View>
    )
}