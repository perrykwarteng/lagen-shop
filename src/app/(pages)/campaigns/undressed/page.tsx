import Layout from "@/components/Layout/layout";
import Link from "next/link";

export default function Undressed() {
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
            LA’GEN & BUANE — Undressed
          </h2>
          <h4 className="mt-5 text-[16px] md:text-[20px] font-medium">
            The Story Beneath the Surface.
          </h4>
          <p className="text-gray-600 text-sm">
            Undressed is the unfiltered world behind LA’GEN & BUANE — a raw look
            into the process, people, and purpose that shape every collection.
            From studio sketches and fittings to campaign shoots and design
            trials, this is where the journey unfolds. <br />
            It’s not just what you see — it’s what it took. The missteps, the
            magic, the moments in between. This is the brand, undressed. For
            those who value the vision behind the fabric.
          </p>
        </div>
      </Layout>
    </>
  );
}
