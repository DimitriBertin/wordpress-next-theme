<?php

function nwl_partial($data) {
  // $slug = $data['slug'];
  $menu = wp_get_nav_menu_items(get_nav_menu_locations()['primary']);
  $footerMenu = wp_get_nav_menu_items(get_nav_menu_locations()['footer']);
  $options = get_theme_mod('custom_settings', '');

  return array(
    'menu' => $menu,
    'footerMenu' => $footerMenu,
    'options' => $options,
  );
}

function nwl_api_partial() {
  register_rest_route( 'next-with-love', '/partial', array(
    'methods' => 'GET',
    'callback' => 'nwl_partial',
  ));
}

add_action( 'rest_api_init', 'nwl_api_partial');