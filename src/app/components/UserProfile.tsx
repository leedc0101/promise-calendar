import { api } from "~/trpc/server";
import Image from "next/image";

export const UserProfile = async () => {
  const user = await api.user.me();

  return (
    <div className="flex gap-1 px-2">
      <Image
        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        src={
          user.image ??
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        alt=""
        width={24}
        height={24}
      />

      <div>{user.name}</div>
    </div>
  );
};
