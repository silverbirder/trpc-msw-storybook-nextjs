import type { Meta, StoryObj } from '@storybook/react';

import { CreatePost } from './create-post';
import { trpcMsw } from '~/trpc/msw';

const meta = {
  title: 'create-post',
  component: CreatePost,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof CreatePost>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  parameters: {
    msw: {
      handlers: [
        trpcMsw.post.create.mutation(({name}) => {
          const post = { id: 1, name: name };
          return post;
        })
      ],
    },
  }
};

