import { useState } from 'react'

import InputSearchWithDebounder from '../components/views/InputSearchWithDebounder'

const Characters = () => {
  const [searcher, setSearcher] = useState('')

  return (
    <div className="container-fluid">
      <InputSearchWithDebounder namePage="Personaje"
        setSearcher={ setSearcher }
      />
      <span>{ searcher }</span>
    </div>
  )
}

export default Characters
