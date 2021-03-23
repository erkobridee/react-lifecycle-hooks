// https://react-svgr.com/docs/jest/
import * as React from 'react';

const SvgrMock = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} {...props} />
));

export const ReactComponent = SvgrMock;

export default 'SvgrURL';
