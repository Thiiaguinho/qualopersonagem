import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import RandomCharacter from '../components/randomCharacter'
import charactersList from '../utils/characters'

const Home: NextPage = () => {
  const initalState = charactersList.map(character => ({ 'name': character, 'clicked': false }))
  const [characters, setCharacters] = useState(initalState)

  const setClicked = useCallback((name: string) => {

    const newList = characters.map(character => {
      if (character.name === name) {
        character.clicked = !character.clicked
      }
      return character
    })

    setCharacters(newList)
  }, [characters])


  return (
    <div className="bg-gray-800">
      <Head>
        <title>QualPersonagem</title>
        <meta name="description" content="Jogo de descobrir o personagem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid min-h-screen gap-4 p-4 min-w-screen sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">

        <RandomCharacter />

        {characters.map(({ name, clicked }) => (
          <div className={`w-40 h-40 rounded-lg ${clicked ? 'bg-red-600' : 'bg-blue-600'}  `}
            key={name}
            onClick={() => setClicked(name)}
          >
            <Image
              className="object-contain"
              src={`/images/${name}.png`}
              alt={name}
              width={320}
              height={320}
            />
            <div className="w-32 h-6 ml-4 -mt-4 bg-blue-200 rounded-lg">
              <p className='text-center'>{name}</p>
            </div>
          </div>
        ))
        }
      </main>

    </div >
  )
}

export default Home
