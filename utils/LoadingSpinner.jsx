export const LoadingSpinner = ({ color }) => {
  return (
    <div className="flex justify-center items-center">
      <svg
        className={`animate-spin h-5 w-5 text-${color}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
    </div>
  );
};

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex w-full min-h-screen items-center justify-center px-5">
      <h1 className="text-gradient-animation text-white text-[16px] font-bold font-MajorMonoDisplay">
        Hold tight, the magic is loading... good things take time (and a little
        bit of code)!
      </h1>
    </div>
  );
};
