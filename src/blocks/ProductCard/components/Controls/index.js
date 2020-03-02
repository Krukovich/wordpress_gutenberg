const { __ } = wp.i18n
const { InspectorControls, MediaUpload } = wp.blockEditor
const { PanelBody } = wp.components

const Controls = ({ attributes, setAttributes }) => {

  const onTextInputChanged = (e, attributeName) => {
    const value = e.target.value

    setAttributes({
      [attributeName]: value,
    })
    
  }

  const onStickerChanged = (e, attributeName) => {
    const value = e.target.checked
    setAttributes({
      stickers: {
        ...attributes.stickers,
        [attributeName]: value,
      },
    })
  }

  const selectImage = value => {
    setAttributes({
      imageUrl: value.sizes.full.url,
    })
    setAttributes({
      imageAlt: value.alt,
    })
  }

  return (
    <InspectorControls>
      <PanelBody title={__('Product information')} initialOpen={true}>
        <label>Product name</label>
        <input
          type='text'
          name='productName'
          onChange={e => onTextInputChanged(e, 'name')}
          value={attributes.name}
        />
        <br />
        <label>Product description</label>
        <input
          type='text'
          name='productDescription'
          onChange={e => onTextInputChanged(e, 'description')}
          value={attributes.description}
        />
        <br />
        <label>Product URL</label>
        <input
          type='text'
          name='productUrl'
          onChange={e => onTextInputChanged(e, 'url')}
          value={attributes.url}
        />
      </PanelBody>

      <PanelBody title={__('Product image')} initialOpen={true}>
        <MediaUpload
          onSelect={selectImage}
          render={({ open }) => {
            return <img src={attributes.imageUrl} onClick={open} />
          }}
        />
      </PanelBody>

      <PanelBody title={__('Product price')} initialOpen={true}>
        <label>Regular price</label>
        <input
          type='number'
          name='productPrice'
          onChange={e => onTextInputChanged(e, 'price')}
          value={attributes.price}
        />
        <br />
        <label>Sale Price</label>
        <input
          type='number'
          name='productSalePrice'
          onChange={e => onTextInputChanged(e, 'salePrice')}
          value={attributes.salePrice}
        />
      </PanelBody>
      <PanelBody title={__('Product stickers')} initialOpen={true}>
        <input
          type='checkbox'
          name='productLabelIsHot'
          onChange={e => onStickerChanged(e, 'isHot')}
          checked={attributes.stickers.isHot}
        />
        <label>Hot</label>
        <br />

        <input
          type='checkbox'
          name='productLabelIsNew'
          onChange={e => onStickerChanged(e, 'isNew')}
          checked={attributes.stickers.isNew}
        />
        <label>New</label>
      </PanelBody>
    </InspectorControls>
  )
}

export default Controls
