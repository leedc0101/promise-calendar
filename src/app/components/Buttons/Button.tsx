export const PrimaryButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const GhostButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className="rounded bg-transparent px-4 py-2 font-bold text-blue-500 transition duration-150 ease-in-out hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
