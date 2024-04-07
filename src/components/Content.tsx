import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PersonList from './Person-List/Person-List'
import FileList from './File-List/File-List'

export default function Content() {

  return (
    <div
      className='n-bg-palette-neutral-bg-default'
      style={{
        width: '100%',
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Routes>
        <Route path="/people" element={<PersonList/>}></Route>
        <Route path="/files" element={<FileList/>}></Route>
      </Routes>
    </div>
  );
}