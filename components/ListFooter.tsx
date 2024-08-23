import Link from "next/link";

export default function ListFooter({
  title,
  list,
}: {
  title: string;
  list: { title: string; link: string }[];
}) {
  return (
    <div className="text-slate-900 flex flex-col gap-2">
      <h5 className="font-bold">{title}</h5>
      {list.map((v, i) => {
        return (
          <p key={i} className="text-slate-500 font-semibold">
            <Link href={v.link}>{v.title}</Link>
          </p>
        );
      })}
    </div>
  );
}
