import { cva } from "class-variance-authority";
const base = "flex justifiy-center items-center ";

const buttonVariants = cva(base, {
  variants: {
    intent: {
      primary:
        " bg-blue-100 text-gray-950 border-transparent hover:bg-blue-400 hover:text-gray-50",
      outline:
        "bg-transparent text-blue-100 border-blue-100 border-2 hover:bg-blue-100 hover:text-gray-900",
      ghost: " text-blue-100 border-transparent bg-transparent ",

      // Ajout de la variante pour le bouton rond en croix
      primaryCross:
        " bg-blue-100 text-gray-950 border-transparent hover:bg-blue-400 hover:text-gray-50",
    },
    size: {
      small: "text-sm px-1 py-1",
      medium: "text-base px-2 py-1.5",
      large: "text-lg px-3 py-2",
      xlarge: "text-xl px-4 py-2.5",
    },
    rounde: {
      rd: "rounded-md",
      nrd: "rounded-none",
      roundCross: "rounded-full ",
    },
    btnType: {
      btnclassique: "",
      iconbtn: "flex justify-center items-center",
    },
  },
  compoundVariants: [
    {
      btnType: "iconbtn",
      size: "small",
      class: "w-5 h-5 ",
    },
    {
      btnType: "iconbtn",
      size: "medium",
      class: "w-8 h-8 ",
    },
    {
      btnType: "iconbtn",
      size: "large",
      class: "w-10 h-10 ",
    },
    {
      btnType: "iconbtn",
      size: "xlarge",
      class: "w-15 h-15 ",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export default function ButtonCVA({
  className,
  intent,
  size,
  rounde,
  btnType,
  children,
  ...props
}) {
  return (
    <button
      className={buttonVariants({ intent, size, rounde, btnType, className })}
      {...props}
    >
      {children}
    </button>
  );
}
