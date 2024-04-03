import { ComponentProps } from "react";

interface TableProps extends ComponentProps<"table"> {
    children: React.ReactNode;
}

export function Table(props: Readonly<TableProps>) {
  return (
    <div className="border border-white/10 rounded-lg">
      <table className="w-full" {...props}>
        {props.children}
      </table>
    </div>
  );
}
