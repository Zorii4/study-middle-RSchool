const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments"

const getData = (url: string): Promise<Response> => {
  const comments = fetch(url)
  return comments
}

interface Comments {
  id: string
  email: string
}

getData(COMMENTS_URL)
  .then((data) => data.json())
  .then((res: Comments[]) =>
    res.forEach((el) => console.log("ID:", el.id, "Email:", el.email))
  )
