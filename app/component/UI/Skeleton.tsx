import { Card } from "flowbite-react";

type SkeletonType = {
  height: number;
  number: number;
};
export default function Skeleton({ height, number }: SkeletonType) {
  const items = Array.from({ length: number }, (_, index) => index + 1);
  return (
    <div
      role="status"
      className="flex flex-col space-y-3.5 w-full h-full animate-pulse"
    >
      {items.map((l, index) => {
        return (
          <Card
            key={"skeleton" + index}
            className=" bg-gray-200 rounded-sm dark:bg-gray-700 w-full mb-2.5"
            style={{ height: height }}
          ></Card>
        );
      })}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
