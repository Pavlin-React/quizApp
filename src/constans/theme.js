import { Dimensions } from "react-native";
let { width, height } = Dimensions.get('window')

export let COLORS = {
  primary: '#4630eb',
  secondary: '#000020',
  success: '#00c851',
  error: '#ff4444',
  white: '#ffffff',
  background: '#f4f4f4',
  border: '#F5F5F7',
}

export let SIZE = {
  base: 10,
  width,
  height
}