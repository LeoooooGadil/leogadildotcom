import React from "react";
import SectionTitleComponent from "@/components/SectionTitle";
import EnterWhileInViewMotionDiv from "@/components/motion/EnterWhileInViewMotionDiv";

import SocialList from "@/components/SocialList";

const ContactMeSection = () => {
  return (
    <EnterWhileInViewMotionDiv>
      <div className="mt-0 lg:mt-48 mb-56">
        <SectionTitleComponent title="Let’s create" subtitle="together." />

        <div className="text-center mt-4 lg:text-left">
          <p className="text-md text-[--color-light] font-normal opacity-60">
            Feel free to contact me for any inquiries <br />
            or collaborations.
          </p>
        </div>

        <div className="relative px-6 md:px-0 mt-4 lg:mt-14 w-full lg:w-full top-7">
          <div className="overflow-hidden flex flex-col bg-[--color-light] p-6 px-6 lg:px-8 rounded-2xl drop-shadow-lg w-full max-w-[576px] lg:max-w-none mx-auto lg:mx-0">
            <div className="w-96 h-96 -bottom-24 lg:-top-24 -right-20 opacity-60 absolute border-dotted border-4 border-[--color-primary] [border-radius:53%_47%_71%_29%/58%_25%_75%_42%]"></div>

            <div className="z-30">
              <p className="text-left text-lg md:text-xl font-normal text-[--color-dark]">
                Pop me an email at{" "}
                <a
                  href="mailto:leogadil04@gmail.com"
                  className="text-[--color-accent] font-semibold"
                >
                  leogadil04@gmail.com
                </a>{" "}
                <br />
                or connect with me on social media.
              </p>

              <div className="mt-24"></div>
              <div className="flex justify-center lg:justify-end lg:hidden">
                <SocialList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </EnterWhileInViewMotionDiv>
  );
};

export default ContactMeSection;
