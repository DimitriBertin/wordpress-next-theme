<?php 
  function nwl_enqueue_custom_admin_script() {
  wp_enqueue_script('514908bffb652963', '../../../../app/.next/static/chunks/webpack-514908bffb652963.js}');
  }
  add_action( 'admin_enqueue_scripts', 'nwl_enqueue_custom_admin_script' );