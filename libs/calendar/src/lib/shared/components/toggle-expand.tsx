import { JSX, PropsWithChildren, useState } from 'react';

import { IconChevronDown, IconChevronUp } from './icons';

interface ToggleExpandProps {
  title?: string;
  icon?: JSX.Element;
  isShowPoints?: boolean;
  className?: string;
  containerMarginTop?: string;
  contentSpacing?: string;
  initialIsExpanded?: boolean;
  isExpanded?: boolean;
}

export function ToggleExpand({
  title,
  children,
  icon,
  className,
  containerMarginTop = 'mt-4',
  contentSpacing = 'space-y-6',
  isShowPoints = true,
  initialIsExpanded = true,
}: PropsWithChildren<ToggleExpandProps>) {
  const [isExpanded, setIsExpanded] = useState(initialIsExpanded);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${containerMarginTop}`}>
      <div className={`p-2 ${className}`}>
        <button
          onClick={handleToggleExpand}
          className='flex items-center space-x-2 w-full justify-between mb-4 hover:bg-gray-50 rounded bg-transparent'
        >
          <span className='flex items-center space-x-2'>
            {isExpanded ? (
              <>
                <IconChevronUp className='w-5 h-5' />
                {icon}
              </>
            ) : (
              <>
                <IconChevronDown className='w-5 h-5' />
                {icon}
              </>
            )}
            <span className='text-sm font-light text-gray-600 capitalize'>{title}</span>
          </span>

          {isExpanded ? null : (
            <div className='text-zinc-500 text-xl'>{isShowPoints ? <span>•••</span> : null}</div>
          )}
        </button>
        {isExpanded ? <div className={`${contentSpacing}`}>{children}</div> : null}
      </div>
    </div>
  );
}
