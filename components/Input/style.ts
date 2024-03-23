import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -20,
    flexDirection: 'row',
    gap: 8
  },
  Input: {
    width: 280,
    height: 60,
    padding: 16,
    backgroundColor: "#262626",
    marginBottom: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: 'white'
  },
  Icon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E6F9F',
    padding: 18,
    borderRadius: 8,
    marginBottom: 16,
    height: 60,
    width: 60,
  }
});
