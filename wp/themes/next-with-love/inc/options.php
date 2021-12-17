<?php

function add_block_option($wp, $code, $name, $description, $type, $default = '') {
    $wp->add_setting('custom_settings[' . $code . ']', array(
        'type' => 'theme_mod',
        'capability' => 'edit_theme_options',
        'default' => $default,
        'transport' => 'refresh', 
        'sanitize_callback' => '',
        'sanitize_js_callback' => '',
    ));

    if ($type === 'media') {
        $wp->add_control( new WP_Customize_Media_Control($wp, 'custom_settings['.$code.']', array(
            'priority' => 10, 
            'label' => __( $name ),
            'description' => __( $description ),
            'section' => 'nwl',
            'mime_type' => 'image',
        ) ) );
    } else {
        $wp->add_control('custom_settings[' . $code . ']', array(
            'type' => $type,
            'priority' => 10, 
            'section' => 'nwl', 
            'label' => __($name),
            'description' => __($description)
        ));
    }
}

add_action('customize_register', function($wp) {
    $wp->add_section('nwl', array(
        'title' => __('General Options'),
        'description' => __(''),
        'priority' => 160,
        'capability' => 'edit_theme_options',
    ));

    add_block_option($wp, 'copyright', 'Copyright', '', 'text');
    add_block_option($wp, 'phone', 'Téléphone', '', 'text');
    add_block_option($wp, 'email', 'Email', '', 'email');
    add_block_option($wp, 'facebook', 'Facebook', '', 'url');
    add_block_option($wp, 'instagram', 'Instagram', '', 'url');
    add_block_option($wp, 'twitter', 'Twitter', '', 'url');
    add_block_option($wp, 'whatapp', 'What App', '', 'url');
    add_block_option($wp, 'youtube', 'Youtube', '', 'url');
}, 20);