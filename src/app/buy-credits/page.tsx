import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";
import Pricing from "./_components/pricing";

export default async function BuyCreditsPage() {
  const session = await getServerAuthSession();

  const user = await db.user.findFirst({
    where: {
      id: session?.user.id,
    },
    select: {
      credits: true,
    },
  });

  return (
    <div className="mx-auto w-full max-w-4xl pt-32">
      <div className="flex w-full flex-col items-center justify-center space-y-4 px-4 py-2">
        <h1 className="text-center text-5xl font-bold max-sm:text-4xl">
          Buy <span className="text-blue-500">Ai Language Teacher</span> Credits
        </h1>
        <p className="max-w-2xl text-sm max-sm:text-xs">
          Want to improve your language skills? Then, consider buying some
          credits for Ai Language Teacher. With credits, you can unlock our
          powerful AI services and speed up your language learning journey. Join
          the thousands of learners who already trust Ai Language Teacher.
        </p>

        <Pricing credits={user?.credits ?? 0} />
      </div>
    </div>
  );
}