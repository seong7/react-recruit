import React, { ReactNode } from 'react';
import Link from 'next/link';

export interface InternalLinkProps {
  children: ReactNode;
  href: `/post/${number}`;
}

export const InternalLink = ({ children, href }: InternalLinkProps) => {
  return <Link href={href}>{children}</Link>;
};
