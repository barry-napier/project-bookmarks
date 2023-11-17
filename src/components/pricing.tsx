import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Pricing() {
  const pricing = [
    {
      name: "Free",
      price: {
        month: "$0",
        year: "$0",
      },
      features: [
        "Unlimited bookmarks",
        "Unlimited collections",
        "Unlimited devices",
        "Share & collaborate",
        "Analytics",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: {
        month: "$2.99",
        year: "$29.99",
      },
      features: [
        "Everything in Free",
        "Full-text search",
        "Tagging & labeling",
        "Priority support",
        "API access",
        "Team & collaboration tools",
      ],
      buttonText: "Coming Soon",
    },
  ];

  return (
    <section className="flex flex-col gap-8 pb-40">
      <div className="flex gap-8 text-2xl font-semibold">Pricing</div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {pricing.map((price) => (
          <Card key={price.name} className="shadow-md">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2 mb-6 text-4xl">
                  {price.name}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground h-80">
              <div className="flex text-6xl mb-4">{price.price.month}</div>
              {price.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 pb-2">
                  <CheckIcon />
                  {feature}
                </div>
              ))}
            </CardContent>
            <CardFooter className="w-full">
              <Link href="/sign-up" className="text-center w-full">
                <Button size="xl" className="w-full">
                  {price.buttonText}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
