<?php 
require_once("inc/api.php");
require_once("inc/partial.php");
require_once("inc/menu.php");
require_once("inc/options.php");
require_once("inc/next.php");

$theme = 'next-with-love';

// update_option( 'home', 'http://localhost:3000/' );

add_theme_support(
  'html5',
  array(
    // 'comment-form',
    // 'comment-list',
    'gallery',
    'caption',
    'style',
    'script',
    'navigation-widgets',
  )
);

function nwl_widgets_init() {

	register_sidebar(
		array(
			'name'          => 'Footer',
			'id'            => 'sidebar-footer',
			'description'   => 'Add widgets here to appear in your footer.',
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}

add_action( 'widgets_init', 'nwl_widgets_init' );

?>