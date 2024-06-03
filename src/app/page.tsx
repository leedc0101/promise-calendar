import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { LoginButton } from "./components/Buttons/LoginButton";
import { Avatar } from "./components/Avatar";
import { NewEventButton } from "./components/Buttons/NewEventButton";
import { ShowEventListButton } from "./components/Buttons/ShowEventListButton";

export default async function Home() {
  return (
    <div className="flex h-full flex-col bg-white dark:bg-gray-950 ">
      <header className="flex items-center justify-between p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <ShowEventListButton />
          <h1 className="text-xl font-semibold">팔레트</h1>
          <NewEventButton />
        </div>
        <div className="flex items-center gap-4">
          {/* <Button variant="ghost" size="sm">
            <UsersIcon className="w-4 h-4" />
            Manage Participants
          </Button> */}

          <LoginButton />
        </div>
      </header>
      <div className="grid flex-1 grid-cols-[1fr_300px] gap-6 p-6">
        <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-950">
          <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-100 py-2 text-center text-sm font-medium dark:border-gray-800 dark:bg-gray-900">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="grid grid-cols-7 grid-rows-[repeat(24,minmax(40px,1fr))] border-r border-gray-200 text-center text-xs font-medium dark:border-gray-800">
            {Array.from({ length: 24 * 7 }).map((_, i) => (
              <div
                key={i}
                className={`relative border-b border-r border-gray-200 dark:border-gray-800 ${
                  i % 7 === 0 ? "border-l" : i >= 24 * 6 ? "border-b-0" : ""
                }`}
              >
                <div className="absolute inset-0 rounded-md bg-[#55efc4]/50 dark:bg-[#55efc4]/30" />
                <div className="absolute inset-0 rounded-md bg-[#ffeaa7]/50 dark:bg-[#ffeaa7]/30" />
                <div className="absolute inset-0 rounded-md bg-[#fd79a8]/50 dark:bg-[#fd79a8]/30" />
                <div className="relative z-10 flex h-full items-center justify-center">
                  {i % 24 === 0 && (
                    <div className="absolute left-0 w-20 -translate-x-1/2 pr-2 text-right">
                      {Math.floor(i / 24)}:00
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-950">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Participants</h2>
            <div className="flex items-center gap-2">
              <Avatar src="/placeholder.svg" />
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  johndoe@example.com
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Avatar src="/placeholder.svg" />
              <div>
                <div className="font-medium">Jane Smith</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  janesmith@example.com
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Avatar src="/placeholder.svg" />
              <div>
                <div className="font-medium">David Wilson</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  davidwilson@example.com
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Overlapping Free Time</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center rounded-md bg-[#55efc4]/50 p-4 dark:bg-[#55efc4]/30">
                <div className="text-2xl font-semibold">9:00 AM</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  3 participants available
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-md bg-[#ffeaa7]/50 p-4 dark:bg-[#ffeaa7]/30">
                <div className="text-2xl font-semibold">2:00 PM</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  2 participants available
                </div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-md bg-[#fd79a8]/50 p-4 dark:bg-[#fd79a8]/30">
                <div className="text-2xl font-semibold">6:00 PM</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  1 participant available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
