# Arcade Design System Guidelines

This document outlines the usage and purpose of the typography and color tokens defined in the Arcade Design System. Use these guidelines to ensure consistency across the application.

## 1. Typography

**Font Family:** `Proxima Nova`, sans-serif.

### Headings
Headings are used to establish hierarchy and structure in the content.
*   **Heading 1 (`heading-1`)**: Main page titles. Use once per page.
*   **Heading 2 (`heading-2`)**: Major section headers.
*   **Heading 3 (`heading-3`)**: Sub-section headers or card titles.
*   **Heading 4 (`heading-4`)**: Minor section headers.
*   **Heading 5 (`heading-5`)**: Small grouping titles or widget headers.
*   **Heading 6 (`heading-6`)**: The smallest heading, used for low-level structure or distinct UI elements.

### Paragraphs
Used for body text and long-form content.
*   **Paragraph Large**: introductory text or lead paragraphs that need emphasis.
*   **Paragraph Base**: The default size for standard body text, articles, and descriptions.
*   **Paragraph Small**: Helper text, captions, or legal disclaimers.
*   **Bold Variants**: Use for emphasis within the respective paragraph size (e.g., highlighting key terms).

### Labels
Labels are compact text styles used for UI components, not long-form reading.
*   **Label XL**: Large UI elements or emphasized data points.
*   **Label Large**: Standard buttons, tabs, and navigation items.
*   **Label Base**: Form labels, table headers, and badges.
*   **Label Small**: Metadata, timestamps, or small tags.
*   **Bold Variants**: Use for selected states or high-priority UI labels.

---

## 2. Colors

### Neutral Colors
These form the backbone of the interface structure.

#### Backgrounds
*   **`bg-primary`**: The main surface color (White). Used for content cards and main layouts.
*   **`bg-secondary` / `bg-muted`**: Subtle, light gray backgrounds. Used for sidebars, page backgrounds, or grouped sections.
*   **`bg-tertiary`**: Darker gray background. Used for distinct areas or pressed states.
*   **`bg-overlay`**: Semi-transparent black. Used behind modals or drawers to dim the rest of the interface.

#### Text
*   **`text-primary`**: High contrast (Near Black). Use for headings and main body content.
*   **`text-secondary`**: Medium contrast (Dark Gray). Use for supporting text, metadata, and labels.
*   **`text-tertiary`**: Low contrast (Gray). Use for placeholders or subtle hints.
*   **`text-disabled`**: Very low contrast. Use for unselected or disabled text elements.
*   **`text-on-color`**: White text. Use on top of dark or semantic background colors for readability.

#### Borders
*   **`border-primary`**: Default border color for inputs, cards, and dividers.
*   **`border-light`**: Subtle dividers or borders on colored backgrounds.

### Semantic Colors
Use these colors to communicate state or intent.

#### Accent (Blue)
Represents the primary brand color and interactive elements.
*   **Usage**: Primary buttons, active links, selected states, and focus indicators.
*   **Variants**: `hover` and `active` states provide interaction feedback. `light` is used for low-priority accent backgrounds (e.g., selected row background).

#### Negative (Red)
Represents danger, errors, or destructive actions.
*   **Usage**: Delete buttons, error messages, and validation alerts.
*   **`bg-negative-light`**: Soft background for error banners.

#### Warning (Yellow)
Represents caution or non-critical alerts.
*   **Usage**: Warning banners, "needing attention" states, or pending actions.

#### Positive (Green)
Represents success, completion, or safety.
*   **Usage**: Success toasts, "completed" badges, and confirm actions.

### Data & Categorization
#### Analytics & Support Colors
A palette of distinct colors (`analytics-1` through `10`, `support-fg/bg`) designed for:
*   **Data Visualization**: Charts, graphs, and progress bars.
*   **Categorization**: Tags, labels, or avatars where differentiation is needed without strict semantic meaning (like error/success).
