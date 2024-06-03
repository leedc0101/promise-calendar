import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-950 ">
      <header className="shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Collaborative Calendar</h1>
          {/* <Button variant="ghost" size="sm">
            <PlusIcon className="w-4 h-4" />
            New Event
          </Button> */}
        </div>
        <div className="flex items-center gap-4">
          {/* <Button variant="ghost" size="sm">
            <UsersIcon className="w-4 h-4" />
            Manage Participants
          </Button> */}
          {/* <Button variant="ghost" size="sm">
            <SettingsIcon className="w-4 h-4" />
            Settings
          </Button> */}
        </div>
      </header>
      <div className="flex-1 grid grid-cols-[1fr_300px] gap-6 p-6">
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-7 text-center text-sm font-medium border-b border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 py-2">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="grid grid-cols-7 grid-rows-[repeat(24,minmax(40px,1fr))] text-center text-xs font-medium border-r border-gray-200 dark:border-gray-800">
            {Array.from({ length: 24 * 7 }).map((_, i) => (
              <div
                key={i}
                className={`border-b border-r border-gray-200 dark:border-gray-800 relative ${
                  i % 7 === 0 ? "border-l" : i >= 24 * 6 ? "border-b-0" : ""
                }`}
              >
                <div className="absolute inset-0 bg-[#55efc4]/50 dark:bg-[#55efc4]/30 rounded-md" />
                <div className="absolute inset-0 bg-[#ffeaa7]/50 dark:bg-[#ffeaa7]/30 rounded-md" />
                <div className="absolute inset-0 bg-[#fd79a8]/50 dark:bg-[#fd79a8]/30 rounded-md" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  {i % 24 === 0 && (
                    <div className="absolute left-0 -translate-x-1/2 text-right pr-2 w-20">{Math.floor(i / 24)}:00</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Participants</h2>
            <div className="flex items-center gap-2">
              {/* <Avatar>
                <img src="/placeholder.svg" alt="@username" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar> */}
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">johndoe@example.com</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* <Avatar>
                <img src="/placeholder.svg" alt="@username" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar> */}
              <div>
                <div className="font-medium">Jane Smith</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">janesmith@example.com</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* <Avatar>
                <img src="/placeholder.svg" alt="@username" />
                <AvatarFallback>DW</AvatarFallback>
              </Avatar> */}
              <div>
                <div className="font-medium">David Wilson</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">davidwilson@example.com</div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Overlapping Free Time</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#55efc4]/50 dark:bg-[#55efc4]/30 rounded-md p-4 flex flex-col items-center justify-center">
                <div className="text-2xl font-semibold">9:00 AM</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">3 participants available</div>
              </div>
              <div className="bg-[#ffeaa7]/50 dark:bg-[#ffeaa7]/30 rounded-md p-4 flex flex-col items-center justify-center">
                <div className="text-2xl font-semibold">2:00 PM</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">2 participants available</div>
              </div>
              <div className="bg-[#fd79a8]/50 dark:bg-[#fd79a8]/30 rounded-md p-4 flex flex-col items-center justify-center">
                <div className="text-2xl font-semibold">6:00 PM</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">1 participant available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const latestPost = await api.post.getLatest();

//   return (
    
//   );
// }



function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}