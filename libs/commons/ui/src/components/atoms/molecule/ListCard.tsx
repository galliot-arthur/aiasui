"use client";

import { ArrowDownward } from "@material-ui/icons";
import classNames from "classnames";
import { ReactNode, useState } from "react";
import { i18n } from "../../../i18n";

interface Props {
  title: string;
  items?: ReactNode;
  children?: ReactNode;
}

export function ListCard({ title, items, children }: Props) {
  const [extend, setExtend] = useState(false);
  return (
    <div className="p-4 relative">
      <h2>{title}</h2>
      {children && <div className="my-2">{children}</div>}
      {extend && items && <ul className="flex flex-col mt-1">{items}</ul>}
      <div className="absolute top-2 right-2">
        <button
          onClick={() => setExtend((e) => !e)}
          className="rounded-full px-1 text-gray-500 hover:text-black hover:bg-gray-100 h-8 w-8"
          title={i18n.common.button.extend}
        >
          <ArrowDownward
            color="inherit"
            fontSize="inherit"
            className={classNames("-mt-1 ", extend ? "rotate-180" : "rotate-0")}
          />
        </button>
      </div>
    </div>
  );
}
