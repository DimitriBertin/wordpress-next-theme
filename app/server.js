const fs = require('fs')
const file = '../wp/themes/next-with-love/inc/next.php'
const manifest = require('./.next/build-manifest.json')

if (fs.existsSync(file)) {
  fs.unlinkSync(file)
}

const content = ` function nwl_enqueue_custom_admin_script() {
  ${manifest.pages['/'].map((page) => {
    if (page.includes('/chunks/')) {
      return `wp_enqueue_script('${page.split('-')[1].replace('.js', '')}', '../../../../app/.next/${page}}');`
    }
  }).join('\r')}
  }
  add_action( 'admin_enqueue_scripts', 'nwl_enqueue_custom_admin_script' );
`


fs.appendFile(file, `<?php \n ${content}`, () => {
  console.log('File created with success')
})