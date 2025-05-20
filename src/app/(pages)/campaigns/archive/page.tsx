import Layout from "@/components/Layout/layout";
import Link from "next/link";

export default function Archive() {
  return (
    <>
      <Layout>
        <div className="px-5 md:px-10 py-2 flex items-center justify-between gap-2 md:gap-4 list-none border-b border-black">
          <li>
            <Link
              href="/campaigns/society"
              className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
            >
              LB Society
            </Link>
          </li>
          <li>
            <Link
              href="/campaigns/archive"
              className="text-[10px] md:text-[12px] font-[500] hover:text-gray-700"
            >
              LB Archive
            </Link>
          </li>
          <li>
            <Link
              href="/campaigns/feed"
              className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
            >
              The Feed
            </Link>
          </li>

          <li>
            <Link
              href="/campaigns/seen-social"
              className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
            >
              Seen on Social
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
            >
              Collab Series
            </Link>
          </li>

          <li>
            <Link
              href="/campaigns/undressed"
              className="text-[10px] md:text-[12px] font-[500]  hover:text-gray-700 cursor-pointer"
            >
              Undressed+
            </Link>
          </li>
        </div>

        <div className="px-5 md:px-10 md:py-8 py-2 text-center">
          <h2 className="text-[20px] md:text-[30px] font-medium">
            LA’GEN & BUANE - Archive
          </h2>

          <h4 className="mt-5 text-[16px] md:text-[20px] font-medium">
            Past pieces. Permanent impact
          </h4>
          <p className="text-gray-600 text-sm">
            The LA’GEN & BUANE Archive is a curated time capsule—a visual
            lookbook of our most iconic past pieces, exclusive drops, limited
            releases, and landmark events that helped shape the identity of our
            movement. This is where fashion and history intertwine, and every
            piece tells a story of creativity, culture, and evolution. <br />
            From early designs to rare capsules, the archive stands as more than
            a collection—it’s a celebration of the journey. For collectors,
            loyalists, and those who value the roots—this is your gateway to
            timeless expression. What came before still speaks volumes.
          </p>
        </div>
      </Layout>
    </>
  );
}
