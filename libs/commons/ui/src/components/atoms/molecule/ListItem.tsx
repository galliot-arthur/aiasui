"use client";

import { DeleteOutline } from "@material-ui/icons";
import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  deleteButton?: {
    action: () => Promise<unknown>;
    description: string;
  };
  content?: ReactNode;
  footer?: ReactNode;
  links: Array<{
    href: string;
    title: string;
    icon: ReactNode;
  }>;
}

export function ListItem({
  title,
  subtitle,
  deleteButton,
  links,
  content,
  footer,
}: Props) {
  return (
    <li className="relative border-t-1 border-gray-100 py-3">
      <p className="text-sm">{title}</p>
      <p className="text-gray-500 text-xs">{subtitle}</p>
      {footer && <p className="text-xs text-gray-500">{footer}</p>}
      {content && <p className="text-gray-600 text-xs my-1.5">{content}</p>}

      <div className="flex flex-row">
        {links.map((link) => (
          <div>
            <a
              className="text-blue-300 hover:text-blue-500"
              href={link.href}
              target="_blank"
              title={link.title}
            >
              {link.icon}
            </a>
          </div>
        ))}
      </div>

      {deleteButton && (
        <button
          onClick={deleteButton.action}
          className="absolute top-1 right-0 text-red-300 hover:bg-red-100 rounded-full w-8 h-8 hover:text-red-500"
          aria-roledescription={deleteButton.description}
          title={deleteButton.description}
        >
          <DeleteOutline fontSize="inherit" color="inherit" className="-mt-1" />
        </button>
      )}
    </li>
  );
}
