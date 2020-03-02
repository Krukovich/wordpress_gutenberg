// Import external components
import LoginForm from "./components/LoginForm"
import Controls from "./components/Controls"

const { __ } = wp.i18n // Import __() from wp.i18n
const { registerBlockType } = wp.blocks // Import registerBlockType() from wp.blocks

import { Fragment } from '@wordpress/element'

registerBlockType('cgb/block-gutenberg-external-blocks-login-form', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Login Form'), // Block title.
  icon: 'buddicons-buddypress-logo', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'Guttenberg External Blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__('Login'), __('Form')],

  attributes: {
      position:{
        type: "string",
        default: null,
      },
      formName: {
          type: "string",
          default: "Login Form",
      },
      titleSize: {
        type: "string",
        default: 16,
      },
  },

  edit: ({ attributes, setAttributes }) => (
    <Fragment>
        <Controls setAttributes={setAttributes}/>
        <LoginForm data={attributes} />
    </Fragment>
  ),

  save: ({ attributes }) => (
    <Fragment>
        <LoginForm data={attributes} />
    </Fragment>
  ),
})
