import Layout from "@/components/Layout/layout";
import Link from "next/link";

export default function SeenSocial() {
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
            LA’GEN & BUANE — Seen on Social
          </h2>
          <h4 className="mt-5 text-[16px] md:text-[20px] font-medium">
            Direct from our Instagram.
          </h4>
          <p className="text-gray-600 text-sm">
            Your favorite fits — now just one click
          </p>
        </div>
      </Layout>
    </>
  );
}
