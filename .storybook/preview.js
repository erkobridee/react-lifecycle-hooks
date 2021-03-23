import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

import './tailwind.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { hideNoControlsWarning: true, disable: true },
};

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
