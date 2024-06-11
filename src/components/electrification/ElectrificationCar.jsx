import React, { useEffect, useRef, useState } from 'react';
import Jumping from '../common/Jumping';
import { timeline } from '../data/ElectrificationTimeline';
import ElectrificationVideoReview from './ElectricficationVideoReview';
import { carElectrification as data } from '../data/ElectricficationVideoReviewData';

const ElectrificationCar = () => {
  const textRef = useRef(null);
  const [scrollYValue, setScrollYValue] = useState(0);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const timelineRef = useRef(null);

  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTimelineVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    setScrollYValue(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollYValue === 0) {
      setIsTimelineVisible(false);
    }
  }, [scrollYValue]);

  const handleClickScrollMouse = () => {
    const element = document.getElementById('banner-description');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="w-full h-max mt-[94px] relative bg-black">
        <div className="">
          <video
            autoPlay="autoplay"
            preload="metadata"
            loop="loop"
            muted="muted"
            src="/video/masthead-xev.mp4"
            className="w-screen"
          ></video>
        </div>

        <div className="flex flex-col container absolute left-0 right-0 top-0 bottom-0 justify-start">
          <div className="h-screen flex justify-end flex-col">
            <p
              className="uppercase text-white font-bold text-[50px] w-full h-max tracking-wide animate-slide-in pb-[20px]"
              ref={textRef}
              id="banner-description"
            >
              điện hóa toyota
            </p>
            <span
              className={`${
                scrollYValue === 0
                  ? 'opacity-1 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } transition-all duration-[500ms] w-[30px] h-[50px] border-[2px] border-white ml-auto mr-auto rounded-3xl relative cursor-pointer after:absolute after:right-0 after:left-0 after:top-[0%]  after:content-[''] after:animate-sweep-to-bottom after:mx-auto after:rounded-full after:block after:w-1.5 after:bg-white after:h-1.5`}
              onClick={handleClickScrollMouse}
            ></span>
          </div>

          <div className="h-[40%]">
            <Jumping>
              <p className="text-white uppercase tracking-wide text-[38px] font-bold tracking-wide mb-2 mt-8">
                CHANGE IS IN MOTION
              </p>
            </Jumping>

            <p className="text-white text-base">
              <Jumping>
                Tại Toyota, chúng tôi đang thực hiện sứ mệnh trở thành một công
                ty có thể mang lại nhiều đóng góp tích cực để cải thiện môi
                trường toàn cầu. Đến nay, chúng tôi đã góp phần giảm hơn 160
                triệu tấn khí thải CO2 - và chúng tôi vẫn đang nỗ lực hành động
                để đạt được nhiều hơn thế. Điều này bao gồm việc củng cố một
                tương lai chuyển động với nhiều giải pháp khác nhau cho mọi
                người, đồng thời hướng tới mục tiêu Trung hòa Carbon.
                <br />
              </Jumping>

              <Jumping>
                <br />
                Hành trình điện khí hoá của chúng tôi bắt đầu gần 30 năm về
                trước với việc ra mắt mẫu xe Hybrid đầu tiên trên thế giới. Kể
                từ đó, chúng tôi đã đầu tư và đổi mới các giải pháp điện khí hóa
                khác nhau nhằm đáp ứng nhu cầu về di chuyển và phong cách sống
                của khách hàng.
              </Jumping>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <Jumping>
            <h1 className="text-mainTitle uppercase text-mainTitleColor pt-[60px] sectionMargin_2 pb-[80px]">
              HÀNH TRÌNH ĐIỆN HOÁ CỦA CHÚNG TÔI
            </h1>
          </Jumping>

          <div
            className="grid grid-cols-12 pt-[20px] pb-[80px]"
            ref={timelineRef}
          >
            {timeline.map((time, index) => (
              <div key={time.id} className="col-span-2">
                <div className="flex items-center">
                  <span
                    className={`block h-[10px] w-[10px] transition-all ease-out ${
                      isTimelineVisible ? 'bg-[#EB0A1E]' : 'bg-[#ccc]'
                    }`}
                    style={{
                      willChange: 'background-color',
                      transitionDelay: isTimelineVisible
                        ? `${index * 0.4}s`
                        : '0s',
                      transitionDuration: isTimelineVisible ? '2s' : '0s',
                    }}
                  ></span>

                  {time.nextTarget && (
                    <hr
                      className={`h-[1px] w-full ease-out ${
                        isTimelineVisible
                          ? 'border-[#EB0A1E] w-full'
                          : 'border-[#ccc] w-0'
                      }`}
                      style={{
                        willChange: 'border',
                        transitionDelay: isTimelineVisible
                          ? `${index * 0.5}s`
                          : '0s',
                        transitionDuration: isTimelineVisible ? '1.8s' : '0s',
                      }}
                    />
                  )}
                </div>

                <div
                  className={`pt-[30px] pr-[25px] transition-all ease-in ${
                    isTimelineVisible
                      ? 'text-mainTitleColor translate-y-0'
                      : 'text-mainTitleColor/[.1] -translate-y-[15px]'
                  }`}
                  style={{
                    willChange: 'opacity, transform',
                    transitionDelay: isTimelineVisible
                      ? `${index * 0.4}s`
                      : '0s',
                    transitionDuration: isTimelineVisible ? '3s' : '0s',
                  }}
                >
                  <span className="text-[22px] font-semibold">{time.year}</span>
                  <p className="font-light text-base">{time.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ElectrificationVideoReview data={data} />

      <section className="bg-electrification_1 h-max w-full">
        <div className="container">
          <div className="py-[40px]">
            <Jumping>
              <h1 className="uppercase text-mainTitleColor font-bold text-mainTitle">
                TƯƠNG LAI BỀN VỮNG CHO MỌI PHONG CÁCH SỐNG
              </h1>
            </Jumping>
            <Jumping>
              <p className="text-mainTitleColor text-base mt-[20px]">
                Với tham vọng đạt được Trung hoà Carbon tới năm 2050, chúng tôi
                đang phát triển dòng xe điện hoá thông qua những cách tiếp cận
                đa chiều. Điều này đồng nghĩa với việc bạn có thể chọn chiếc xe
                phù hợp nhất với phong cách sống của mình.
              </p>
            </Jumping>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElectrificationCar;
