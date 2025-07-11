# Icon Components

This directory contains reusable icon components extracted from the homepage location section.

## Available Icons

- `BeachIcon` - Palm tree icon for beaches
- `SurfingIcon` - Wave icon for surfing
- `RestaurantIcon` - Fork & knife icon for restaurants
- `NightlifeIcon` - Disco ball icon for nightlife
- `ActivitiesIcon` - Running figure icon for activities
- `ShoppingIcon` - Shopping bag icon for shopping
- `TransportationIcon` - Car icon for transportation
- `TourGuideIcon` - Compass/user icon for tour guides

## Usage

```tsx
import { BeachIcon, SurfingIcon } from '../components/icons';

// Basic usage
<BeachIcon />

// With custom props
<SurfingIcon width={72} height={72} color="#fff" className="my-icon" />
```

## Props

All icon components accept the following props:

- `width?: number | string` - Icon width (default: 56)
- `height?: number | string` - Icon height (default: 56)
- `color?: string` - Icon color (default: "#222")
- `className?: string` - Additional CSS classes

## Import

You can import individual icons or all icons at once:

```tsx
// Individual imports
import { BeachIcon } from '../components/icons';

// All icons
import * as Icons from '../components/icons';
``` 