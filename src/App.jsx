import "./App.css";
import ButtonVariants from "./components/ButtonVariants";

export default function App() {
  return (
    <div className="flex flex-row gap-10 items-center justify-center">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <h1 className=" text-white text-lg font-bold">PRIMARY BUTTONS</h1>
          <div className="flex gap-5 items-center justify-center">
            <ButtonVariants intent="primary" size="small" rounde="rd">
              Learn more
            </ButtonVariants>
            <ButtonVariants intent="primary" size="medium" rounde="rd">
              Learn more
            </ButtonVariants>
            <ButtonVariants intent="primary" size="large" rounde="rd">
              Learn more
            </ButtonVariants>
            <ButtonVariants intent="primary" size="xlarge" rounde="rd">
              Learn more
            </ButtonVariants>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className=" text-white text-lg font-bold">Outline BUTTONS</h1>
          <div className="flex gap-5 items-center justify-center">
            <ButtonVariants intent="outline" size="small" rounde="rd">
              Learn more
            </ButtonVariants>
            <ButtonVariants intent="outline" size="medium" rounde="rd">
              Learn more
            </ButtonVariants>
            <ButtonVariants intent="outline" size="large" rounde="rd">
              Learn more
            </ButtonVariants>
            <ButtonVariants intent="outline" size="xlarge" rounde="rd">
              Learn more
            </ButtonVariants>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className=" text-white text-lg font-bold">GHOST BUTTONS</h1>
          <div className="flex gap-5 items-center justify-center">
            <ButtonVariants intent="ghost" size="small" rounde="rd">
              Learn more
            </ButtonVariants>
            <ButtonVariants intent="ghost" size="medium" rounde="rd">
              Learn more
            </ButtonVariants>
            <ButtonVariants intent="ghost" size="large" rounde="rd">
              Learn more
            </ButtonVariants>
            <ButtonVariants intent="ghost" size="xlarge" rounde="rd">
              Learn more
            </ButtonVariants>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <h1 className=" text-white text-lg font-bold">PRIMARY BUTTONS</h1>
          <div className="flex gap-5 items-center justify-center">
            <ButtonVariants
              intent="primary"
              size="small"
              rounde="roundCross"
              btnType="iconbtn"
            >
              x
            </ButtonVariants>
            <ButtonVariants
              intent="primary"
              size="medium"
              rounde="roundCross"
              btnType="iconbtn"
            >
              x
            </ButtonVariants>
            <ButtonVariants
              intent="primary"
              size="large"
              rounde="roundCross"
              btnType="iconbtn"
            >
              x
            </ButtonVariants>
            <ButtonVariants
              intent="primary"
              size="xlarge"
              rounde="roundCross"
              btnType="iconbtn"
            >
              x
            </ButtonVariants>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className=" text-white text-lg font-bold">Outline BUTTONS</h1>
          <div className="flex gap-5 items-center justify-center">
            <ButtonVariants intent="outline" size="small" rounde="roundCross">
              x
            </ButtonVariants>
            <ButtonVariants intent="outline" size="medium" rounde="roundCross">
              x
            </ButtonVariants>
            <ButtonVariants intent="outline" size="large" rounde="roundCross">
              x
            </ButtonVariants>
            <ButtonVariants intent="outline" size="xlarge" rounde="roundCross">
              x
            </ButtonVariants>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className=" text-white text-lg font-bold">GHOST BUTTONS</h1>
          <div className="flex gap-5 items-center justify-center">
            <ButtonVariants intent="ghost" size="small" rounde="roundCross">
              x
            </ButtonVariants>
            <ButtonVariants intent="ghost" size="medium" rounde="roundCross">
              x
            </ButtonVariants>
            <ButtonVariants intent="ghost" size="large" rounde="roundCross">
              x
            </ButtonVariants>
            <ButtonVariants intent="ghost" size="xlarge" rounde="roundCross">
              x
            </ButtonVariants>
          </div>
        </div>
      </div>
    </div>
  );
}
