# @erkobridee/react-lifecycle-hooks

According to [A Complete Guide to useEffect | Overreacted](https://overreacted.io/a-complete-guide-to-useeffect/)

> Keep in mind that the mental model for effects is different from componentDidMount and other lifecycles, and trying to find their exact equivalents may confuse you more than help

So, to keep peace of mind and manage any function component lifecycle, follow the equivalents hooks to the cases: `useConstructor`, `useDidMount`, `useDidUpdate` and `useWillUnmount`, plus `useForceRender`

⚠️&nbsp;&nbsp;**WARNING:** this library requires a peer dependency of the react.js [v16.8.0](https://github.com/facebook/react/releases/tag/v16.8.0) or newer

<!--
## Install

```
npm install --save @erkobridee/react-lifecycle-hooks
```

## API

-->

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
