"use client";

import { SearchIcon } from "@/assets/icons";
import Link from "next/link";
import { LogoIcon } from "@/components/logo";
import { useSidebarContext } from "../sidebar/sidebar-context";
import { MenuIcon } from "./icons";
import { Notification } from "./notification";
import { ThemeToggleSwitch } from "./theme-toggle";
import { UserInfo } from "./user-info";

export function Header() {
  const { toggleSidebar, isMobile } = useSidebarContext();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/5 bg-[#0a1a12]/90 px-4 py-5 backdrop-blur-xl md:px-5 2xl:px-10">
      <button
        onClick={toggleSidebar}
        className="rounded-lg border border-white/10 bg-white/5 px-1.5 py-1 hover:bg-white/10 lg:hidden"
      >
        <MenuIcon />
        <span className="sr-only">Toggle Sidebar</span>
      </button>

      {isMobile && (
        <Link href={"/dashboard"} className="ml-2 max-[430px]:hidden min-[375px]:ml-4">
          <LogoIcon />
        </Link>
      )}

      <div className="max-xl:hidden">
        <h1 className="mb-0.5 text-heading-5 font-bold text-white">
          Dashboard
        </h1>
        <p className="font-medium text-gray-500">Nova Analytics Overview</p>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2 min-[375px]:gap-4">
        <div className="relative w-full max-w-[300px]">
          <input
            type="search"
            placeholder="Search"
            className="flex w-full items-center gap-3.5 rounded-full border border-white/10 bg-white/5 py-3 pl-[53px] pr-5 text-white outline-none transition-colors placeholder:text-gray-500 focus-visible:border-[#4A7C59]"
          />

          <SearchIcon className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 max-[1015px]:size-5" />
        </div>

        <ThemeToggleSwitch />

        <Notification />

        <div className="shrink-0">
          <UserInfo />
        </div>
      </div>
    </header>
  );
}
