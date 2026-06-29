import { useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

export interface SelectOption {
  value: string;
  title: string;
}

interface Props {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  className?: string;
}

export default function Select({ value, options, onChange, className }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className={twMerge(
          "w-full bg-[#3d7b70] rounded-md px-3 py-1 flex justify-between items-center text-white tracking-wider text-lg",
          className,
        )}
      >
        <div className="flex items-center mr-4">{selected?.title}</div>

        <AiOutlineDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {/* Dropdown */}

      {open && (
        <div
          className="
          absolute left-0 right-0 mt-1
          rounded-md overflow-hidden bg-[#222]
          shadow-2xl z-50"
        >
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`
								w-full text-left px-6
              	py-4 flex gap-4 transition
              ${option.value === value ? "bg-[#005b52]" : "hover:bg-[#333]"}
              `}
            >
              <div>
                <div className="text-white text-md">{option.title}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
