import React from 'react';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false, // Hide the header for the tabs layout
        }}
      />
    </Stack>
  );
};

export default RootLayout;