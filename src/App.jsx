import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

{/* eslint-disable-next-line */ }
const post = [
  {
    id: 1,
    author: {
      avatarUrl: `https://github.com/jairodoni.png`,
      name: 'Jairo Doni',
      role: 'Desenvolvedor Frontend'
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design / doctorcare" },
    ],
    publishedAt: new Date('2023-07-02 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: `https://github.com/Ro7Rinke.png`,
      name: 'Ro7Rinke',
      role: 'Desenvolvedor Frontend'
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design / doctorcare" },
    ],
    publishedAt: new Date('2023-07-02 20:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: `https://github.com/Shirakusa.png`,
      name: 'Guilherme Machado Oliveira',
      role: 'Desenvolvedor Fullstack'
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design / doctorcare" },
    ],
    publishedAt: new Date('2023-07-02 20:00:00')
  }
]


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
