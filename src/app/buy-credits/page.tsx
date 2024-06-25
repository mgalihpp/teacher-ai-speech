import { api } from "@/trpc/server";
import Pricing from "@/components/marketing/pricing";
import Testimonial from "@/components/marketing/testimonial";

export default async function BuyCreditsPage() {
  const { session, user } = await api.user.getUser();

  return (
    <>
      <section className="mx-auto w-full max-w-5xl pt-32">
        <div className="flex w-full flex-col items-center justify-center space-y-4 px-4 py-2">
          <h1 className="text-center text-5xl font-bold max-sm:text-4xl">
            Buy <span className="text-blue-500">Guru AI</span> Credits
          </h1>
          <p className="max-w-2xl text-sm max-sm:text-xs">
            Want to improve your language skills? Then, consider buying some
            credits for Guru AI. With credits, you can unlock our powerful AI
            services and speed up your language learning journey. Join the
            thousands of learners who already trust AI Language Teacher.
          </p>

          <Pricing credits={user?.credits ?? 0} session={session} />
        </div>
      </section>

      <Testimonial />
    </>
  );
}
