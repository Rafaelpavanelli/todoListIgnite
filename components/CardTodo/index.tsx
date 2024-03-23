import { View, Text, Image, TouchableOpacity } from "react-native";
import Trash from "./../../assets/trash.svg";
import Success from "./../../assets/successIcon.svg";
import { style } from "./style";
import { useTodo } from "../../hooks/useTodoList";
type Todo = {
  id: number;
  Todo: string;
  status: boolean;
};

type Props = {
  todo: Todo;
};
export default function TodoListCard({ todo }: Props) {
  const { toggleStatus,removeTodo } = useTodo();
  return (
    <View style={style.card}>
      <TouchableOpacity onPress={()=>toggleStatus(todo.id)}>
        <View style={style.checkButton}>
          {!todo.status ? "" : <Success width={20} height={20} />}
        </View>
      </TouchableOpacity>
      <Text style={!todo.status?style.todoText: style.todoTextComplete}>{todo.Todo}</Text>
      <Trash width={20} height={20} onPress={()=>removeTodo(todo.id)}/>
    </View>
  );
}
