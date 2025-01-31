import React from "react";
import Image from "next/image";
import SocialList from "@/components/SocialList";
import {
  TbMedicalCrossFilled,
  TbMoonFilled,
  TbMugFilled,
} from "react-icons/tb";
import ProfilePicture from "@/assets/images/ProfilePicture.webp";

const ProfileComponent = () => {
  return (
    <div className="mx-0 px-4 md:px-0 lg:mx-6 lg:mt-7 w-full lg:w-80 sticky top-20">
      <div className="relative overflow-hidden flex flex-col items-center bg-[--color-light] py-8 px-12 lg:px-4 rounded-2xl drop-shadow-lg w-full max-w-[576px] lg:w-80 mx-auto">

        <div className="z-30 flex flex-col items-center ">
          <div className="relative rounded-[35px] border-[5px] border-[--color-accent]">
            <TbMoonFilled
              className="text-[--color-primary] absolute -left-3 -top-4 svgoutline"
              size={64}
            />
            <TbMugFilled
              className="text-[--color-secondary] absolute -right-5 -bottom-4 -rotate-12 svgoutline"
              size={52}
            />
            <div className="h-60 lg:64 w-60 p-3 overflow-hidden">
              <div className="rounded-[23px] bg-[--color-accent] w-full h-full flex justify-center items-center">
                <Image
                  priority
                  src={ProfilePicture}
                  alt="Profile"
                  className="object-contain mb-36 ml-6 scale-150"
                />
              </div>
            </div>
          </div>
          <div className="text-4xl tracking-tighter lg:text-4xl font-bold mt-6 text-[--color-dark]">
            Jann Leo Gadil
          </div>
          <div className="h-16 hidden lg:flex text-[--color-accent] justify-center items-center">
            {/* <TbMedicalCrossFilled size={24} className="animate-spin" /> */}
          </div>
          <div className="text-base text-center mt-4 text-[--color-dark-accent] font-medium opacity-80">
            A passionate software
            <br />
            developer based in Manila,
            <br />
            Philippines
          </div>
          <div className="mt-4">
            <SocialList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
