import React from 'react'

import Login from './authscreens/login/Login';


const Startscree = () => {
    let Stack=createStackNavigator()
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen component={Login} name='login'/>
          </Stack.Navigator>
      </NavigationContainer>
   
  )
}

export default Startscree