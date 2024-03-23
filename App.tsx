import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { View } from "react-native";
import Header from "./components/Header";
import { TodoListContextProvider } from "./context/todoListContext";
import Input from "./components/Input";
import TodoList from "./components/Todos";
export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <TodoListContextProvider>
      <View style={{ backgroundColor: "#1A1A1A", flex: 1 }}>
        <Header />
        <Input />
        <TodoList />
      </View>
    </TodoListContextProvider>
  );
}
