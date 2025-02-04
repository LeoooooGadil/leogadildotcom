import React from "react";
import Image from "next/image";
import SocialList from "@/components/SocialList";
import ProfilePicture from "@/assets/images/ProfilePicture.webp";
import DashedLine from "@/assets/images/DashedLine.svg";
import ArrowDashedLine from "@/assets/images/ArrowDashedLine.svg";

const ProfileComponent = () => {
  return (
    <div className="mx-0 px-4 md:px-0 lg:mx-6 lg:mt-7 w-full lg:w-80 sticky top-20">
      <div className="relative overflow-hidden flex flex-col items-center bg-[--color-light] py-8 px-12 lg:px-4 rounded-2xl drop-shadow-lg w-full max-w-[576px] lg:w-80 mx-auto">
        {/* Persistent Images Positioned Above the Profile Image but Behind Texts */}
        <PersistentImages />

        <div className="z-30 flex flex-col items-center ">
          <div className="relative rounded-[35px]">
            <div className="h-72 lg:64 w-64">
              <div className="absolute overflow-hidden profilebackground drop-shadow-xl rounded-2xl w-full h-full flex justify-center items-center">
                <Image
                  priority
                  src={ProfilePicture}
                  alt="Profile"
                  className="mb-36 ml-7 scale-[1.7]"
                />
              </div>
            </div>
          </div>
          <div className="relative h-52 lg:h-64 w-full flex justify-center">
            <div className="absolute h-full w-full z-[100]">
              <div className="mt-6 w-full">
                <div className="text-4xl tracking-tighter lg:text-4xl font-bold text-[--color-dark]">
                  <h1>Jann Leo Gadil</h1>
                </div>
              </div>
              <div className="h-16 hidden lg:flex text-[--color-accent] justify-center items-center"></div>
              <div className="text-base text-center mt-4 text-[--color-dark-accent] font-medium opacity-80">
                A passionate software
                <br />
                developer based in Manila,
                <br />
                Philippines
              </div>
              <div className="mt-4 flex justify-center">
                <SocialList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PersistentImages = () => {
  return (
    <>
      <Image
        priority
        src={ArrowDashedLine}
        alt="Arrow"
        className="pointer-events-none absolute w-72 lg:w-full lg:min-w-0 h-full lg:top-12 right-1/2 lg:right-20 lg:-rotate-45 z-[40]"
      />
      <Image
        priority
        src={DashedLine}
        alt="Circle"
        className="pointer-events-none absolute w-96 h-96 -top-24 -right-4 z-[40]"
      />
    </>
  )
};

export default ProfileComponent;
