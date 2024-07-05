"use client";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/icare_main.mp4" type="video/mp4" />
        </video>
      </div>
      <main className="relative z-10">
      <div className="main-banner-header-wrap pt-[10rem] pb-[10rem] px-8 md:px-16 lg:px-32">
          <div className="main-banner-title text-4xl font-bold text-[#FFFFFF] text-[63px] font-extrabold leading-[1.2] break-words text-center">
            <label>Medical</label> <label>Reality,</label> <label>MRWARE</label>
          </div>
          <div className="main-banner-desc mt-6 text-[#FFFFFF] text-[29px] font-medium leading-[1.2] break-words text-center ">
            <p className="mt-10">의료 실습 플랫폼 MRWARE에서</p>
            <p className="mt-5">
              실습부터 실습결과 관리까지, 언제 어디서든 만나 보세요.
            </p>
            <p className="mt-5">
              의료 실습 교육의 새로운 패러다임을 제시합니다.
            </p>
          </div>
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-0 justify-items-center items-center">
          <div className="main-banner-nav-list mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8 max-w-[1024px] mx-auto">
            <a href="/nursing-skill" className="block flex group">
              <div className="bg-white p-10 flex rounded-lg cursor-pointer w-full h-full flex-col group-hover:bg-[#FF535D] group-hover:text-white transition duration-300 transform group-hover:scale-105 shadow-[0_10px_15px_rgba(28,28,28,0.5)] hover:shadow-[0_15px_25px_rgba(28,28,28,0.5)]">
                <p className="text-[#FF535D] cursor-pointer text-[24px] font-[600] font-['Noto Sans'] leading-[24px] text-center group-hover:text-white">
                  핵심간호술기
                </p>
                <img
                  src="/nursingskill.png"
                  alt="nursing skill"
                  className="w-[169.14px] h-[158px] mx-auto mt-4"
                />
                <div className="mt-auto flex justify-end">
                  <img
                    src="/mrarrow.png"
                    alt="arrow"
                    className="w-8 h-8 group-hover:content-['url(/mrarrowhover.png)']"
                  />
                </div>
              </div>
            </a>
            <a href="/nursingskill" className="block flex group">
              <div className="bg-white p-10 flex rounded-lg cursor-pointer w-full h-full flex-col group-hover:bg-[#1BC768] group-hover:text-white transition duration-300 transform group-hover:scale-105 shadow-[0_10px_15px_rgba(28,28,28,0.5)] hover:shadow-[0_15px_25px_rgba(28,28,28,0.5)]">
                <p className="text-[#1BC768] cursor-pointer text-[24px] font-[600] font-['Noto Sans'] leading-[24px] text-center group-hover:text-[#FFFFFF]">
                  물리치료
                </p>
                <img
                  src="/mr.png"
                  alt="nursing skill"
                  className="w-[169.14px] h-[158px] mx-auto mt-4"
                />
                <div className="mt-auto flex justify-end">
                  <img
                    src="/mrarrow.png"
                    alt="arrow"
                    className="w-8 h-8 group-hover:content-['url(/mrarrowhover.png)']"
                  />
                </div>
              </div>
            </a>
            <a href="/" className="block flex group">
              <div className="bg-white p-10 flex rounded-lg cursor-pointer w-full h-full flex-col group-hover:bg-[#39D0FF] group-hover:text-white transition duration-300 transform group-hover:scale-105 shadow-[0_10px_15px_rgba(28,28,28,0.5)] hover:shadow-[0_15px_25px_rgba(28,28,28,0.5)]">
                <p className="text-[#39D0FF] cursor-pointer text-[24px] font-[600] font-['Noto Sans'] leading-[24px] text-center group-hover:text-[#FFFFFF]">
                  요양보호
                </p>
                <img
                  src="/health.png"
                  alt="nursing skill"
                  className="w-[159.14px] h-[173px] mx-auto mt-4"
                />
                <div className="mt-auto flex justify-end">
                  <img
                    src="/mrarrow.png"
                    alt="arrow"
                    className="w-8 h-8 group-hover:content-['url(/mrarrowhover.png)']"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
