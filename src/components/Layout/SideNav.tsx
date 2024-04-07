import { SideNavigation } from '@neo4j-ndl/react';
import { useState } from 'react';
import { MagnifyingGlassIconOutline, DbmsIcon, BellAlertIconOutline } from '@neo4j-ndl/react/icons';
import { Route, Routes, useNavigate } from 'react-router-dom';
import FileForm from './../QuerryForms/FileForm'
import "./SideNav.css";

export default function SideNav() {
  const [expanded, setOnExpanded] = useState(true);
  const [selected, setSelected] = useState('files');
  const navigate = useNavigate();
  const handleClick = (item: string) => (e: any) => {
    e.preventDefault();
    setSelected(item);
    navigate(item);
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
            selected={selected === 'files'}
            onClick={handleClick('files')}
            icon={<MagnifyingGlassIconOutline className={fullSizeClasses} />}
          >
            Files
          </SideNavigation.Item>
          <SideNavigation.Item
            href='#'
            selected={selected === 'people'}
            onClick={handleClick('people')}
            icon={<DbmsIcon className={fullSizeClasses} />}
          >
            People
          </SideNavigation.Item>
          <SideNavigation.GroupHeader>Filters</SideNavigation.GroupHeader>
          <Routes>
            <Route path="/files" element={<FileForm/>}></Route>
          </Routes>
        </SideNavigation.List>
      </SideNavigation>
    </div>
  );
}
