import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { RoutePath } from './internalRouter';

export interface InternalLinkProps extends LinkProps {
  children: ReactNode;
  href: RoutePath;
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
