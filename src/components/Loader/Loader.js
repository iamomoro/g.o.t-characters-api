import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => (
  <div className="flex justify-center align-middle items-center w-full">
    <TailSpin color="grey" />
  </div>
);

export default Loader;
