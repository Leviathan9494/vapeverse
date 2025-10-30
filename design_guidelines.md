# Design Guidelines: Vape Store Customer Loyalty App

## Design Approach

**Reference-Based Approach** drawing inspiration from:
- **Starbucks Rewards App**: Points dashboard and rewards tracking patterns
- **Nike App**: Clean product showcases and news feed layouts
- **Cash App**: Clear, scannable financial information displays
- **Shopify Shop App**: Purchase history and order tracking interfaces

**Design Principles:**
1. Mobile-first clarity with generous touch targets
2. Instant information scanning for points and rewards
3. Premium, professional aesthetic appropriate for retail
4. Thumb-friendly navigation and interactions

---

## Typography

**Font Families:**
- Primary: Inter (via Google Fonts) - clean, modern sans-serif for UI and body text
- Accent: Space Grotesk (via Google Fonts) - for headings and emphasis

**Type Scale:**
- Hero/Display: text-4xl to text-6xl, font-bold (Space Grotesk)
- Section Headers: text-2xl to text-3xl, font-semibold (Space Grotesk)
- Card Titles: text-lg to text-xl, font-semibold (Inter)
- Body Text: text-base, font-normal (Inter)
- Small/Meta: text-sm to text-xs, font-medium (Inter)
- Points Display: text-5xl to text-7xl, font-bold (Space Grotesk) - oversized for impact

---

## Layout System

**Spacing Primitives:** Use Tailwind units of **2, 4, 6, 8, 12, 16** (e.g., p-4, gap-6, mb-8, mt-12, py-16)

**Mobile Grid Structure:**
- Single column primary layout (max-w-md to max-w-lg centered)
- Cards: Full-width with px-4 container padding
- Lists: Stacked vertically with gap-4 spacing
- Bottom navigation bar: Fixed position, h-16

**Desktop Adaptations (md: and above):**
- Two-column layout for dashboard overview (points + quick actions)
- News feed: Two-column grid for product cards
- Purchase history: Maintains single column for readability
- Max-width container: max-w-4xl centered

**Key Measurements:**
- Touch targets: Minimum h-12 for all interactive elements
- Card padding: p-6 for content areas
- Section spacing: mb-8 to mb-12 between major sections
- Safe zones: pb-20 on main content to clear bottom navigation

---

## Component Library

### Navigation
**Bottom Tab Bar** (Primary Navigation):
- Fixed bottom position with 4 tabs: Dashboard, History, News, Support
- Icons from Heroicons (home, clock, newspaper, chat-bubble icons)
- Active state with bold icon and text label
- Height: h-16, backdrop-blur effect

**Top Header**:
- Customer name/greeting on left
- Notification bell icon on right
- Height: h-14 with px-4 padding
- Sticky position during scroll

### Dashboard Components

**Points Balance Card** (Hero Element):
- Large, prominent card at top of dashboard
- Oversized point number (text-6xl) centered
- Subtle gradient or image background
- "Redeem Rewards" CTA button with blurred background
- Card height: min-h-[280px]
- Rounded corners: rounded-2xl

**Quick Stats Grid**:
- Three metric cards in grid (grid-cols-3 gap-4)
- Each shows: small icon, number, label
- Metrics: Total purchases, Points earned this month, Tier status
- Compact cards: p-4, rounded-xl

**Recent Activity Preview**:
- Last 2-3 purchases as list items
- Each item: product name, date, points earned
- "View All History" link at bottom

### Purchase History Components

**Order List Items**:
- Card-based layout (rounded-xl, p-4, mb-4)
- Top row: Date (left), Points earned badge (right)
- Product list with quantities
- Total amount display
- Expandable for full details
- Dividers between items (border-b)

**Filter Bar**:
- Horizontal scroll of filter chips
- Options: All, Last 30 days, Last 3 months, This year
- Active filter uses filled style

### News Feed Components

**Product Cards** (Two-column grid on mobile):
- Product image at top (aspect-video, rounded-t-xl)
- Product name (text-lg, font-semibold)
- Brief description (text-sm, 2-line clamp)
- "New" badge overlay on image
- Card spacing: gap-4, grid-cols-2
- Full card tappable area

**Announcement Cards**:
- Full-width cards with left accent border
- Icon at top-left
- Headline and brief text
- Timestamp at bottom
- Different card style from products (no image, left border-l-4)

### Chatbot Interface

**Chat Container**:
- Full-screen overlay when opened
- Message bubbles: User (right-aligned), Bot (left-aligned)
- Input bar fixed at bottom with send button
- Rounded-2xl message bubbles with p-4
- Bot messages include helpful quick-reply chips
- Avatar icons for bot messages
- Timestamp display (text-xs) on messages

**Quick Actions Chips**:
- Horizontal scroll of suggested questions
- Compact rounded-full pills (px-4, py-2)
- Appear above input when chat opens

### Form Elements & Buttons

**Primary Buttons**:
- Height: h-12 to h-14
- Full rounded corners: rounded-xl
- Font: font-semibold, text-base
- Full-width on mobile, auto-width on desktop
- Blurred background when over images

**Input Fields**:
- Height: h-12
- Rounded: rounded-lg
- Border focus state with ring effect
- Label above input (text-sm, font-medium)
- Padding: px-4

**Badges/Pills**:
- Points badges: rounded-full, px-3, py-1, text-xs, font-bold
- Status indicators: Small dot + text
- Category tags: rounded-md, px-2, py-1

---

## Images

### Dashboard:
- **Points Card Background**: Subtle gradient or abstract texture (1200x600px), low opacity overlay to maintain text readability. Position: background of hero points card with blur effect.

### News Feed:
- **Product Images**: High-quality product photography (800x600px) for each new item/product announcement. Position: Top of each product card, aspect-video ratio, rounded top corners.
- **Announcement Headers**: Optional illustrative graphics for major announcements (1200x400px). Position: Full-width at top of announcement cards.

### Profile/Account:
- **User Avatar Placeholder**: Circular avatar space in header and profile section (120x120px).

**No large hero image** - The points balance card serves as the visual hero element on the dashboard.

---

## Animation Guidelines

**Minimal, Purposeful Motion:**
- Tab bar icon scale on tap: scale-95 active state
- Card tap feedback: brief opacity change
- Page transitions: Slide from right for forward, left for back
- Loading states: Simple spinner or skeleton screens
- Chatbot messages: Gentle fade-in as they appear
- Points update: Brief scale pulse animation when points change

**Avoid:** Parallax scrolling, excessive hover states, decorative animations

---

## Mobile-First Considerations

- All tap targets minimum 44x44px (h-11 or larger)
- Form inputs elevated for easy thumb reach
- Bottom navigation for primary actions (thumb zone)
- Generous padding on cards (p-6) for comfortable reading
- Large, readable text sizes throughout
- Single-column layout as default
- Sticky header for context retention
- Pull-to-refresh on main views
- Safe area padding for iOS notches/home indicators