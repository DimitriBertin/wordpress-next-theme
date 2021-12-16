<?php 
require_once("inc/api.php");
require_once("inc/partial.php");
require_once("inc/menu.php");

$theme = 'next-with-love';

update_option( 'home', 'http://localhost:3000/' );

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
			'name'          => esc_html__( 'Footer', $theme ),
			'id'            => 'sidebar-footer',
			'description'   => esc_html__( 'Add widgets here to appear in your footer.', $theme ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'nwl_widgets_init' );
?>