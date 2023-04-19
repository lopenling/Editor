export default function Skeleton() {
  return (
    <div role="status" className="flex flex-col gap-10 max-w-sm animate-pulse">
      <div className=" h-24 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-24 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-24 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-24 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[360px] mb-2.5"></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
