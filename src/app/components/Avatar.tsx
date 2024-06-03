export const Avatar = ({ src }: { src: string }) => {
  return (
    <img
      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
      src={src}
      alt=""
    />
  );
};
