import FlexContainer from './components/FlexContainer'
import Controls from './components/Controls'
import { Fragment } from '@wordpress/element'

// import FlexContainer from './components/FlexContainer'

const { __ } = wp.i18n // Import __() from wp.i18n
const { registerBlockType } = wp.blocks // Import registerBlockType() from wp.blocks

registerBlockType('cgb/block-gutenberg-external-blocks-flex-container', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Flex Container'), // Block title.
  icon: 'editor-contract', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'Guttenberg External Blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__('Container'), __('Flex')],
  attributes: {
    style: {
      type: 'object',
      default: null,
    },
  },
  edit: ({ attributes, setAttributes }) => {
    return (
      <Fragment>
        <Controls attributes={attributes} setAttributes={setAttributes} />
        <FlexContainer
          additionalClasses={attributes.className ? attributes.className : ''}
          isEdit
          style={attributes.style}
        />
      </Fragment>
    )
  },
  save: ({ attributes }) => {
    return (
      <FlexContainer
        additionalClasses={attributes.className ? attributes.className : ''}
        style={attributes.style}
      />
    )
  },
})
