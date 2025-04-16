interface SkeletonProps {
  className?: string;
}

function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={` bg-[#8b8b8b] rounded-md animate-pulse ${className}`}
    ></div>
  );
}

export default Skeleton;
