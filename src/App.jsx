
import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './assets/TwitterFollowCard'


const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]
  

export function App () {


    return (
        <div className='App'>
            {users.map( user => {
                const { userName, name, isFollowing} = user
                return(
                    <TwitterFollowCard
                    key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })}
        </div>
    )
}