## Child

```tsx
interface Props {
  onSelectItem: (item: string) => void
}

const ActiveContainer = ({ onSelectItem }: Props) => {
  return (
    <div className="activeContainer">
      <button onClick={() => onSelectItem('Send to parent')}>
        Send to parent
      </button>
    </div>
  )
}
export default ActiveContainer
```

## Parent

```tsx
import ActiveContainer from '../components/ActiveContainer/ActiveContainer'

const Home = () => {
  const handleSelectItem = (item: string) => console.log(item) 
  //setState

  return (
    <main>
      <ActiveContainer onSelectItem={handleSelectItem} />
    </main>
  )
}

export default Home
```
