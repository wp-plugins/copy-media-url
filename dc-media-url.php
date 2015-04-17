<?php
/*
Plugin Name: Copy Media Url
Plugin URI: http://dualcube.com
Description: Wordpress Media Url Copy
Author: Dualcube
Version: 1.0.0
Author URI: http://dualcube.com
*/
add_action( 'admin_enqueue_scripts', 'dc_media_url_enqueue_script' );

function dc_media_url_enqueue_script($hook) {
   	if ( 'media-new.php' != $hook ) {
        return;
    }
wp_enqueue_script( 'ZeroClipboard', plugin_dir_url( __FILE__ ) . 'assets/js/ZeroClipboard.js', array(), '1.0.0', true );
wp_enqueue_script( 'media-new-script', plugin_dir_url( __FILE__ ) . 'assets/js/media-new.js', array(), '1.0.0', true );
}