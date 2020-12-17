import React from 'react'
import PageTemplate from '../components/templates/PageTemplate'
import Instructs from '../components/Instruction/Instruction'

const Instruction = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <PageTemplate>
      <Instructs />
    </PageTemplate>
  )
}

export default Instruction