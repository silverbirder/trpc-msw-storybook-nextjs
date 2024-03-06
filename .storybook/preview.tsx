import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon';
import React from 'react';
import { TRPCReactProvider } from "../src/trpc/react";

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <TRPCReactProvider>
        <Story />
      </TRPCReactProvider>
    ),
  ],
};

export default preview;