import { useEffect } from '@wordpress/element'

const { __ } = wp.i18n
const { InspectorControls } = wp.blockEditor
const { PanelBody } = wp.components

const Controls = ({ attributes, setAttributes }) => {
  useEffect(() => {
    if (!attributes.style) {
      setAttributes({
        style: {
          flexWrap: 'nowrap',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        },
      })
    }
  }, [])

  const onStyleChanged = (e, attrName) => {
    const value = e.target.value
    setAttributes({
      style: {
        ...attributes.style,
        [attrName]: value,
      },
    })
  }

  return (
    <InspectorControls>
      <PanelBody title={__('Container settings')} initialOpen={true}>
        <label>Wrap </label>
        <select
          onChange={e => onStyleChanged(e, 'flexWrap')}
          value={attributes.style ? attributes.style.flexWrap : null}
        >
          <option value='nowrap'>nowrap</option>
          <option value='wrap'>wrap</option>
        </select>

        <br />

        <label>Direction </label>
        <select
          onChange={e => onStyleChanged(e, 'flexDirection')}
          value={attributes.style ? attributes.style.flexDirection : null}
        >
          <option value='row'>row</option>
          <option value='row-reverse'>row-reverse</option>
          <option value='column'>column</option>
          <option value='column-reverse'>column-reverse</option>
        </select>

        <br />

        <label>Justify content </label>
        <select
          onChange={e => onStyleChanged(e, 'justifyContent')}
          value={attributes.style ? attributes.style.justifyContent : null}
        >
          <option value='flex-start'>flex-start</option>
          <option value='center'>center</option>
          <option value='flex-end'>flex-end</option>
        </select>

        <br />

        <label>Align items </label>
        <select
          onChange={e => onStyleChanged(e, 'alignItems')}
          value={attributes.style ? attributes.style.alignItems : null}
        >
          <option value='flex-start'>flex-start</option>
          <option value='center'>center</option>
          <option value='flex-end'>flex-end</option>
        </select>
      </PanelBody>
    </InspectorControls>
  )
}

export default Controls
