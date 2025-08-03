import React, { useEffect, useRef } from 'react';

/**
 * A component that safely applies jQuery plugins to a DOM element
 * 
 * @param {Object} props
 * @param {string} props.plugin - The jQuery plugin name to apply
 * @param {Object} [props.options] - Options to pass to the plugin
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.tag='div'] - HTML tag to use
 */
const JQueryPluginElement = ({ 
  plugin, 
  options = {},
  children, 
  className = '', 
  tag: Tag = 'div',
  ...rest
}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    // Function to initialize the plugin
    const initializePlugin = () => {
      if (!window.jQuery || !window.jQuery(element)[plugin]) {
        // If jQuery or the plugin isn't loaded yet, retry after a short delay
        setTimeout(initializePlugin, 100);
        return;
      }
      
      try {
        window.jQuery(element)
          .attr('data-plugin', plugin)
          .data('plugin-initialized', true)
          [plugin](options);
      } catch (e) {
        console.error(`Error initializing ${plugin} plugin:`, e);
      }
    };
    
    // Check if jQuery is loaded before initializing
    if (window.jQuery) {
      initializePlugin();
    } else {
      // Wait for jQuery to load
      const checkJQuery = setInterval(() => {
        if (window.jQuery) {
          clearInterval(checkJQuery);
          initializePlugin();
        }
      }, 100);
    }
    
    // Cleanup function
    return () => {
      if (window.jQuery && element) {
        try {
          const $element = window.jQuery(element);
          
          // Only call destroy if the plugin has a destroy method
          if ($element.data('plugin-initialized') && typeof $element[plugin]?.destroy === 'function') {
            $element[plugin]('destroy');
          }
          
          // Some plugins don't have destroy but have remove
          else if ($element.data('plugin-initialized') && typeof $element[plugin]?.remove === 'function') {
            $element[plugin]('remove');
          }
          
          // For plugins with no cleanup method, at least remove the data
          $element.removeData('plugin-initialized');
        } catch (e) {
          console.warn(`Error cleaning up ${plugin} plugin:`, e);
        }
      }
    };
  }, [plugin, JSON.stringify(options)]);
  
  return (
    <Tag 
      ref={elementRef}
      className={`jquery-plugin ${plugin}-element ${className}`}
      data-plugin={plugin}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default JQueryPluginElement;