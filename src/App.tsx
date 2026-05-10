{
  "system_info": {
    "name": "Véryn Design System (adapted)",
    "description": "Premium/Luxury style based on 'Véryn' app, adapted for native e-commerce (cart/payment) instead of external messaging.",
    "colors": {
      "palettes": {
        "primary_on_dark": {
          "background": "#141414",
          "text": {
            "main": "#E1E1E1",
            "accent": "#C4A77D",
            "highlight": "#FFFFFF"
          },
          "elements": {
            "card_background": "#202020",
            "badge_outline": "#303030",
            "badge_text": "#C4A77D"
          }
        },
        "secondary_on_light": {
          "background": "#FFFFFF",
          "text": {
            "main": "#333333",
            "accent": "#C4A77D",
            "highlight": "#000000"
          },
          "elements": {
            "badge_outline": "#E0E0E0",
            "badge_text": "#C4A77D",
            "button_solid_text": "#FFFFFF"
          }
        }
      },
      "semantic_rules": {
        "text_main": "For body copy, paragraphs, and list items (on dark or light background).",
        "text_accent": "For logos, key headings, product prices, selected filter buttons, and call-to-action text.",
        "text_highlight": "For key phrases in large headings and product names.",
        "background_primary": "The main screen background color.",
        "element_surface": "For background of product cards.",
        "button_solid": "For key CTAs ('Comprar ahora'). Use palette `accent` color for background, `button_solid_text` for text.",
        "button_outline": "For secondary actions ('Ver catálogo'). Use palette `accent` color for text/border.",
        "button_action": "For interaction buttons within cards ('Ver decants', and now 'Añadir al carrito'). Uses palette `highlight` (dark/light) text/border, and a custom accent fill for the new cart button.",
        "notification_badge": "For counts and new item badges. Uses `accent` color for text/border."
      }
    },
    "typography": {
      "fonts": {
        "primary": "DM Serif Display (or similar premium Serif for logos, large titles, and product prices)",
        "secondary": "Inter (or similar modern Sans-serif for body copy, list text, and sub-headings)"
      },
      "hierarchy": {
        "logo": {
          "font": "Serif",
          "weight": "bold",
          "color": "accent",
          "size": "XXL",
          "text-transform": "uppercase"
        },
        "h1": {
          "font": "Serif",
          "color": "main",
          "size": "XXXL",
          "line-height": "1.2",
          "children_style": {
            "highlighted": "color: accent; font-style: italic;"
          }
        },
        "h2_accent": {
          "font": "Serif",
          "color": "accent",
          "size": "XL",
          "line-height": "1.3"
        },
        "h3_sans": {
          "font": "Sans-serif",
          "color": "main",
          "size": "L",
          "line-height": "1.4"
        },
        "product_price": {
          "font": "Serif",
          "color": "accent",
          "size": "L"
        },
        "product_name": {
          "font": "Sans-serif",
          "color": "highlight",
          "size": "M"
        },
        "tagline_small": {
          "font": "Sans-serif",
          "color": "main",
          "size": "XS",
          "text-transform": "uppercase",
          "letter-spacing": "0.1em"
        },
        "body_copy": {
          "font": "Sans-serif",
          "color": "main",
          "size": "M",
          "line-height": "1.6"
        },
        "list_item": {
          "font": "Sans-serif",
          "color": "main",
          "size": "S"
        }
      }
    },
    "icons": {
      "style": "Minimal, Outline, gold/accent or light/dark based on context.",
      "key_elements": {
        "navigation": "House/Home (outline), Menu/Hamburger (three horizontal lines), Cart (with count badge), Close/X.",
        "actions": "Right Arrow (outline, for 'Ver decants' or page-level 'Ver todo'), Plus (+) or Shopping Cart (for 'Añadir al carrito' within cards).",
        "social": "TikTok, Instagram (without Facebook).",
        "info": "Location pin, Percentage/Offer, Verification badge, Card, Calendar."
      }
    },
    "visual_elements": {
      "layout": {
        "structure": "A series of full-width or inset dark-mode sections (image_1 - image_5), with a final clean white-background content section (image_6), and a dark footer (image_7).",
        "margins": "Consistent, generous padding between sections. Products presented in clear grids.",
        "backgrounds": {
          "main_screen": "Near-black solid.",
          "product_cards": "A slightly lighter dark gray surface. All edges are subtly rounded."
        }
      },
      "grid": {
        "patterns": {
          "menu": "Full screen menu list with large spacing.",
          "product_listing": "2-column grid of rounded-corner cards.",
          "filter_badges": "Horizontal, wrap-around badge list.",
          "category_listing": "2-column grid of vertical category links.",
          "reasons_listing": "Vertical list of icon-text items.",
          "footer": "Vertical columns (Logo, Description, Info, Social Icons)."
        }
      },
      "components": {
        "header": {
          "visual": "Fixed, slightly opaque dark bar. Left: Home Icon. Center: Logo/Text. Right: Menu, Cart, Count Badge.",
          "adapted_logo": "Use a clear, gold-color premium Serif font 'VÉRYN' instead of the complex initial logo/emblem."
        },
        "product_card": {
          "shape": "Rounded rectangular card (surface color). Content order: Image -> Metadata Badges -> Info Column (Small tagline -> Large product name -> Premium price).",
          "adapted_actions": {
            "button_type": "New: Cart Button.",
            "visual": "A button using a different fill (e.g., gold fill with light text) to replace the external 'WhatsApp' button. It features a new 'Add to cart' icon/text and the new 'Cart with Count Badge' logic."
          }
        },
        "badges": {
          "style": "Minimalistic outline or text-only pill shapes. Used for filters (e.g., 'Diseñador', 'Decants', 'Men'), or informational tags (e.g., 'Nuevo', 'Más vendido'). On-dark: gold outline. On-light: darker gray outline.",
          "selected_state": {
            "visual": "Solid fill of `accent` color with light `text`."
          }
        },
        "footer": {
          "visual": "Dark background. Column-based layout. Premium logo on top left. Content on right. Icons at the bottom. No Facebook icon."
        }
      },
      "buttons": {
        "types": {
          "solid_primary": {
            "visual": "Gold fill, light text, large padding, highly rounded corners.",
            "text": "Comprar ahora"
          },
          "outline_secondary": {
            "visual": "Outline with gold text, same shape, large padding.",
            "text": "Ver catálogo"
          },
          "card_action_small": {
            "visual": "Small outline pill button with text and icon, light text/border (on dark card).",
            "original_text": "Ver decants",
            "adapted_new_actions": [
              {
                "text": "Añadir al carrito",
                "visual": "Uses custom gold-color accent solid fill for premium look. Replaces the WhatsApp button, which must be completely removed."
              }
            ]
            
          },
          "global_view_all": {
            "visual": "Small gold-color right-pointing arrow icon and text on far right.",
            "text": "Ver catálogo completo →"
          }
        }
      }
    },
    "patterns": {
      "hierarchy": {
        "product": "Image is paramount. Price is premium and highly visible. Brand -> Name -> Price hierarchy is key.",
        "text": "Sections use small, all-caps sans-serif lead text (e.g., 'FRAGANCIAS MASCULINAS') before a large premium serif heading.",
        "emphasis": "Key numbers (like price) are larger and gold."
      },
      "transition": {
        "light_to_dark": "A definitive switch from dark-background content sections (product grids) to a clean white-background information section (about pages) and then back to a dark footer.",
        "adapted_cart_transition": "When adding to cart, a small badge on the main cart icon animates with a new number count. The text on the button ('Añadir al carrito') briefly changes to 'Añadido'."
      }
    },
    "adapted_pages": {
      "new_ecommerce_features": {
        "header_adapted_cart": "The cart icon in the top header is now functional. It must display a numerical badge (with count and accent color) of items added. When tapped, it must open a native on-screen cart overlay.",
        "native_cart_overlay": {
          "style": "Dark overlay (e.g., sliding panel from the right) matching the app design. Full screen on mobile.",
          "elements": [
            "Title (H2 premium Serif: 'Tu Carrito')",
            "Vertical list of cart items (Product Image -> Name -> Variant/Size (e.g., '10 ml') -> Quantity (with +/- controls) -> Price)",
            "Summary section (Subtotal for each item, and final total of all items)",
            "Native Checkout/Payment button ('Finalizar compra') matching the solid primary button style, triggering the native in-app payment flow (not external messaging)."
          ]
        },
        "adapted_product_interaction": {
          "visual": "The product card on any list (e.g., Men, Women, Unisex, Favorites) no longer features a 'WhatsApp' button. It only has an 'Añadir al carrito' button. The badge for new arrivals is now consistent (e.g., 'Nuevo', not 'Nuevo Ingreso') and no longer 'Ver decants'."
        }
      }
    }
  }
          }
