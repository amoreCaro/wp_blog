<?php
if (!defined('ABSPATH')) {
    exit;
}

add_action('wp_enqueue_scripts', function () {

    $theme_uri = get_template_directory_uri();

    // CSS
    wp_enqueue_style( 'theme-style', $theme_uri . '/assets/dist/main.css', [], null );

    // JS
    wp_enqueue_script( 'theme-script', $theme_uri . '/assets/dist/main.js', [], null, true );
});

if (!function_exists('app_dd')) {
    /**
     * Dump any variable inside <pre> tags
     */
    function app_dd($data) {
        echo '<pre>';
        var_dump($data);
        echo '</pre>';
    }
}