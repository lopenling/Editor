type SkeletonType = {
  height: number;
  number: number;
};
export default function Skeleton({ height, number }: SkeletonType) {
  const items = Array.from({ length: number }, (_, index) => index + 1);
  return (
    <div role="status" className="flex h-full w-full animate-pulse flex-col space-y-3.5">
      {items.map((l, index) => {
        return (
          <div
            key={'skeleton' + index}
            className=" mb-2.5 block w-full max-w-sm rounded-sm border border-gray-200 bg-gray-200 p-6 shadow  hover:bg-gray-100 dark:border-gray-700  dark:bg-gray-700 dark:hover:bg-gray-700"
            style={{ height: height }}
          ></div>
        );
      })}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
