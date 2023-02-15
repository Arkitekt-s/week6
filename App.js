
import SecondPage from "./pages/SecondPage";
import FirstPage from "./pages/FirstPage";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

  const myStack = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="firstPage" component={FirstPage} options={{ title: "Welcome to app" }} />
            {<Stack.Screen name="secondPage" component={SecondPage} options={{ title: "week6" }} />}
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
export default myStack;