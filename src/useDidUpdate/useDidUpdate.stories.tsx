import * as React from 'react';

import useDidUpdate from './useDidUpdate';

export default {
  title: 'React Lifecycle Hooks / useDidUpdate',
};

export const componentDidUpdate = () => {
  const [value, setValue] = React.useState(0);

  useDidUpdate(() => {
    console.log('component updated');
  });

  const addButtonClickHandler = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const subtractButtonClickHandler = () => {
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col w-6/12 space-y-5">
        <div></div>
        <div className="rounded shadow-md p-3 flex flex-row content-center space-x-3">
          <div className="flex flex-row items-center">value: {value}</div>
          <div className="flex flex-row space-x-1">
            <button
              className="border rounded my-1 py-1 px-3"
              onClick={addButtonClickHandler}
            >
              {' '}
              +{' '}
            </button>
            <button
              className="border rounded my-1 py-1 px-3"
              onClick={subtractButtonClickHandler}
            >
              {' '}
              -{' '}
            </button>
          </div>
        </div>
        <div></div>
        <div>check the Actions tab output</div>
      </div>
    </div>
  );
};

export const valueDidUpdate = () => {
  const inputRef = React.useRef<HTMLInputElement>();
  const [message, setMessage] = React.useState('');
  const [value, setValue] = React.useState(0);

  useDidUpdate(() => {
    console.log('message updated');
  }, [message]);

  useDidUpdate(() => {
    console.log('value updated');
  }, [value]);

  const updateClickHandler = () => {
    const { current: input } = inputRef;
    if (input && input.value) {
      setMessage(input.value);
      input.value = '';
    }
  };

  const addButtonClickHandler = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const subtractButtonClickHandler = () => {
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col w-6/12 space-y-5">
        <div></div>
        <div className="rounded shadow-md p-3 flex flex-col content-center space-y-3">
          <div className="flex flex-row items-center space-x-3">
            <span>define the message:</span>
            <input
              ref={inputRef}
              type="text"
              placeholder="please define any"
              className="border rounded m-1 p-1"
            />
            <button
              className="border rounded my-1 py-1 px-3"
              onClick={updateClickHandler}
            >
              update
            </button>
          </div>
          <div className="flex flex-row items-center">
            {`the message: ${message}`}
          </div>
        </div>
        <div></div>
        <div className="rounded shadow-md p-3 flex flex-row content-center space-x-3">
          <div className="flex flex-row items-center">value: {value}</div>
          <div className="flex flex-row space-x-1">
            <button
              className="border rounded my-1 py-1 px-3"
              onClick={addButtonClickHandler}
            >
              {' '}
              +{' '}
            </button>
            <button
              className="border rounded my-1 py-1 px-3"
              onClick={subtractButtonClickHandler}
            >
              {' '}
              -{' '}
            </button>
          </div>
        </div>
        <div></div>
        <div>check the Actions tab output</div>
      </div>
    </div>
  );
};
