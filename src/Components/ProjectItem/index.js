import './index.css'
const ProjectItem = props => {
  const {EachItem, SelectionItem} = props
  const {displayText, tabId} = EachItem
  console.log(EachItem)

  const StateItem = () => {
    SelectionItem(tabId)
  }
  return (
    <div>
      <div className="CenterStates">
        <h1 onClick={StateItem} className="project-item-title">
          {displayText}
        </h1>
      </div>
    </div>
  )
}
export default ProjectItem
