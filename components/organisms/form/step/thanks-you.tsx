import Svg from "@/components/atoms/Svg";
import Typo from "@/components/atoms/Typo";

const ThanksYou = () => {
  return (
    <div className={"p-2 w-full h-full"}>
      <div
        className={
          "rounded-lg bg-white overflow max-lg:py-8 max-lg:px-6 max-lg:-translate-y-24 w-full max-lg:h-[400px] h-full"
        }
      >
        <div
          className={
            "flex flex-col items-center justify-center h-full w-full lg:w-[450px] mx-auto"
          }
        >
          <Svg className={"w-20"} icon={"thanks-you"} />
          <Typo
            className={"font-bold text-[24px] lg:text-[32px] mt-8 text-denim"}
          >
            Thank you!
          </Typo>
          <Typo className={"mt-2 text-grey leading-[1.6] text-center"}>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </Typo>
        </div>
      </div>
    </div>
  );
};
export default ThanksYou;
