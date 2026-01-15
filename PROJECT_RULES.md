# Antigravity Project Rules

This file outlines strict rules for the agent (Antigravity) to follow when working on this project.

1.  **UI Framework Strictness**
    *   **Tamagui ONLY**: You must use **Tamagui** for all UI components, styling, and animations.
    *   **Use the COMPLETE Library**: Utilize the full breadth of Tamagui's capabilities (Stacks, Headings, Texts, Forms, Animations). Do not build custom primitives if Tamagui provides them.
    *   **Standard Extras**: Start with `@tamagui/lucide-icons` for icons to ensure a complete experience.
    *   **NO External Styling Libs**: Do NOT install or use Bootstrap, Tailwind, NativeWind, or any other CSS framework.
    *   **Use Standard Components**: Prioritize standard Tamagui components (e.g., `XStack`, `YStack`, `Button`, `Text`, `Card`) over custom `View`/`Div` implementations.
    *   **NO New Custom Colors**: Do NOT create new colors. Use **only** the values from `colorTokens` or `semanticTokens` defined in the theme. If a color is missing, check `germanPalette.ts` first.

2.  **Scope & Permissions**
    *   **No Unapproved Features**: Do NOT create specific new features, pages, or complex components without explicit permission from the user.
    *   **Ask First**: If a request implies a new feature, propose it first using `notify_user` or an Implementation Plan.

3.  **Code Style**
    *   **Linting**: Ensure all code passes the established ESLint/Prettier configuration.
    *   **Clean Up**: Remove unused configuration files (e.g., avoid duplicate eslint configs).
