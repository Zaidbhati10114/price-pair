import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import { getUserSubscriptionTier } from "@/server/db/subscription";
import { getProductCount } from "@/server/db/products";
import { getProductViewCount } from "@/server/db/productViews";
import { auth } from "@clerk/nextjs/server";
import { startOfMonth } from "date-fns";
import { ClientPricingCard } from "../_components/ClientPricingCard";
import { Progress } from "@/components/ui/progress";

export default async function SubscriptionPage() {
  const { userId, redirectToSignIn } = auth();
  if (userId == null) return redirectToSignIn();

  const tier = await getUserSubscriptionTier(userId);
  const productCount = await getProductCount(userId);
  const pricingViewCount = await getProductViewCount(
    userId,
    startOfMonth(new Date())
  );

  return (
    <>
      <h1 className="mb-6 text-3xl font-semibold">Your Subscription</h1>
      <div className="flex flex-col gap-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Monthly Usage</CardTitle>
              <CardDescription>
                {pricingViewCount} / {tier.maxNumberOfVisits} pricing page
                visits this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress
                value={(pricingViewCount / tier.maxNumberOfVisits) * 100}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Number of Products</CardTitle>
              <CardDescription>
                {productCount} / {tier.maxNumberOfProducts} products created
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress
                value={(productCount / tier.maxNumberOfProducts) * 100}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid-cols-2 lg:grid-cols-4 grid gap-4 max-w-screen-xl mx-auto">
        {subscriptionTiersInOrder.map((t) => (
          <ClientPricingCard key={t.name} currentTierName={tier.name} {...t} />
        ))}
      </div>
    </>
  );
}
