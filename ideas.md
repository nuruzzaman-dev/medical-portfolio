# Medical Portfolio — Reference Design Specification

## Ground Truth

The provided image is the visual source of truth. It represents **one continuous, vertically scrolling medical portfolio webpage** shown side by side only because the full page is too tall for a single image. The left side is the beginning of the page and the right side is the continuation of that same page. The implementation must preserve this ordering and visual composition rather than interpret the image as two separate columns or two pages.

## Design Philosophy: Airy Blue Editorial Care

### Design Movement
Contemporary editorial healthcare design with soft Swiss layout discipline, clinical clarity, and a restrained coastal-blue atmosphere.

### Core Principles

1. **Reference fidelity first:** Match the reference composition, section rhythm, proportions, spacing, contrast, and hierarchy before adding creative embellishment.
2. **Calm clinical warmth:** Use luminous whites, powder blues, and measured cobalt accents to make the page feel trustworthy, composed, and human.
3. **Editorial hierarchy:** Pair expressive serif display headlines with compact sans-serif interface copy so the long page scans like a refined professional profile.
4. **Structured softness:** Use rounded image corners, quiet shadows, light-blue panels, thin accent rules, and generous whitespace without turning every element into a pill or floating card.

### Color Philosophy
White is the breathable clinical canvas; pale blue creates calm sectional transitions; medium cobalt marks actions, timelines, and navigation focus; charcoal-blue typography keeps the page authoritative without feeling severe. The signature color is **care cobalt `#087dd1`**, used sparingly for primary actions and the visual spine of the page.

### Layout Paradigm
A single long editorial document with alternating white and pale-blue bands. The page uses a contained asymmetric rhythm: hero copy and doctor portrait share one stage, the gallery creates a visual counterweight, service cards sit in a structured 3-column field, and later résumé/contact sections alternate between two-column information blocks. Mobile collapses the same flow into one readable column.

### Signature Elements

- A compact monogram mark paired with the doctor’s wordmark in the header and footer.
- Thin cobalt rules beneath section headings and alongside résumé timeline entries.
- Soft blue information panels and circular medical icons that echo the reference image.

### Interaction Philosophy
Interactions should feel precise and reassuring. Navigation links scroll to named sections, appointment CTAs move the user toward booking, service cards gently lift on hover, and form controls show clear focus states. No interaction should feel loud or playful enough to weaken medical trust.

### Animation
Use restrained, short transitions: buttons compress slightly on press, cards rise by a few pixels on hover, image collage tiles ease into place on first view, and section content reveals with opacity plus a small upward translation. Keep motion below 300ms, use transform and opacity only, and respect `prefers-reduced-motion`.

### Typography System
Use **Cormorant Garamond** for display headings and the doctor’s name, with **Manrope** for navigation, labels, paragraphs, forms, and metadata. Display headings should be weight 600–700 with tight leading; body text should be small-to-medium, high line-height, and slightly letter-spaced in labels. Avoid Inter.

### Brand Essence
A calm, precise online profile for a surgeon who wants prospective patients to understand her expertise, care philosophy, and next appointment step in one continuous visit.

**Personality:** composed, credible, caring.

### Brand Voice
Headlines should sound human and quietly confident. CTAs should be direct, specific, and reassuring. Microcopy should reduce uncertainty rather than oversell.

Example headline: “Expert care, thoughtfully delivered.”

Example CTA: “Request an appointment”.

### Wordmark & Logo
Use a simple custom-feeling monogram: an abstract cobalt arc and cross-like stroke inside a small open circle, paired with a compact uppercase wordmark such as `MTN / CARE`. The mark must remain recognizable at small sizes and must not be plain text in a default font.

### Signature Brand Color
**Care cobalt — `#087dd1`**.

## Content Flow

1. Header/navigation with monogram, doctor wordmark, menu links, and Contact Me CTA.
2. Hero with blue-tinted clinical image, editorial headline, support copy, Make Appointment CTA, and scroll cue.
3. Image collage with varied real medical and lifestyle imagery.
4. Experience highlight with years, achievement statement, Needs Help CTA, and consultation hours card.
5. Services section with six circular-icon cards.
6. Doctor profile section with portrait, specialty, qualifications, and short biography.
7. Resume section with Education, Experience, Skills, and Awards tabs or filters; default to Education-style timeline to echo the reference.
8. Appointment and Contact Info section in a light-blue band.
9. Footer with wordmark, copyright, and social icons.

## Implementation Constraint

Use Tailwind CSS utility classes for component styling. Do not introduce a separate external CSS stylesheet for page styling. Keep the scaffold's global Tailwind import and design-token base intact; prefer inline Tailwind utilities in React components. Keep all large media outside the project and reference uploaded asset URLs.
