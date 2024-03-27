import PersonList from './Person-List/Person-List';

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
      <PersonList></PersonList>
    </div>
  );
}