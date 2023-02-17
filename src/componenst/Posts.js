import { useEffect, useState } from 'react'
import { Post } from './Post'

export function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState('')

  useEffect(() => {
    async function dfdsfFDPM() {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const posts = await res.json()
        setPosts(posts)
      } catch (error) {
        setError(error.massage)
      }
      setIsLoading(false)
    }
    dfdsfFDPM()
  }, [])

  //   useEffect(() => {
  //     fetch('https://fakestoreapi.com/products')
  //       .then((res) => res.json())
  //       .then((posts) => setPosts(posts))
  //       .catch((error) => setError(error.message))
  //       .finally(() => setIsLoading(false))
  //   }, [])

  if (error) {
    return <h1 style={{ color: 'red' }}>Error:{error}</h1>
  }

  const filterCloses = posts.filter((clother) => {
    return clother.title.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <>
      <h1>Posts</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => setValue(event.target.value)}
      />
      <hr />
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          filterCloses.map((post) => <Post key={post.id} {...post} />)
        )}
      </div>
    </>
  )
}
