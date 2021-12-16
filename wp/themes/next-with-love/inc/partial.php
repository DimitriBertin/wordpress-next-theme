<?php

function nwl_partial($data) {
  // $slug = $data['slug'];
  $menu = wp_get_nav_menu_items(get_nav_menu_locations()['primary']);

  return array(
    'menu' => $menu,
    'widget' => array(
      'type' => 'type',
    ),
    'copyright' => 'Next with Love - 2022',
  );
}

function nwl_api_partial() {
  register_rest_route( 'next-with-love', '/partial', array(
    'methods' => 'GET',
    'callback' => 'nwl_partial',
  ));
}

add_action( 'rest_api_init', 'nwl_api_partial');