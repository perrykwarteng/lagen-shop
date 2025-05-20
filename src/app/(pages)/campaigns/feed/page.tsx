import Layout from "@/components/Layout/layout";
import Link from "next/link";

export default function Feed() {
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
            LA’GEN & BUANE — The Feed
          </h2>
          <h4 className="mt-5 text-[16px] md:text-[20px] font-medium">
            A Digital Magazine of Style, Voice & Vision.
          </h4>
          <p className="text-gray-600 text-sm">
            The Feed is the digital heartbeat of LA’GEN & BUANE — a curated
            space where fashion meets culture, creativity, and career. Featuring
            blog entries, exclusive style edits, behind-the-scenes looks,
            interviews, and brand stories, The Feed highlights the people
            shaping the movement and the looks that define it. <br />
            From how you wear it to how you live it, this is where LA’GEN &
            BUANE expands beyond the wardrobe — into story, purpose, and future.
            Style. Substance. Spotlight. Welcome to The Feed.
          </p>
        </div>
      </Layout>
    </>
  );
}
