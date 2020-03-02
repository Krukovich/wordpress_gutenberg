import './style.scss'
const { InnerBlocks } = wp.blockEditor

const FlexContainer = ({ isEdit, additionalClasses, style }) => {
  const editStyle = isEdit ? border : null

  return (
    <div
      className={`flexContainer ${additionalClasses}`}
      style={{ ...style, ...editStyle }}
    >
      {isEdit ? <InnerBlocks /> : <InnerBlocks.Content />}
    </div>
  )
}

const border = {
  border: '1px solid black',
}

export default FlexContainer
