<?php 
  function nwl_enqueue_custom_admin_script() {
  wp_enqueue_script('514908bffb652963', '../../../../app/.next/static/chunks/webpack-514908bffb652963.js}');wp_enqueue_script('6e4ba497ae0c8a3f', '../../../../app/.next/static/chunks/framework-6e4ba497ae0c8a3f.js}');wp_enqueue_script('7e73d61bce33e887', '../../../../app/.next/static/chunks/main-7e73d61bce33e887.js}');wp_enqueue_script('33c9b067954c4d30', '../../../../app/.next/static/chunks/0c428ae2-33c9b067954c4d30.js}');wp_enqueue_script('721c561a032515cb', '../../../../app/.next/static/chunks/252-721c561a032515cb.js}');wp_enqueue_script('79065a49752c3b78', '../../../../app/.next/static/chunks/pages/index-79065a49752c3b78.js}');
  }
  add_action( 'admin_enqueue_scripts', 'nwl_enqueue_custom_admin_script' );
