import Signin from "@/components/Auth/Signin";
import { Logo } from "@/components/logo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In | Nova Analytics",
};

export default function SignIn() {
  return (
    <div className="dashboard-theme flex min-h-screen items-center justify-center bg-[#060f0a] px-4">
      <div className="w-full max-w-[1100px] rounded-[20px] border border-white/10 bg-[#0d1f15] shadow-2xl shadow-[#4A7C59]/10">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <div className="mb-8">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <h2 className="mb-2 text-2xl font-bold text-white sm:text-heading-5">
                Sign in to your account
              </h2>
              <p className="mb-8 font-medium text-gray-400">
                Welcome back to Nova Analytics
              </p>
              <Signin />
            </div>
          </div>

          <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#4A7C59]/20 to-[#0a1a12] px-12.5 pt-12.5 pb-12.5 border border-white/5">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#4A7C59]/20 blur-[80px]" />

              <div className="relative z-10">
                <p className="mb-3 text-xl font-medium text-[#6B9E7B]">
                  Nova Analytics Dashboard
                </p>

                <h1 className="mb-4 text-2xl font-bold text-white sm:text-heading-3">
                  Welcome Back!
                </h1>

                <p className="w-full max-w-[375px] font-medium text-gray-400">
                  Sign in to access your dashboards, analytics, and real-time
                  data insights.
                </p>

                <div className="mt-20">
                  <Image
                    src={"/images/grids/grid-02.svg"}
                    alt="Decorative grid pattern"
                    width={405}
                    height={325}
                    className="mx-auto opacity-30 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
