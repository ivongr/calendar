type svgProps = React.SVGProps<SVGSVGElement>;

export function IconChevronDown(props: svgProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
      className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 9l6 6l6 -6' />
    </svg>
  );
}

export function IconChevronLeft(props: svgProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
      className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M15 6l-6 6l6 6' />
    </svg>
  );
}

export function IconChevronRight(props: svgProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
      className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9 6l6 6l-6 6' />
    </svg>
  );
}

export function IconChevronUp(props: svgProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
      className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-up`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 15l6 -6l6 6' />
    </svg>
  );
}

export function IconSidebarLeftCollapse(props: svgProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
      className={`icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-left-collapse`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
      <path d='M9 4v16' />
      <path d='M15 10l-2 2l2 2' />
    </svg>
  );
}

export function IconSidebarLeftExpand(props: svgProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
      className={`icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-left-expand`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
      <path d='M9 4v16' />
      <path d='M14 10l2 2l-2 2' />
    </svg>
  );
}
