import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<"td"> {}

export function TableCell(props: Readonly<TableCellProps>) {
  return (
    <td
      {...props}
      className={twMerge("px-3 py-4 text-sm text-zinc-300", props.className)}>
      {props.children}
    </td>
  );
}
