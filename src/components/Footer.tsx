import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#252525] min-w-[200px] py-8 relative text-white font-body text-center">
      <div>
        <p className="text-white text-[22px] font-semibold">(주)글로브포인트</p>
      </div>
      <p
        className="text-white text-[16px] font-normal "
      >
        주소 : 경기도 고양시 덕양구 삼원로 83, 1111호 (10550)
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-6">
        <div className="flex items-center">
          <img src="/footer1.png" alt="Phone Icon" className="mr-2" />
          <span>031-911-0601</span>
        </div>
        <div className="flex items-center">
          <img src="/footer2.png" alt="Phone Icon" className="mr-2" />
          <span>031-922-0602</span>
        </div>
        <div className="flex items-center">
          <img src="/footer3.png" alt="Email Icon" className="mr-2" />
          <a
            href="mailto:gpsales@globepoint.co.kr"
            className="text-white hover:text-gray-300"
          >
            gpsales@globepoint.co.kr
          </a>
        </div>
      </div>

      <p className="copyrights text-[#999] text-[.9166666666666667em] font-bold mt-6">
        Copyright © 2024 Globepoint Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
