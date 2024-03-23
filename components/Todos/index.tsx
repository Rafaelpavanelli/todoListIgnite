import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import { useTodo } from "../../hooks/useTodoList";
import TodoListCard from "../CardTodo";
import { style } from "./style";
type Todo = {
  id: number;
  Todo: string;
  status: boolean;
};
export default function TodoList() {
  const { todoList } = useTodo();

  return (
    <View>
      <View style={style.counters}>
        <Text style={style.count1}>
          Criadas <Text style={style.countNumber}>{todoList.length}</Text>
        </Text>
        <Text style={style.count2}>
          Concluidas <Text style={style.countNumber}>{todoList.filter((item)=>item.status === true).length}</Text>{" "}
        </Text>
      </View>
      <View style={style.divider}></View>
      <FlatList
        data={todoList}
        keyExtractor={(item, index) => String(index)}
        renderItem={(item) => <TodoListCard todo={item.item} />}
        ListEmptyComponent={() => (
          <View
            style={{ justifyContent: "center", alignItems: "center", gap: 12 }}
          >
            <Image
              source={require("./../../assets/Clipboard.png")}
              width={20}
              height={20}
            />
            <View>
              <Text style={{ color: "#808080", fontFamily: "Inter_700Bold" }}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={{ color: "#808080" }}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
