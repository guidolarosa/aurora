import clsx from "clsx";

const CircularFlag = ({ className }: { className?: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className={clsx("w-8 h-8 border-5 border-blue-400 rounded-xl flex items-center justify-center bg-white", className)}>
        <div className="w-3 aspect-square bg-orange-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default CircularFlag;
