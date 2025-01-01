export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex w-full min-h-screen items-center justify-center px-5">
      <h1 className="text-gradient-animation text-white text-[20px] font-robot">
        Hold tight, the magic is loading... good things take time (and a little
        bit of code)!
      </h1>
    </div>
  );
};
