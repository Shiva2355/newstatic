import './index.css'
const TabItem = props => {
  const {EachItem} = props
  console.log(EachItem)
  const {imageURL, title, description} = EachItem
  return (
    <div>
      <div className="card">
        <img className="img" src={imageURL} />
        <h1 className="heading-Item">{title}</h1>
        <p className="description-tabItem">{description}</p>
      </div>
    </div>
  )
}
export default TabItem

