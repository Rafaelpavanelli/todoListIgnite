import { Text, View } from "react-native";
import { styles } from "./style";
import { StatusBar } from "expo-status-bar";

import Rocket from '../../assets/rocket.svg'

export default function Header(){
    return(
        <View style={styles.container}>
            <Rocket width={35} height={46}/>
            <Text style={styles.text1}>To</Text>
            <Text style={styles.text2}>do</Text>
            <StatusBar style="light"/>
        </View>
    )
}