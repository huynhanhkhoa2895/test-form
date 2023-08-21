"use client";

import FormStep from "@/components/templates/formStep";

export default function Home() {
  const onChange = () => {
  };
  return (
    <main
      className={
        "lg:flex lg:items-center lg:justify-center bg-lightSky w-full h-full min-h-screen text-denim"
      }
    >
      {/*<Switch onChange={onChange} value={true} />*/}
      {/*<Svg icon={"thanks-you"} className={"w-[40px]"} />*/}
      {/*<Input name={"text"} onChange={() => {}} />*/}
      {/* <Checkbox id="online-service" title="Online service" content="Access to multiplayer games" price="+$1/mo" /> */}
      {/* <Radio icon="plan-arcade" id="plan-arcade" name="plan" title="Arcade" price="$9/mo" content="2 months free" />
      <Radio icon="plan-advanced" id="plan-advanced" name="plan" title="Advanced" price="$120/yr" content="2 months free" /> */}
      <div
        className={
          "w-full h-full lg:max-w-[940px] lg:max-h-[600px] overflow-hidden lg:rounded-lg shadow-cover"
        }
      >
        <FormStep/>
      </div>
    </main>
  );
}
