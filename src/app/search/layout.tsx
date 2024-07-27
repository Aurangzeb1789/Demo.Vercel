import Collections from "@/components/Collections";
import Filter from "@/components/Filter";

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>

    <div className="flex justify-between mx-5 flex-col md:flex-row overflow-hidden">
      <div>
        <Collections />
        <div className="md:hidden">
        <Filter/>
        </div>
      </div>
      <div>{children}</div>
      <div className="hidden md:block">
        <Filter />
      </div>
    </div>
  </>
  );
}