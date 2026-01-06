# Persian Advanced Dashboard

## Overview

This directory contains a complete Persian-language (Farsi) advanced dashboard implementation for the GPT Researcher system. The dashboard features a modern, light-themed UI with comprehensive research management capabilities.

## Features

### 1. **Persian Language Support**
- Full RTL (Right-to-Left) layout
- Persian translations for all UI elements
- Academic C1 CEFR English level technical terminology preserved

### 2. **Advanced Search Wizard**
- Message box-style interface for search preferences
- Quick settings for:
  - Report Type (خلاصه, عمیق, چند عاملی, تفصیلی)
  - Report Source (اینترنت, اسناد من, ترکیبی)
  - Tone (عینی, رسمی, تحلیلی, etc.)
- Advanced settings toggle for additional options
- Real-time validation and feedback

### 3. **Research History**
- Displays last 5 recent researches
- Timestamp with relative time display
- Quick access to previous research
- Delete functionality
- Sticky sidebar for easy access

### 4. **Quick Templates**
- 6 pre-configured research templates:
  - Market Analysis (تحلیل بازار)
  - Technical Review (بررسی فنی)
  - Industry Report (گزارش صنعت)
  - Academic Research (تحقیق آکادمیک)
  - Competitor Analysis (تحلیل رقبا)
  - Trend Analysis (تحلیل روند)
- One-click template selection
- Visual icons and gradient accents

### 5. **Light Theme UI**
- Clean, modern design with subtle gradients
- Professional color palette (teal, blue, purple)
- Responsive layout for all screen sizes
- Smooth transitions and hover effects
- Accessibility-focused design

## Components

### `AdvancedDashboard.tsx`
Main dashboard container that orchestrates all sub-components.

**Props:**
- `promptValue`: Current search query
- `setPromptValue`: Function to update search query
- `handleDisplayResult`: Function to initiate research
- `chatBoxSettings`: Research configuration settings
- `setChatBoxSettings`: Function to update settings
- `history`: Array of previous researches
- `onSelectResearch`: Function to load a previous research
- `onDeleteResearch`: Function to delete a research

### `SearchWizard.tsx`
Advanced search interface with preference controls.

**Features:**
- Multi-line textarea for research queries
- Dropdown selectors for report configuration
- Collapsible advanced settings
- Form validation
- Submit button with disabled state

### `ResearchHistory.tsx`
Sidebar component displaying recent research history.

**Features:**
- Last 5 researches display
- Relative timestamps
- Click to load research
- Delete button (appears on hover)
- Empty state message
- View all button when >5 items

### `QuickTemplates.tsx`
Grid of pre-configured research templates.

**Features:**
- 6 template cards
- Icon and gradient styling
- Click to populate search field
- Hover effects
- Responsive grid layout

## Translations

All translations are centralized in `/locales/fa.ts`:

```typescript
import { fa } from "@/locales/fa";

// Usage example
<h1>{fa.dashboard.title}</h1>
```

## Theme Configuration

### Light Theme
Applied via CSS classes in `globals.css`:
- `body.light-theme`: Light background with subtle gradient
- Reduced opacity background orbs
- Professional color scheme

### Dark Theme (Original)
Preserved for backward compatibility:
- `body.dark-theme`: Original dark theme
- Can be toggled by changing className

## Usage

### Enable Persian Dashboard

In `app/page.tsx`:

```typescript
const [usePersianDashboard, setUsePersianDashboard] = useState(true);
```

Set to `true` to use the Persian dashboard, `false` for the original Hero component.

### Language and Direction

In `app/layout.tsx`:

```typescript
<html lang="fa" dir="rtl">
  <body className="light-theme">
```

## Styling

### Tailwind Classes
- Uses utility-first Tailwind CSS
- Custom gradients: `from-teal-500 to-blue-600`
- Responsive breakpoints: `sm:`, `md:`, `lg:`
- RTL support built-in

### Custom CSS
Additional styles in `globals.css`:
- Light/dark theme variants
- Background gradient orbs
- Smooth transitions

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states on interactive elements
- High contrast ratios

## Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 768px
  - Desktop: > 768px
- Grid layouts adapt to screen size
- Touch-friendly tap targets

## Future Enhancements

- [ ] Add language switcher (Persian/English)
- [ ] Theme toggle (Light/Dark)
- [ ] Export research history
- [ ] Advanced filtering for history
- [ ] Customizable templates
- [ ] Statistics dashboard
- [ ] Keyboard shortcuts

## Technical Notes

- Built with React 18 and Next.js 14
- TypeScript for type safety
- date-fns for date formatting
- Fully server-side rendered
- Optimized for performance

## Maintenance

When adding new features:
1. Add translations to `locales/fa.ts`
2. Update component props interfaces
3. Maintain RTL layout compatibility
4. Test on multiple screen sizes
5. Ensure accessibility standards
