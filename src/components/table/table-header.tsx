import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<"th"> {}

export function TableHeader(props: Readonly<TableHeaderProps>) {
  return (
    <th
      className="px-3 py-4 text-sm font-semibold text-left" 
      {...props}>
        {props.children}
      </th>
  );
}
