import Image from "next/image";
import BG from "./bg.jpg";

export default function Home() {
  return (
    <div className="w-full md:w-3/4 mx-auto">
      <Image
        className="mx-auto my-8"
        width={600}
        src={BG}
        alt="FLirting-image-laugh.jpg"
      />
      <p className="text-center mx-auto text-xl w-[90%]">
        PickupLinesHub is your go-to place for the best pickup lines — cheesy,
        funny, clever, science, maths, and more. Copy instantly and impress
        effortlessly.
      </p>
      <p className="text-center mx-auto w-[90%] my-5 text-xl">
        You can use the <span className="font-bold">Navigation</span> buttons to
        find lines based on your choice of category and use the search input for
        specific lines!!
      </p>
    </div>
  );
}
