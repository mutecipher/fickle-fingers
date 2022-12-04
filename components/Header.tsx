"use client";

import * as Dropdown from "@radix-ui/react-dropdown-menu";
import React from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header>
        <div className="flex justify-end pt-4">
          <Dropdown.Root>
            <Dropdown.Trigger
              asChild
              className="p-2 hover:rounded-lg hover:bg-zinc-500/25 focus:rounded-lg focus:bg-zinc-500/25"
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </Dropdown.Trigger>

            <Dropdown.Content
              loop
              align="end"
              className="flex w-64 flex-col space-y-2 rounded-lg border border-zinc-500 bg-black shadow-sm"
            >
              <Dropdown.Item
                textValue="Home"
                onSelect={() => {
                  router.push("/");
                }}
                className="hover:rounded-lg hover:bg-zinc-500/25 focus:rounded-lg focus:bg-zinc-500/25"
              >
                <div className="flex items-center space-x-2 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <span>Home</span>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                textValue="Blog"
                onSelect={() => {
                  router.push("/blog");
                }}
                className="hover:rounded-lg hover:bg-zinc-500/25 focus:rounded-lg focus:bg-zinc-500/25"
              >
                <div className="flex items-center space-x-2 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <span>Blog</span>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                textValue="Dashboard"
                onSelect={() => {
                  router.push("/dashboard");
                }}
                className="hover:rounded-lg hover:bg-zinc-500/25 focus:rounded-lg focus:bg-zinc-500/25"
              >
                <div className="flex items-center space-x-2 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                    />
                  </svg>
                  <span>Dashboard</span>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                textValue="Uses"
                onSelect={() => {
                  router.push("/uses");
                }}
                className="hover:rounded-lg hover:bg-zinc-500/25 focus:rounded-lg focus:bg-zinc-500/25"
              >
                <div className="flex items-center space-x-2 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                    />
                  </svg>
                  <span>Uses</span>
                </div>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
        </div>
      </header>
    </>
  );
}
