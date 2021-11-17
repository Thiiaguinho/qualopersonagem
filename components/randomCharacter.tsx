import { NextPage } from "next"
import Image from 'next/image'
import { useState } from "react"
import characters from "../utils/characters"

const RandomCharacter: NextPage = () => {
  const [name] = useState(characters[Math.floor(Math.random() * (characters.length - 1))])

  return (<div className="w-40 h-40 bg-yellow-400 rounded-lg">
    <Image
      className="object-contain"
      src={`/images/${name}.png`}
      alt={name}
      width={320}
      height={320}
    />

    <div className="w-32 h-6 ml-4 -mt-4 bg-blue-200 rounded-lg ">
      <p className='text-center'>{name}</p>
    </div>
  </div>
  )
}

export default RandomCharacter