<?php
/**
 * Menu API V2
 */

/**
 * Add some location 
 * Header 
 * Footer 
 * Sidebar 
 * 
 * Just kind of exemple location ----
 */
function next_custom_location_menu(){
  register_nav_menus(
    array(
      'primary' => __( 'Header Menu' ),
      'footer' => __( 'Footer Menu' ),
      'sidebar' => __( 'Sidebar Menu' )
    )
  );
}

add_action( 'init', 'next_custom_location_menu' );

/**
 * /wp-json/next-with-love/menu/...
 * Add endpoint to custom menu by location
 * @todo: 
 * - Add active 
 * - Add ancestor Active
 * - Add hierarchie 
 */

function next_menu($data) {
  $slug = $data['slug'];
  $menu = wp_get_nav_menu_items(get_nav_menu_locations()[$slug]);
  return $menu;
}

function next_api_routes() {
  register_rest_route( 'next-with-love', '/menu/(?P<slug>[a-zA-Z0-9-]+)', array(
    'methods' => 'GET',
    'callback' => 'next_menu',
  ));
}

add_action( 'rest_api_init', 'next_api_routes');
