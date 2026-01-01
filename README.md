# The Tarot According to Ra - Web App

A contemplative study tool for exploring the Major Arcana through Ra's archetypal framework from the Law of One material, styled with bold Memphis Group aesthetics.

## 🎨 Design Philosophy

This app combines:
- Ancient archetypal wisdom from the Ra Material (Law of One)
- Bold 1980s Memphis Group postmodern aesthetic
- Playful, irreverent design that honors serious spiritual study

## Quick Start

### Local Development
1. Clone this repository
2. Open `index.html` in your browser
3. No build step required - pure HTML/CSS/JS!

### Deploy to GitHub Pages
1. Push to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder
5. Your site will be live at `https://[username].github.io/[repo-name]/`

## Structure

### Views

1. **Grid View** - The full 3x7 matrix
   - Rows: Mind | Body | Spirit
   - Columns: Matrix, Potentiator, Catalyst, Experience, Significator, Transformation, Great Way
   - The Fool appears above and below the grid (outside the structure)

2. **Focused View** - Single cycle or position
   - Click row headers to see all cards in that cycle (Mind, Body, or Spirit)
   - Click column headers to see all cards in that position (e.g., all three Matrices)
   - Responsive: Adapts to portrait/landscape

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

### ✅ Completed
- Basic app structure and navigation
- Responsive Memphis Group design
- Grid view with all 21 cards + The Fool
- Focused views (cycle and position)
- Detail view with navigation
- Deck comparison slider UI
- Keyboard and touch/swipe navigation
- Basic archetypal framework descriptions
- Rows/columns optimized for widescreen

### 🚧 To Do
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
   - Consider adding relationships between archetypes
   - Add an introduction/help overlay explaining Ra's system
   - Consider print stylesheet for study aids

## File Structure

```
tarot-app/
├── index.html          # Main HTML structure
├── styles.css          # Memphis Group styling
├── app.js             # Application logic and card data
├── README.md          # This file
├── .gitignore         # Git ignore rules
└── public/
    └── images/
        └── tarot/
            ├── rws/    # Rider-Waite-Smith deck (to be added)
            └── thoth/  # Thoth deck (to be added)
```

## Usage

### Navigation
- Click any card to see details
- Click column/row headers to see grouped views
- Use arrow keys or swipe to navigate between cards
- Use the slider to compare different deck versions

### Keyboard Shortcuts (Detail View)
- `←` Previous card
- `→` Next card
- `Esc` Back to previous view

## Memphis Design Elements

The aesthetic features:
- **Bold geometric shapes**: Circles, triangles, squares as decorative elements
- **Vibrant colors**: Pink, cyan, yellow, purple, orange, green contrasts
- **Graphic patterns**: Stripes, dots, zigzags, terrazzo textures
- **Black borders**: Everything outlined for maximum pop
- **Playful interactions**: Bouncy animations, rotating hovers
- **Asymmetrical compositions**: Breaking the grid deliberately

Inspired by Ettore Sottsass and the Memphis Group (1981-1987)

## Ra's Archetypal System

This app facilitates study of the archetypal mind as described by Ra:

- Archetypes are resources for contemplation, not fixed meanings
- Each operates within a specific cycle (mind/body/spirit)
- Each position has a specific function in consciousness evolution
- The Fool/Choice encompasses yet stands outside the structure
- Study should be contemplative rather than predictive

## Technology

- Pure HTML5/CSS3/JavaScript
- No frameworks or build tools
- No dependencies
- Works offline (once images are local)
- Mobile-responsive

## Contributing

Feel free to:
- Add Ra quotes and symbolic descriptions
- Improve the design
- Add features
- Fix bugs

## License

This project is for educational and spiritual study purposes.

## Acknowledgments

- L/L Research for the Ra Material and tarot images
- Joseph Dartez for "The Tarot According to Ra"
- Josephine McCarthy for Quareia training
- The Memphis Group for design inspiration

