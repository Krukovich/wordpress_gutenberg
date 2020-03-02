// Import external components
import Card from './components/Card'
import Controls from './components/Controls'

const { __ } = wp.i18n // Import __() from wp.i18n
const { registerBlockType } = wp.blocks // Import registerBlockType() from wp.blocks
import { Fragment } from '@wordpress/element'

registerBlockType('cgb/block-gutenberg-external-blocks-product-card', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Product Card'), // Block title.
  icon: 'cart', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'Guttenberg External Blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__('Product'), __('Card')],
  attributes: {
    name: {
      type: 'string',
      default: 'Apple iPhone XS 64GB',
    },
    imageUrl: {
      type: 'string',
      default:
        'https://cdn.pixabay.com/photo/2017/10/15/16/21/iphone-2854322_960_720.png',
    },
    imageAlt: {
      type: 'string',
      default: 'Apple iPhone XS 64GB Image',
    },
    price: {
      type: 'string',
      default: '1919.00',
    },
    salePrice: {
      type: 'string',
      default: null,
    },
    description: {
      type: 'string',
      default:
        'Apple iOS, экран 5.8" AMOLED (1125x2436), Apple A12, ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 12 Мп',
    },
    url: {
      type: 'string',
      default: 'https://www.apple.com/',
    },
    stickers: {
      type: 'object',
      default: {
        isHot: false,
        isNew: false,
      },
    },
  },
  edit: ({ attributes, setAttributes }) => (
    <Fragment>
      <Controls attributes={attributes} setAttributes={setAttributes} />
      <Card
        additionalClasses={attributes.className ? attributes.className : ''}
        data={attributes}
        preventClick={true}
      />
    </Fragment>
  ),
  save: ({ attributes }) => (
    <Card
      additionalClasses={attributes.className ? attributes.className : ''}
      data={attributes}
    />
  ),
})
