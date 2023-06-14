import indrajalaLogo from '~/assets/indrajalaLogo.png';
import React from 'react';

const PartnerSection = () => {
  return (
    <div className="mb-10">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-xl ">
          We Work With the Best  <span className="font-bold">Partner</span>
        </h2>
        <div className="flex items-center justify-center ">
          <a href={"https://indrajala.org.tw/"} target="_blank" rel="noreferrer">
          <img
            src={indrajalaLogo}
            alt="Partner 1"
            className="h-16 rounded-full border-2 border-gray-200 bg-gray-700 p-2 shadow-md"
            />
            </a>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;