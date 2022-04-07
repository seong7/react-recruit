import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

export interface InternalLinkProps extends LinkProps {
  children: ReactNode;
  href: `/post/${number}`;
}

export const InternalLink = ({
  href,
  children,
  ...rest
}: InternalLinkProps) => {
  return (
    <Link href={href} {...rest}>
      <a>{children}</a>
    </Link>
  );
};
