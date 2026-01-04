import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://i.pinimg.com/736x/2b/7b/10/2b7b1095daa1f0d9891fb41543570642.jpg',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://i.pinimg.com/1200x/1c/7f/b8/1c7fb847393648930ad72d153aed8533.jpg',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://i.pinimg.com/736x/90/9a/61/909a612106a2a8596dd6b225ca08c24b.jpg',
      intro: '',
      tag: 'Underbanked'
    }

  ]
  return (
    <div>
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App
