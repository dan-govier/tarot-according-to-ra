# The Tarot According to Ra - Web App

A contemplative study tool for exploring the Major Arcana through Ra's archetypal framework from the Law of One material.

## Structure

### Views

1. **Grid View** - The full 7x3 matrix
   - Columns: Mind | Body | Spirit
   - Rows: Matrix, Potentiator, Catalyst, Experience, Significator, Transformation, Great Way
   - The Fool appears above and below the grid (outside the structure)

2. **Focused View** - Single cycle or position
   - Click column headers to see all cards in that cycle (Mind, Body, or Spirit)
   - Click row headers to see all cards in that position (e.g., all three Matrices)
   - Responsive: Portrait shows cycles vertically, landscape shows positions horizontally

3. **Detail View** - Single card deep dive
   - Large card image with deck comparison slider (Ra/Fathman ↔ RWS ↔ Thoth)
   - Archetypal framework explanation
   - Ra quotes about the archetype
   - Symbolic elements from the card
   - Navigate with arrow keys, arrow buttons, or swipe on mobile

## The Seven Archetypal Positions

1. **Matrix** - The foundation/actor (conscious element)
2. **Potentiator** - The resource/potential (unconscious element)
3. **Catalyst** - The experience/stimulus
4. **Experience** - The processed result
5. **Significator** - The self/complex
6. **Transformation** - The movement/change
7. **Great Way** - The path/integration

## The Three Cycles

- **Mind** (Archetypes 1-7)
- **Body** (Archetypes 8-14)
- **Spirit** (Archetypes 15-21)
- **The Choice** (Archetype 22/0 - The Fool)

## Current Status

### Completed
- ✅ Basic app structure and navigation
- ✅ Responsive design for mobile and desktop
- ✅ Grid view with all 21 cards + The Fool
- ✅ Focused views (cycle and position)
- ✅ Detail view with navigation
- ✅ Deck comparison slider UI
- ✅ Keyboard and touch/swipe navigation
- ✅ Basic archetypal framework descriptions

### To Do
1. **Content Population**
   - Extract Ra quotes from Law of One PDFs for each archetype
   - Extract symbolic element descriptions from "The Tarot According to Ra"
   - Enhance framework descriptions with more detail

2. **Images**
   - The Ra/Fathman images are referenced from llresearch.org (working if online)
   - RWS and Thoth deck images need to be added to `/public/images/tarot/`
   - Consider downloading all images locally for offline use

3. **Enhancements**
   - Add search/filter functionality
   - Consider adding relationships between archetypes (as mentioned in the Tarot According to Ra)
   - Add an introduction/help overlay explaining Ra's system
   - Consider print stylesheet for study aids

## File Structure

```
tarot-app/
├── index.html          # Main HTML structure
├── styles.css          # All styling (dark theme with gold accents)
├── app.js             # Application logic and card data
├── README.md          # This file
└── public/
    └── images/
        └── tarot/
            ├── rws/    # Rider-Waite-Smith deck (to be added)
            └── thoth/  # Thoth deck (to be added)
```

## Usage

1. Open `index.html` in a modern web browser
2. Navigate by:
   - Clicking any card to see details
   - Clicking column/row headers to see grouped views
   - Using arrow keys or swiping to navigate between cards
   - Using the slider to compare different deck versions

## Next Steps

We need to:
1. Extract relevant Ra quotes from the Law of One books
2. Pull symbolic descriptions from "The Tarot According to Ra" PDF
3. Optionally source RWS and Thoth images for comparison
4. Test on mobile devices for touch interactions

## Ra's Archetypal System

This app is designed to facilitate study of the archetypal mind as described by Ra in the Law of One contact. The structure reflects Ra's teaching that:

- The archetypes are not fixed meanings but resources for the mind to draw upon
- Each archetype operates within a specific cycle (mind/body/spirit)
- Each position (matrix through great way) has a specific function
- The Fool/Choice stands outside yet encompasses the entire structure
- Study should be contemplative rather than predictive

## Aesthetic Notes

The design uses:
- Deep blue-purple background (consciousness, depth)
- Gold accents (#b8a984) (spiritual light, illumination)
- Serif fonts (timeless, scholarly)
- Generous spacing (contemplative, non-rushed)
- Subtle animations (fluid, alive, not static)
