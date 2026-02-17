# Component Implementation Instructions & Learned Best Practices

These instructions summarize the workflow and best practices established during the implementation of the Button component. Follow these steps for future component implementations to ensure accuracy and visual fidelity.

## 1. Preparation & Analysis

*   **Token Review:** Before writing code, inspect `assets/css/colors.css` and `assets/css/typography.css` to understand the available variables.
*   **Variant Scoping:** Check explicitly which variants exist for *this specific component*. Do not assume parity with other components (e.g., just because "Standard Button" has a Tertiary style doesn't mean "Split Button" does).
*   **Variant Matrix:** Explicitly calculate the total number of variants required.
    *   *Formula:* `(Styles) x (Sizes) x (Layouts/Icons) x (States)`
    *   *Example:* 3 Styles (Pri/Sec/Ter) * 2 Sizes (Md/Sm) * 3 Layouts (Label/Left/Right) * 4 States (Def/Hov/Act/Dis) = **72 Variants**.
    *   **Rule:** Implementation must support *all* permutations unless explicitly restricted.

## 2. Figma Inspection (The "Due Diligence" Phase)

Do not rely on a cursory glance. You must drill down into specific Figma nodes for *each* variant type, as properties often differ subtly.

*   **Colors & Tokens:**
    *   **Don't Guess:** Never assume a border is just `border-primary`. In the Button task, the Secondary button border was actually `border-dark` (#969aa3), and Tertiary text was `text-secondary` (#444f5c).
    *   **Disabled States:** Check disabled states specifically. They often use specific "on-color-disabled" tokens rather than generic disabled text colors.
    *   **Backgrounds:** Check if backgrounds are transparent or explicitly white (`bg-primary`).
*   **Geometry:**
    *   **Border Radius:** Check exact corner radius values (e.g., 2px vs 8px).
    *   **Dimensions:** Inspect specific `height` and `padding` values for every size variant.
        *   *Example:* Medium = 32px height, 16px padding. Small = 24px height, 8px padding.

## 3. Implementation Guidelines (CSS)

*   **Variables First:** Always map properties to CSS variables (e.g., `rgb(var(--border-dark))`) instead of hex codes.
*   **Pseudo-classes:** Implement `:hover`, `:active`, and `:disabled` mapped strictly to the Figma prototype's state colors.
*   **Box Model:** Use `inline-flex` for alignment consistency.

## 4. Showcase & Verification

*   **Grouping Strategy:** Grouping by **Style** (e.g., "Primary", "Secondary") is generally more effective for verifying visual consistency across states than grouping by Size.
*   **Grid Layout:** Use robust CSS Grids for showcase pages to prevent alignment issues.
    *   Ensure columns are consistent (e.g., Label row vs Button row).
    *   Prevent elements (like Icons) from leaking outside their containers.
*   **Completeness Check:** Verify that every single calculated variant from step 1 is present on the page.

## Use Case: Button Component Context

**What went wrong initially:**
1.  **Missing Variants:** Only implemented 36 out of 72 variants initially.
2.  **Incorrect Tokens:** Assumed generic `border-primary` for Secondary buttons (was actually `border-dark`).
3.  **Layout alignment:** Tertiary icons broke the presentation grid.
4.  **Border Radius:** Defaulted to 8px instead of the design's 2px.

**Correction Steps:**
1.  Re-checked Figma to find specific color tokens for non-standard states.
2.  Refactored HTML to group by Style for better readability.
3.  Expanded grid to cover all 72 permutations.
4.  Hardcoded specific height/padding from Figma properties.

## Use Case: Split Button Logic (The "Parity Trap")

**What went wrong:**
*   **Assumption of Parity:** Implemented Tertiary and Destructive variants because the "Standard Button" had them.
*   **Reality:** The design for "Split Button" *only* included Primary and Secondary variants.

**Correction Steps:**
1.  **Strict Scope adherence:** Removed the extra variants to match the Figma file exactly.

2.  **Lesson:** If it's not in the Figma node, it doesn't exist. Do not "complete the set" based on other components.

## Use Case: Icon Button Sizing & States

**What was unique:**
*   **Square Aspect Ratio:** Unlike other buttons, Icon Buttons must have equal width and height.
*   **New Size Introduced:** Found an "XSmall" (16x16) size variant that didn't exist for other buttons.
*   **State Nuances:**
    *   **Ghost vs Filled Disabled:** "Filled" variants keep their background color when disabled, but "Ghost" variants must become transparent. A single common `.disabled` rule wasn't enough.
    *   **Unified Hover/Active Tints:** Action and Destructive styles often reuse specific hover/active background tints that need to be carefully mapped.

**Learnings:**
1.  **Check for "Hidden" Sizes:** Always verify if a component has unique size variants (like XS) not present in the main design system.
2.  **State-Specific Transparency:** Explicitly check if "Disabled" means "Gray Background" or "Transparent Background" for each variant type.

