// @flow
/* eslint react/no-danger: 0 */

import React from 'react';

export default function FullPageDecorator(next: Function) {
  return <div className="mn">{next()}</div>;
}
