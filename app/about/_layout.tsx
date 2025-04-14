import React from 'react';
import { Stack } from 'expo-router';
import { Text } from 'react-native'; // Import Text component

const RootLayout = () => {
  return ( // Ensure the JSX is returned
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
      
          header: () => (
            <Text>Hello</Text> // Use Text component for valid JSX
          )
        }}
      />
    </Stack>
  );
};

export default RootLayout