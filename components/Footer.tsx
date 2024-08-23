import Image from "next/image";
import ListFooter from "./ListFooter";

export default function Footer() {
  return (
    <footer className="text-slate-900 px-4 py-8">
      <div className="pb-16 flex">
        <div className="w-6/12">
          <Image
            alt="Logo Academease"
            src={"/image/logo.png"}
            className="w-[217px]"
            width={500}
            height={500}
          />
          <p className="font-medium mt-3 text-slate-500">
            Learn without limits, grow together
          </p>
        </div>
        <div className="w-6/12 flex justify-between">
          <ListFooter
            title="Resources"
            list={[
              { title: "Classes", link: "#" },
              { title: "Documents", link: "#" },
              { title: "Discussions", link: "#" },
            ]}
          />
          <ListFooter
            title="Developer"
            list={[{ title: "Documentation", link: "#" }]}
          />
          <ListFooter
            title="Company"
            list={[
              { title: "About us", link: "#" },
              { title: "Community", link: "#" },
            ]}
          />
        </div>
      </div>
      <div className="flex justify-between pt-8 border-t border-slate-200">
        <p className="font-semibold">2024 © Academease</p>
        <div className="text-slate-500 flex gap-4 font-semibold">
          <p>Terms of service</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </footer>
  );
}
