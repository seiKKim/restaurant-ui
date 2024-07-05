"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const page = () => {
  return (
    <div className="NursingSkillBanner">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
          // backgroundSize: "1920px 798.61px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <div className="main-banner-title text-4xl font-bold text-[#FFFFFF] text-[63px] font-extrabold leading-[1.2] break-words text-center">
            물리치료
          </div>
          <div className="text-2xl mt-8 mb-8 font-medium text-center text-[34.2px] leading-[44.46px] font-['Noto Sans KR']">
            실감형 실습 교육 콘텐츠 및 관리 시스템
          </div>

          <div className="flex flex-col mt-60 md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center">
            <button className="px-6 py-3 bg-[#1BC768] hover:bg-[#1BB768] rounded-full w-[250px] h-[60px] transition-colors duration-300">
              웹에서 실행하기
            </button>
            <button className="px-6 py-3 bg-[#5D5DF9] hover:bg-[#5D5DF0] rounded-full w-[250px] h-[60px] transition-colors duration-300">
              매뉴얼 다운로드
            </button>
          </div>
        </div>
      </div>

      <div className="nursing-skill-intro-wrap bg-[#F8F8FF]">
        {/* 첫번째 */}
        <div className="first flex justify-center items-center py-40 flex-col sm:flex-row ">
          <div className="contents-1 w-[300px] h-[300px] top-[1050.22px] left-[470px] rounded-[20px] bg-[#FFFFFF] mb-6 sm:mr-6 mt-10">
            <div className="first-icon flex justify-center items-center h-[10px] ">
              <img
                src="/first-icon-1.png"
                alt="9"
                className="w-[130px] h-[130px]"
              />
            </div>
            <div className="first-title mt-20">
              <p className="font-['Noto Sans KR'] font-[700] text-[22px] leading-[31.86px] text-center">
                Student
              </p>
            </div>
            <div className="first-text mt-4">
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                언제 어디서나 실습을
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                할 수 있어서 좋아요.
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                필요한 주제를 반복해서
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                할 수 있어 좋아요.
              </p>
            </div>
          </div>
          <div className="contents-2 w-[300px] h-[300px] top-[1050.22px] left-[470px] rounded-[20px] bg-[#FFFFFF] mb-6 sm:mr-6 mt-10">
            <div className="first-icon flex justify-center items-center h-[10px]">
              <img
                src="/first-icon-2.png"
                alt="9"
                className="w-[130px] h-[130px]"
              />
            </div>
            <div className="first-title mt-20">
              <p className="font-['Noto Sans KR'] font-[700] text-[22px] leading-[31.86px] text-center">
                Professor
              </p>
            </div>
            <div className="first-text mt-4">
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                학생들별 학습 및 습득
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                현황 파악과 피드백이
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                가능해서 좋네요.
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                핵심간호술기의 점수화
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                및 관리가 가능해요.
              </p>
            </div>
          </div>
          <div className="contents-2 w-[300px] h-[300px] top-[1050.22px] left-[470px] rounded-[20px] bg-[#FFFFFF] mb-6 sm:mr-6 mt-10">
            <div className="first-icon flex justify-center items-center h-[10px]">
              <img
                src="/first-icon-3.png"
                alt="9"
                className="w-[130px] h-[130px]"
              />
            </div>
            <div className="first-title mt-20">
              <p className="font-['Noto Sans KR'] font-[700] text-[22px] leading-[31.86px] text-center">
                School
              </p>
            </div>
            <div className="first-text mt-4">
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                부족했던 전용 실습실
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                문제가 해결되었어요.
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                학생들에게 새로운 실습
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
                환경을 제공할 수 있어요.
              </p>
            </div>
          </div>
        </div>
        {/* 두번째 */}
        <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#E4E4F8]">
          <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
            <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
              가상현실(VR)을 통한 물리치료 실습 콘텐츠
            </h1>
            <div className="nursing-skill-desc mt-8 text-center">
              <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2f2f2f]">
                물리치료는 360VR 기반의 실감형 실습교육 플랫폼입니다.
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2f2f2f]">
                20개 주제의 실습 콘텐츠와 실습 현황 결과를 확인할 수 있습니다.
              </p>
            </div>
            <div className="w-full max-w-[1024px] h-auto mt-10 rounded-[20px] bg-[#FFFFFF] flex justify-center items-center flex-col">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                  bulletElement: "button",
                  bulletClass:
                    "swiper-pagination-bullet w-[12px] h-[12px] bg-[#D9D9D9] rounded-full mr-2",
                  bulletActiveClass:
                    "swiper-pagination-bullet-active bg-[#7C7C7C]",
                }}
                className="w-full h-full mt-4"
              >
                <SwiperSlide className="flex justify-center">
                  <img
                    src="/image1.png"
                    alt="Image 1"
                    className="w-full h-auto max-w-[980px] max-h-[551.76px] rounded-[20px] ml-5"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                  <img
                    src="/image2.png"
                    alt="Image 2"
                    className="w-full h-auto max-w-[980px] max-h-[551.76px] rounded-[20px] ml-5"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                  <img
                    src="/image3.png"
                    alt="Image 3"
                    className="w-full h-auto max-w-[980px] max-h-[551.76px] rounded-[20px] ml-5"
                  />
                </SwiperSlide>
              </Swiper>
              <div className="w-full flex justify-center items-center mt-4">
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="flex justify-center items-center mt-20">
              <div className="w-[124.15px] h-[42.79px] rounded-[100px] flex justify-center items-center bg-[#5D5DF9]">
                <p className="font-['Noto Sans KR'] font-[400] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                  실재감
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2F2F2F] mt-6">
                실사 촬영을 통한 실재감 향상
              </p>
            </div>
          </div>
        </div>
        {/* 세번째 */}
        <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#F8F8FF]">
          <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
            <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
              효율적인 실습
            </h1>
            <div className="nursing-skill-desc mt-8 text-center">
              <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2f2f2f]">
                물리치료 특수검사 20종에 대하여 다양한 유형의 문제 제공
              </p>
            </div>
            <div className="w-full max-w-[1420px] mt-10 rounded-[20px] bg-[#FFFFFF] flex justify-center items-center flex-col p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                  <div className="w-full h-[208px] rounded-[20px]">
                    <img
                      src="/box1.png"
                      alt="Image 1"
                      className="w-full h-full rounded-[20px]"
                    />
                  </div>
                  <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#5D5DF9] bg-[#E4E4F8] flex justify-center items-center">
                    <p className="font-['Noto Sans KR'] font-[500] text-[22px] leading-[31.86px] text-center text-[#2F2F2F]">
                      주제 선택
                    </p>
                  </div>
                </div>
                <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                  <div className="w-full h-[208px] rounded-[20px]">
                    <img
                      src="/box2.png"
                      alt="Image 4"
                      className="w-full h-full rounded-[20px]"
                    />
                  </div>
                  <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#5D5DF9] bg-[#E4E4F8] flex justify-center items-center">
                    <div className="nursing-skill-desc text-center">
                      <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2f2f2f]">
                        VR을 통한 설명
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                  <div className="w-full h-[208px] rounded-[20px]">
                    <img
                      src="/box3.png"
                      alt="Image 1"
                      className="w-full h-full rounded-[20px]"
                    />
                  </div>
                  <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#5D5DF9] bg-[#E4E4F8] flex justify-center items-center">
                    <p className="font-['Noto Sans KR'] font-[500] text-[22px] leading-[31.86px] text-center text-[#2F2F2F]">
                      맞춤형 문항
                    </p>
                  </div>
                </div>
                <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                  <div className="w-full h-[208px] rounded-[20px]">
                    <img
                      src="/box4.png"
                      alt="Image 4"
                      className="w-full h-full rounded-[20px]"
                    />
                  </div>
                  <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#5D5DF9] bg-[#E4E4F8] flex justify-center items-center">
                    <p className="font-['Noto Sans KR'] font-[500] text-[22px] leading-[31.86px] text-center text-[#2F2F2F]">
                      선택형 문항
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 네번째 */}
        <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#FFFFFF]">
          <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
            <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
              실습 및 평가 관리
            </h1>
          </div>
          <div className="w-full max-w-[1060.04px] h-auto md:h-[260px] mt-10 rounded-[20px] bg-[#FFFFFF] border-[1px] border-[#1BC768] shadow-[0_4px_24px_rgba(233,233,233,0.5)]">
            <div className="flex flex-col md:flex-row justify-between items-center p-4 md:h-full">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[370.34px] h-[208.21px] rounded-[10px] border-[1px] border-[#EFEFEF]">
                  <img
                    src="/LMSs.png"
                    alt="Image"
                    className="w-full h-full rounded-[10px]"
                  />
                </div>
                <div className="md:ml-10 mt-4 md:mt-0">
                  <div className="w-[90.69px] h-[36.77px] rounded-[100px] flex justify-center items-center bg-[#1BC768]">
                    <p className="font-['Noto Sans KR'] font-[400] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                      학생
                    </p>
                  </div>
                  <div className="text-center mt-6">
                    <p className="font-['Noto Sans KR'] font-[400] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                      - 주제별 실습 결과 확인 평가 내역 확인
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[1060.04px] h-auto md:h-[260px] mt-10 rounded-[20px] bg-[#FFFFFF] border-[1px] border-[#1BC768] shadow-[0_4px_24px_rgba(233,233,233,0.5)]">
            <div className="flex flex-col md:flex-row justify-between items-center p-4 md:h-full">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[370.34px] h-[208.21px] rounded-[10px] border-[1px] border-[#EFEFEF]">
                  <img
                    src="/LMSs.png"
                    alt="Image"
                    className="w-full h-full rounded-[10px]"
                  />
                </div>
                <div className="md:ml-10 mt-4 md:mt-0">
                  <div className="w-[90.69px] h-[36.77px] rounded-[100px] flex justify-center items-center bg-[#1BC768]">
                    <p className="font-['Noto Sans KR'] font-[400] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                      교수자
                    </p>
                  </div>
                  <div className="text-center mt-6">
                    <p className="font-['Noto Sans KR'] font-[400] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                      - 학생별 실습 현황 확인
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-['Noto Sans KR'] font-[400] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                      - 실습 내용에 대한 피드백 전달
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 다섯번째 */}
        <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#F8F8FF]">
          <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
            <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
              쉽고 편리한 접속환경 제공
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between p-8 md:h-full">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-[641.39px] h-[414.65px] rounded-[10px] border-[1px] border-[#EFEFEF] mr-15">
                <img
                  src="/ssssss.png"
                  alt="Image"
                  className="w-full h-full rounded-[10px]"
                />
              </div>
              <div className="md:ml-10 mt-4 md:mt-0">
                <div className="w-[151.97px] h-[54.86px] rounded-[100px] flex justify-center items-center bg-[#5D5DF9]">
                  <p className="font-['Noto Sans KR'] font-[400] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                    웹버전
                  </p>
                </div>
                <div className="text-center mt-6">
                  <p className="font-['Noto Sans KR'] font-[400] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                    - 웹페이지에서 바로 실행
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-['Noto Sans KR'] font-[400] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                    - 장소 제약 없이 실습 가능
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 여섯번째 */}
        <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#F8F8FF]">
          <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
            <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
              권장사양 안내
            </h1>
          </div>
          <table className="download-spec-table w-full max-w-[1024px] mt-10 font-['Noto Sans KR'] ">
            <thead>
              <tr className="download-spec-head bg-[#5D5DF9] h-[64px] rounded-[12px]">
                <th className="download-col-first w-[25%] px-4 text-left border-r border-[#EFEFEF] text-center text-[#FFFFFF]">
                  구분
                </th>
                <th className="download-col-rest w-[75%] px-4 text-left text-center text-[#FFFFFF]">
                  웹버전 권장사양
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="download-spec-info h-[64px] border-b border-[#EFEFEF] ">
                <td className="download-col-first w-[25%] px-4 text-left text-center">
                  프로세서(CPU)
                </td>
                <td className="download-col-rest w-[75%] px-4 text-left text-center">
                  Intel® Core™ i5
                </td>
              </tr>
              <tr className="download-spec-info h-[64px] border-b border-[#EFEFEF] ">
                <td className="download-col-first w-[25%] px-4 text-left text-center">
                  메모리(RAM)
                </td>
                <td className="download-col-rest w-[75%] px-4 text-left text-center">
                  4GB RAM 또는 그 이상
                </td>
              </tr>
              <tr className="download-spec-info h-[64px] border-b border-[#EFEFEF] ">
                <td className="download-col-first w-[25%] px-4 text-left text-center">
                  운영체제(OS)
                </td>
                <td className="download-col-rest w-[75%] px-4 text-left text-center">
                  <p>Windows® 10 64-bit</p>
                  <p>(WebGL 2.0 이상 지원 브라우저)</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
