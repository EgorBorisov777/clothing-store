import './Post.css'
export function Post(props) {
  const { title, price, description, category, image } = props
  return (
    <>
      <div className="post">
        <h1>{title}</h1>
        <h2>{price} $</h2>
        <p>{description}</p>
        <p>{category}</p>
        <img src={image} alt="фото" />
      </div>
    </>
  )
}
