<?php

function nwl_get_home($data) {
  $home_id = get_option('page_on_front');
  $post = get_post($home_id);
  if ($post) return $post;
  else return array(
    "error" => 404,
    "message" => 'Page not Exist',
    "id" => $home_id,
  );
}

function register_homepage_route() {
   register_rest_route( 'next-with-love', '/home', array(
    'methods' => 'GET',
    'callback' => 'nwl_get_home',
  ));
}

add_action( 'rest_api_init', 'register_homepage_route');
