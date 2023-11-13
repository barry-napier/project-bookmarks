import { BookmarkHeader } from "@/components/bookmark-header";
import { BookmarkList } from "@/components/bookmark-list";
import { getBookmarks } from "@/lib/bookmarks";

export default async function Home() {
  const bookmarks = await getBookmarks();

  // const bookmarks: Bookmark[] = [
  //   {
  //     id: "1",
  //     title: "Google",
  //     url: "https://google.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "2",
  //     title: "Facebook",
  //     url: "https://facebook.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "3",
  //     title: "Twitter",
  //     url: "https://twitter.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "4",
  //     title: "Instagram",
  //     url: "https://instagram.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "5",
  //     title: "LinkedIn",
  //     url: "https://linkedin.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "6",
  //     title: "GitHub",
  //     url: "https://github.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "7",
  //     title: "StackOverflow",
  //     url: "https://stackoverflow.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "8",
  //     title: "DuckDuckGo",
  //     url: "https://duckduckgo.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "9",
  //     title: "Reddit",
  //     url: "https://reddit.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "10",
  //     title: "Youtube",
  //     url: "https://youtube.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "11",
  //     title: "Pinterest",
  //     url: "https://pinterest.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "12",
  //     title: "Yahoo",
  //     url: "https://yahoo.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "13",
  //     title: "Netflix",
  //     url: "https://netflix.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "14",
  //     title: "Slack",
  //     url: "https://slack.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "15",
  //     title: "Twitch",
  //     url: "https://twitch.tv",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "16",
  //     title: "BBC",
  //     url: "https://bbc.co.uk",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "17",
  //     title: "Goodreads",
  //     url: "https://goodreads.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "18",
  //     title: "Soundcloud",
  //     url: "https://soundcloud.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "19",
  //     title: "Buzzfeed",
  //     url: "https://buzzfeed.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "20",
  //     title: "Wikipedia",
  //     url: "https://wikipedia.org",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "21",
  //     title: "Vimeo",
  //     url: "https://vimeo.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "22",
  //     title: "Shopify",
  //     url: "https://shopify.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "23",
  //     title: "Quora",
  //     url: "https://quora.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "24",
  //     title: "eBay",
  //     url: "https://ebay.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "25",
  //     title: "Amazon",
  //     url: "https://amazon.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "26",
  //     title: "Hulu",
  //     url: "https://hulu.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "27",
  //     title: "Spotify",
  //     url: "https://spotify.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "28",
  //     title: "Gmail",
  //     url: "https://mail.google.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "29",
  //     title: "Flipkart",
  //     url: "https://flipkart.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "30",
  //     title: "Microsoft",
  //     url: "https://microsoft.com",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // ];

  return (
    <section>
      <BookmarkHeader />
      <div className="my-4">
        <BookmarkList bookmarks={bookmarks} />
      </div>
    </section>
  );
}
