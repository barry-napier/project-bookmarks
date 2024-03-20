import {
  BookmarkPlusIcon,
  FoldersIcon,
  Globe2Icon,
  LockIcon,
  MonitorSmartphoneIcon,
  SearchCheckIcon,
  Share2Icon,
  TagsIcon,
} from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

export function Features() {
  const features = [
    {
      Icon: MonitorSmartphoneIcon,
      heading: "Cross-Device Syncing",
      description:
        "Seamlessly sync your bookmarks across all your devices, ensuring you have access to your saved links wherever you go.",
    },
    {
      Icon: Globe2Icon,
      heading: "Multi-Browser Support",
      description:
        "Works on popular web browsers such as Chrome, Firefox, Safari, and Edge, offering a consistent experience no matter your browser preference.",
    },
    {
      Icon: BookmarkPlusIcon,
      heading: "Effortless Bookmarking",
      description:
        "Easily save webpages with a single click or tap, eliminating the need for complex bookmarking procedures.",
    },
    {
      Icon: FoldersIcon,
      heading: "Folder Organization",
      description:
        "Create and manage folders to neatly organize your bookmarks by category, project, or topic.",
    },
    {
      Icon: TagsIcon,
      heading: "Tagging and Labeling",
      description:
        "Add tags or labels to bookmarks for even more precise organization and quick retrieval.",
    },
    {
      Icon: SearchCheckIcon,
      heading: "Powerful Search",
      description:
        "Quickly find saved links using a robust search feature that scans titles, tags, and content.",
    },
    {
      Icon: LockIcon,
      heading: "Secure Account",
      description:
        "Protect your data with secure user authentication and data encryption, ensuring your bookmarks are safe and private.",
    },
    {
      Icon: Share2Icon,
      heading: "Collaboration",
      description:
        "Share bookmarks and collaborate on collections or projects with colleagues or friends.",
    },
    {
      Icon: Share2Icon,
      heading: "Analytics",
      description:
        "Gain insights into your bookmarking habits with analytics and statistics, helping you better understand your browsing behavior.",
    },
  ]

  return (
    <section className="flex flex-col gap-8 py-40">
      <div className="flex gap-8 text-2xl font-semibold">Features</div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ Icon, heading, description }) => (
          <Card key={heading} className="shadow-md">
            <CardHeader>
              <CardTitle className="text-base">
                <div className="mb-6 flex items-center gap-2">
                  {Icon && <Icon className="h-6 w-6" />} {heading}
                </div>
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            {/* <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </section>
  )
}
