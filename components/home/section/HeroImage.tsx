import Image from "next/image";
import CardHome from "../CardHome";

export default function HeroImage() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Image
        alt="Hero Image"
        src={"/image/hero.png"}
        className="w-[800px] h-[442px] mt-10"
        width={1000}
        height={1000}
      />
      <div className="mt-7 flex gap-8 flex-wrap">
        <CardHome
          count="91"
          title="Classes"
          description="you can join according to your interests"
        />
        <CardHome
          count="91"
          title="Classes"
          description="you can join according to your interests"
        />
        <CardHome
          count="91"
          title="Classes"
          description="you can join according to your interests"
        />
      </div>
    </section>
  );
}
