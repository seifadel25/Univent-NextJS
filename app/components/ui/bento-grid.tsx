import Image from "next/image";
import { cn } from "../../utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4  md:grid-cols-5 ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string | React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border-2 border-gray-200  bg-white p-4 transition duration-200 hover:border-2 hover:shadow-xl dark:border-gray-700 dark:border-white/[0.2] dark:bg-[#40414f]/5 dark:shadow-none",
        className,
      )}
    >
      <Image
        src={header?.toString() || ""}
        alt={title?.toString() || ""}
        className="h-64 w-full rounded-lg object-contain md:object-cover"
        width={800}
        height={450}
      />
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-base font-light text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
