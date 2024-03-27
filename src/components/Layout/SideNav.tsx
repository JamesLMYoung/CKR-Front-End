import { SideNavigation } from '@neo4j-ndl/react';
import { useState } from 'react';
import { MagnifyingGlassIconOutline, DbmsIcon, BellAlertIconOutline } from '@neo4j-ndl/react/icons';

export default function SideNav() {
  const [expanded, setOnExpanded] = useState(true);
  const [selected, setSelected] = useState('instances');
  const handleClick = (item: string) => (e: any) => {
    e.preventDefault();
    setSelected(item);
  };
  const fullSizeClasses = 'n-w-full n-h-full';

  return (
    <div
      style={{
        height: 'calc(100vh - 68px)',
        minHeight: '700px',
        display: 'flex',
      }}
    >
      <SideNavigation iconMenu={true} expanded={expanded} onExpandedChange={setOnExpanded}>
        <SideNavigation.List>
          <SideNavigation.Item
            href='#'
            selected={selected === 'search'}
            onClick={handleClick('search')}
            icon={<MagnifyingGlassIconOutline className={fullSizeClasses} />}
          >
            Files
          </SideNavigation.Item>
          <SideNavigation.Item
            href='#'
            selected={selected === 'instances'}
            onClick={handleClick('instances')}
            icon={<DbmsIcon className={fullSizeClasses} />}
          >
            People
          </SideNavigation.Item>
          <SideNavigation.GroupHeader>Filters</SideNavigation.GroupHeader>
          <SideNavigation.Item
            href='#'
            selected={selected === 'notifications'}
            onClick={handleClick('notifications')}
            icon={<BellAlertIconOutline className={fullSizeClasses} />}
          >
            Operations
          </SideNavigation.Item>
        </SideNavigation.List>
      </SideNavigation>
    </div>
  );
}
