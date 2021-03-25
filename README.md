[![Actions Status](https://github.com/erkobridee/react-lifecycle-hooks/workflows/CI%20-%20build%20and%20publish/badge.svg)](https://github.com/erkobridee/react-lifecycle-hooks/) [![codecov](https://codecov.io/gh/erkobridee/react-lifecycle-hooks/branch/main/graph/badge.svg)](https://codecov.io/gh/erkobridee/react-lifecycle-hooks) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://erkobridee.github.io/react-lifecycle-hooks)

# react lifecycle hooks

According to [A Complete Guide to useEffect | Overreacted](https://overreacted.io/a-complete-guide-to-useeffect/)

> Keep in mind that the mental model for effects is different from componentDidMount and other lifecycles, and trying to find their exact equivalents may confuse you more than help

So, to keep peace of mind and manage any function component lifecycle, follow the equivalents hooks to the cases: `useConstructor`, `useDidMount`, `useDidUpdate` and `useWillUnmount`, plus `useForceRender`

👋&nbsp;&nbsp;**IMPORTANT:** this library requires a peer dependency of the react.js [v16.8.0](https://github.com/facebook/react/releases/tag/v16.8.0) or newer

## Install

```
npm install --save @erkobridee/react-lifecycle-hooks
```

if you are using on a TypeScript, you'll need to install

```
npm install --save-dev @erkobridee/ts-definitions-common
```

## API

### useConstructor

```javascript
import { useConstructor } from '@erkobridee/react-lifecycle-hooks';

// or

import useConstructor from '@erkobridee/react-lifecycle-hooks/useConstructor';

//---

export const Component = () => {
  useConstructor(() => console.log(`executes before mount the component`));

  return <div>Component</div>;
};

export default Component;
```

### useDidMount

```javascript
import { useDidMount } from '@erkobridee/react-lifecycle-hooks';

// or

import useDidMount from '@erkobridee/react-lifecycle-hooks/useDidMount';

//---

export const Component = () => {
  useDidMount(() => console.log(`executes after component mounted`));

  return <div>Component</div>;
};

export default Component;
```

### useDidUpdate

```javascript
import React from 'react';

import { useDidUpdate } from '@erkobridee/react-lifecycle-hooks';

// or

import useDidUpdate from '@erkobridee/react-lifecycle-hooks/useDidUpdate';

//---

export const Component = () => {
  const [count, setCount] = React.useState(0);

  useDidUpdate(() => console.log(`executes whenever the component updates`));

  useDidUpdate(() => console.log(`count value updated to ${count}`), [count]);

  const resetClickHandler = () => setCount(0);

  const addClickHandler = () => setCount((prevValue) => prevValue + 1);

  const subtractClickhandler = () => setCount((prevValue) => prevValue - 1);

  return (
    <div>
      <div>Component</div>
      <div>count: {count}</div>
      <div>
        <button onClick={resetClickHandler}>reset</button>
        <button onClick={addClickHandler}>add</button>
        <button onClick={subtractClickhandler}>subtract</button>
      </div>
    </div>
  );
};

export default Component;
```

### useWillUnmount

```javascript
import React from 'react';

import { useWillUnmount } from '@erkobridee/react-lifecycle-hooks';

// or

import useWillUnmount from '@erkobridee/react-lifecycle-hooks/useDidUpdate';

//---

const InnerComponent = () => {
  useWillUnmount(() => console.log(`executes before unmount the component`));

  return <div>Inner Component</div>;
};

const Component = () => {
  const [show, setShow] = React.useState(true);

  const removeClickHandler = () => setShow(false);

  return (
    <div>
      <div>Component</div>
      {show && (
        <div>
          <button onClick={removeClickHandler}>remove</button>
          <InnerComponent />
        </div>
      )}
    </div>
  );
};

export default Component;
```

### useForceRender

```javascript
import React from 'react';

import { useForceRender } from '@erkobridee/react-lifecycle-hooks';

// or

import useForceRender from '@erkobridee/react-lifecycle-hooks/useForceRender';

//---

export const Component = () => {
  const forceRender = useForceRender();

  const forceRenderClickHandler = () => forceRender();

  React.useEffect(() => {
    console.log(`component render`);
  });

  return (
    <div>
      <div>Component</div>
      <div>
        <button click={forceRenderClickHandler}>force render</button>
      </div>
    </div>
  );
};

export default Component;
```

## Useful references

- React.js Docs

  - [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

  - [The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

  - [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

- NPM peerDependencies

  - [What are peer dependencies in a Node module? | @flaviocopes](https://flaviocopes.com/npm-peer-dependencies/)

  - [Peer Dependencies | Node.js Blog](https://nodejs.org/en/blog/npm/peer-dependencies/)

- [Jest](https://jestjs.io/)

  - [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)

  - [@testing-library/react-hooks](https://react-hooks-testing-library.com/)

  - [Using Jest and RTL with React and TypeScript | Building SPAs](https://www.carlrippon.com/using-jest-and-rtl-with-react-typescript/) - 2021/02/10

    - [[GitHub] carlrip/react-typescript-jest-webpack](https://github.com/carlrip/react-typescript-jest-webpack)

- [Storybook](https://storybook.js.org/)

  - `npx -p @storybook/cli sb init --type react`

  - [TypeScript support](https://storybook.js.org/docs/react/configure/typescript)

  - [[GitHub] storybookjs/addon-postcss](https://github.com/storybookjs/addon-postcss)

  - [Creating Your Next Project using Next.js, Typescript, Tailwind and Storybook | by Igor Lide - Medium](https://medium.com/shard-labs/storybook-tailwind-next-js-with-typescript-5a2486f905ec) - 2021/02/05

    - [[GitHub] igor-lid/nextjs-typescript-storybook-tailwind-example](https://github.com/igor-lid/nextjs-typescript-storybook-tailwind-example)

- [TailwindCSS](https://tailwindcss.com/)

- [rollup.js](https://rollupjs.org/guide/en/)
