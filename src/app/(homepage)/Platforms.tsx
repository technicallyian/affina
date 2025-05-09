'use client';

import Spinner from './components/Spinner';

const Platforms = () => {
  return (
    <>
      <div className="h-[100vh]">
        <div className="grid grid-cols-2 h-full overflow-hidden">
          <div>sdfg</div>
          <div>
            <Spinner />
          </div>
        </div>
      </div>

      <div className="w-full">
        <img src="/bgShape.svg" className="w-full" />
      </div>
    </>
  );
};

export default Platforms; 