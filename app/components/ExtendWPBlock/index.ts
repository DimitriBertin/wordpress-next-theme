import { addFilter } from '@wordpress/hooks'

export default () => {
  function extendColumnRender(settings, name) {
    console.log('AAAAAAhhhhh ------------------', { settings, name });
    return settings;
  }

  addFilter(
    'blocks.registerBlockType',
    'core/columns',
    extendColumnRender,
  );
}

