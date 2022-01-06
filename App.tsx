import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Appbar, Button } from "react-native-paper";
import Planner from './src/Planner';
import theme from './src/design/Themes';

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
				<Text>testing up App.tsx to start working on your app!</Text>
			</View>
			<Appbar style={styles.bottom}>
				<Appbar.Action icon="calendar" onPress={() => console.log('Pressed planner')} />
				<Appbar.Action icon="food-apple" onPress={() => console.log('Pressed diary')} />
				<Appbar.Action icon="basket" onPress={() => console.log('Pressed groceries')} />
				<Appbar.Action icon="account" onPress={() => console.log('Pressed user')} />
			</Appbar>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	bottom: {
	  position: 'absolute',
	  justifyContent: 'space-evenly',
	  left: 0,
	  right: 0,
	  bottom: 0,
	},
});
