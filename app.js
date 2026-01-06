// Tarot Card Data Structure - will be enhanced by loading JSON
let tarotData = {};

// Image path configuration
const imagePaths = {
    1: {
        ra: "public/images/tarot/ra/magician.png",
        rws: "public/images/tarot/rws/magician.jpg",
        thoth: "public/images/tarot/thoth/magician.webp"
    },
    2: {
        ra: "public/images/tarot/ra/high-priestess.png",
        rws: "public/images/tarot/rws/priestess.jpg",
        thoth: "public/images/tarot/thoth/priestess.webp"
    },
    3: {
        ra: "public/images/tarot/ra/empress.png",
        rws: "public/images/tarot/rws/empress.jpg",
        thoth: "public/images/tarot/thoth/empress.webp"
    },
    4: {
        ra: "public/images/tarot/ra/emperor.png",
        rws: "public/images/tarot/rws/emperor.jpg",
        thoth: "public/images/tarot/thoth/emperor.webp"
    },
    5: {
        ra: "public/images/tarot/ra/hierophant.png",
        rws: "public/images/tarot/rws/hierophant.jpg",
        thoth: "public/images/tarot/thoth/hierophant.webp"
    },
    6: {
        ra: "public/images/tarot/ra/lovers.png",
        rws: "public/images/tarot/rws/lovers.jpg",
        thoth: "public/images/tarot/thoth/lovers.webp"
    },
    7: {
        ra: "public/images/tarot/ra/chariot.png",
        rws: "public/images/tarot/rws/chariot.jpg",
        thoth: "public/images/tarot/thoth/chariot.webp"
    },
    8: {
        ra: "public/images/tarot/ra/justice.png",
        rws: "public/images/tarot/rws/justice.jpg",
        thoth: "public/images/tarot/thoth/justice.webp"
    },
    9: {
        ra: "public/images/tarot/ra/sage.png",
        rws: "public/images/tarot/rws/sage.jpg",
        thoth: "public/images/tarot/thoth/sage.webp"
    },
    10: {
        ra: "public/images/tarot/ra/wheel.png",
        rws: "public/images/tarot/rws/wheel.jpg",
        thoth: "public/images/tarot/thoth/wheel.webp"
    },
    11: {
        ra: "public/images/tarot/ra/enchantress.png",
        rws: "public/images/tarot/rws/enchantress.jpg",
        thoth: "public/images/tarot/thoth/enchantress.webp"
    },
    12: {
        ra: "public/images/tarot/ra/hangedman.png",
        rws: "public/images/tarot/rws/hangedman.jpg",
        thoth: "public/images/tarot/thoth/hangedman.webp"
    },
    13: {
        ra: "public/images/tarot/ra/death.png",
        rws: "public/images/tarot/rws/death.jpg",
        thoth: "public/images/tarot/thoth/death.webp"
    },
    14: {
        ra: "public/images/tarot/ra/alchemist.png",
        rws: "public/images/tarot/rws/alchemist.jpg",
        thoth: "public/images/tarot/thoth/alchemist.webp"
    },
    15: {
        ra: "public/images/tarot/ra/devil.png",
        rws: "public/images/tarot/rws/devil.jpg",
        thoth: "public/images/tarot/thoth/devil.webp"
    },
    16: {
        ra: "public/images/tarot/ra/lightning.png",
        rws: "public/images/tarot/rws/lightning.jpg",
        thoth: "public/images/tarot/thoth/lightning.webp"
    },
    17: {
        ra: "public/images/tarot/ra/star.png",
        rws: "public/images/tarot/rws/star.jpg",
        thoth: "public/images/tarot/thoth/star.webp"
    },
    18: {
        ra: "public/images/tarot/ra/moon.png",
        rws: "public/images/tarot/rws/moon.jpg",
        thoth: "public/images/tarot/thoth/moon.webp"
    },
    19: {
        ra: "public/images/tarot/ra/sun.png",
        rws: "public/images/tarot/rws/sun.jpg",
        thoth: "public/images/tarot/thoth/sun.webp"
    },
    20: {
        ra: "public/images/tarot/ra/judgment.png",
        rws: "public/images/tarot/rws/judgment.jpg",
        thoth: "public/images/tarot/thoth/judgment.webp"
    },
    21: {
        ra: "public/images/tarot/ra/world.png",
        rws: "public/images/tarot/rws/world.jpg",
        thoth: "public/images/tarot/thoth/world.webp"
    },
    22: {
        ra: "public/images/tarot/ra/fool.png",
        rws: "public/images/tarot/rws/fool.jpg",
        thoth: "public/images/tarot/thoth/fool.webp"
    }
};

// Basic card names and positions (fallback if JSON doesn't load)
const basicCardData = {
    1: { name: "The Magician", raName: "Matrix of the Mind", cycle: "mind", position: "matrix" },
    2: { name: "The High Priestess", raName: "Potentiator of the Mind", cycle: "mind", position: "potentiator" },
    3: { name: "The Empress", raName: "Catalyst of the Mind", cycle: "mind", position: "catalyst" },
    4: { name: "The Emperor", raName: "Experience of the Mind", cycle: "mind", position: "experience" },
    5: { name: "The Hierophant", raName: "Significator of the Mind", cycle: "mind", position: "significator" },
    6: { name: "The Two Paths", raName: "Transformation of the Mind", cycle: "mind", position: "transformation" },
    7: { name: "The Chariot", raName: "Great Way of the Mind", cycle: "mind", position: "great-way" },
    8: { name: "Justice", raName: "Matrix of the Body", cycle: "body", position: "matrix" },
    9: { name: "The Sage", raName: "Potentiator of the Body", cycle: "body", position: "potentiator" },
    10: { name: "Wheel of Fortune", raName: "Catalyst of the Body", cycle: "body", position: "catalyst" },
    11: { name: "The Enchantress", raName: "Experience of the Body", cycle: "body", position: "experience" },
    12: { name: "The Martyr", raName: "Significator of the Body", cycle: "body", position: "significator" },
    13: { name: "Death", raName: "Transformation of the Body", cycle: "body", position: "transformation" },
    14: { name: "The Alchemist", raName: "Great Way of the Body", cycle: "body", position: "great-way" },
    15: { name: "The Devil", raName: "Matrix of the Spirit", cycle: "spirit", position: "matrix" },
    16: { name: "Lightning Struck Tower", raName: "Potentiator of the Spirit", cycle: "spirit", position: "potentiator" },
    17: { name: "The Star", raName: "Catalyst of the Spirit", cycle: "spirit", position: "catalyst" },
    18: { name: "The Moon", raName: "Experience of the Spirit", cycle: "spirit", position: "experience" },
    19: { name: "The Sun", raName: "Significator of the Spirit", cycle: "spirit", position: "significator" },
    20: { name: "Awakening", raName: "Transformation of the Spirit", cycle: "spirit", position: "transformation" },
    21: { name: "The World", raName: "Great Way of the Spirit", cycle: "spirit", position: "great-way" },
    22: { name: "The Fool", raName: "The Choice", cycle: "spirit", position: "choice" }
};

// Load enhanced descriptions from JSON
async function loadEnhancedData() {
    // Try multiple possible paths - root directory first since that's where it is
    const possiblePaths = [
        'tarot_card_descriptions.json',
        './tarot_card_descriptions.json',
        'public/data/tarot_card_descriptions.json',
        './public/data/tarot_card_descriptions.json'
    ];
    
    let enhancedData = null;
    
    for (const path of possiblePaths) {
        try {
            const response = await fetch(path);
            if (response.ok) {
                enhancedData = await response.json();
                console.log('Loaded JSON from:', path);
                break;
            }
        } catch (e) {
            console.log('Failed to load from:', path);
        }
    }
    
    if (enhancedData) {
        // Merge enhanced data with basic data and image paths
        for (let num in basicCardData) {
            tarotData[num] = {
                ...basicCardData[num],
                images: imagePaths[num],
                framework: "",
                character: "",
                symbols: [],
                levels: {},
                raQuotes: [],
                jungian: "",
                lacanian: ""
            };
            
            // If we have enhanced data for this card, merge it in
            if (enhancedData[num]) {
                tarotData[num] = {
                    ...tarotData[num],
                    ...enhancedData[num],
                    images: imagePaths[num] // Keep image paths from our config
                };
            }
        }
        
        console.log('Enhanced card data loaded successfully!');
    } else {
        console.error('Could not load enhanced descriptions from any path, using basic data');
        // Use basic data as fallback
        for (let num in basicCardData) {
            tarotData[num] = {
                ...basicCardData[num],
                images: imagePaths[num],
                framework: "Detailed description will be added soon.",
                character: "",
                symbols: [],
                levels: {},
                raQuotes: [],
                jungian: "",
                lacanian: ""
            };
        }
    }
}

// Application State
let currentView = 'grid';
let currentCard = null;
let currentDeck = 0; // 0=Ra/Fathman, 1=RWS, 2=Thoth
let previousView = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', async () => {
    await loadEnhancedData();
    initializeEventListeners();
    initializeTheme();
    handleMobileGrid();
    showView('grid');
    
    // Re-handle mobile grid on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            handleMobileGrid();
        }, 250);
    });
    
    // Also listen for orientation changes
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            handleMobileGrid();
        }, 100);
    });
});

function initializeTheme() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

function handleMobileGrid() {
    // Portrait mode on mobile/tablet: width <= 768 AND height > width (portrait)
    // OR very narrow screen regardless of orientation
    const isPortrait = window.innerHeight > window.innerWidth;
    const isNarrow = window.innerWidth <= 500;
    const isMobilePortrait = (window.innerWidth <= 768 && isPortrait) || isNarrow;
    
    const gridHeader = document.querySelector('.grid-header');
    const gridContent = document.querySelector('.grid-content');
    
    if (!gridHeader || !gridContent) return;
    
    console.log('handleMobileGrid called', { 
        isMobilePortrait, 
        isPortrait,
        width: window.innerWidth,
        height: window.innerHeight,
        dataLoaded: Object.keys(tarotData).length 
    });
    
    if (isMobilePortrait && !gridContent.classList.contains('mobile-rebuilt')) {
        // Mark as rebuilt to avoid duplicate work
        gridContent.classList.add('mobile-rebuilt');
        
        // Rebuild header: empty corner + Mind/Body/Spirit
        gridHeader.innerHTML = `
            <div class="spacer"></div>
            <div class="column-header mobile-cycle" data-cycle="mind">MIND</div>
            <div class="column-header mobile-cycle" data-cycle="body">BODY</div>
            <div class="column-header mobile-cycle" data-cycle="spirit">SPIRIT</div>
        `;
        
        // Rebuild grid content with 7 position rows
        const positions = [
            { name: 'MATRIX', key: 'matrix' },
            { name: 'POTENTIATOR', key: 'potentiator' },
            { name: 'CATALYST', key: 'catalyst' },
            { name: 'EXPERIENCE', key: 'experience' },
            { name: 'SIGNIFICATOR', key: 'significator' },
            { name: 'TRANSFORMATION', key: 'transformation' },
            { name: 'GREAT WAY', key: 'great-way' }
        ];
        
        const cycles = ['mind', 'body', 'spirit'];
        let gridHTML = '';
        
        positions.forEach((pos, rowIndex) => {
            // Add position row header
            gridHTML += `<div class="row-header mobile-position" data-position="${pos.key}">${pos.name}</div>`;
            
            // Add cards for each cycle in this position
            cycles.forEach(cycle => {
                // Find card by matching cycle and position
                let foundCard = null;
                let foundNum = null;
                
                for (const [num, data] of Object.entries(tarotData)) {
                    if (num !== '22' && data.cycle === cycle && data.position === pos.key) {
                        foundCard = data;
                        foundNum = num;
                        break;
                    }
                }
                
                if (foundCard && foundNum) {
                    gridHTML += `
                        <div class="card-cell mobile-card" data-archetype="${foundNum}" data-cycle="${cycle}" data-position="${pos.key}">
                            <img src="${foundCard.images.ra}" alt="${foundCard.name}">
                            <span class="card-name">${foundCard.name}</span>
                        </div>
                    `;
                } else {
                    // Placeholder for missing cards  
                    console.log(`Missing card: ${cycle} ${pos.key}`);
                    gridHTML += `<div class="card-cell card-placeholder"></div>`;
                }
            });
        });
        
        gridContent.innerHTML = gridHTML;
        
        // Apply styles directly via JavaScript after render
        const isDark = document.body.classList.contains('dark-mode');
        const bgColor = isDark ? '#1A1A2E' : '#FFFFFF';
        const borderColor = isDark ? '#E8E8E8' : '#1A1A1A';
        
        document.querySelectorAll('.mobile-card').forEach(card => {
            card.style.setProperty('background', bgColor, 'important');
            card.style.setProperty('background-color', bgColor, 'important');
            card.style.setProperty('border', `3px solid ${borderColor}`, 'important');
        });
        
        document.querySelectorAll('.card-placeholder').forEach(card => {
            const placeholderBg = isDark ? '#16213E' : '#E5E5E5';
            card.style.setProperty('background', placeholderBg, 'important');
            card.style.setProperty('background-color', placeholderBg, 'important');
            card.style.setProperty('opacity', '0.3', 'important');
        });
        
        // Reattach event listeners for mobile grid
        attachMobileEventListeners();
        
    } else if (!isMobilePortrait && gridContent.classList.contains('mobile-rebuilt')) {
        // Switching back to desktop/landscape - reload page to restore original HTML
        location.reload();
    }
}

function attachMobileEventListeners() {
    // Mobile card clicks
    document.querySelectorAll('.mobile-card').forEach(cell => {
        cell.style.cursor = 'pointer';
        cell.style.pointerEvents = 'auto';
        
        cell.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const archetype = parseInt(this.dataset.archetype);
            showCardDetail(archetype);
        }, true);
    });
    
    // Mobile cycle column header clicks
    document.querySelectorAll('.mobile-cycle').forEach(header => {
        header.addEventListener('click', function(e) {
            e.stopPropagation();
            const cycle = this.dataset.cycle;
            showFocusedView('cycle', cycle);
        });
    });
    
    // Mobile position row header clicks
    document.querySelectorAll('.mobile-position').forEach(header => {
        header.addEventListener('click', function(e) {
            e.stopPropagation();
            const position = this.dataset.position;
            showFocusedView('position', position);
        });
    });
}

function initializeTheme() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

function initializeEventListeners() {
    // Home button
    document.getElementById('home-button').addEventListener('click', () => {
        showView('grid');
    });

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Grid card clicks
    document.querySelectorAll('.card-cell').forEach(cell => {
        // Multiple approaches to ensure clicks work
        cell.style.cursor = 'pointer';
        cell.style.pointerEvents = 'auto';
        
        cell.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const archetype = parseInt(this.dataset.archetype);
            console.log('Card clicked:', archetype);
            showCardDetail(archetype);
        }, true); // Use capture phase
    });

    // Fool card clicks
    document.querySelectorAll('.card-small').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Fool clicked');
            showCardDetail(22);
        }, true);
    });

    // Column header clicks (archetypal positions on desktop, cycles on mobile)
    // Mobile handlers are attached separately in handleMobileGrid()
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
        document.querySelectorAll('.column-header').forEach((header, index) => {
            header.addEventListener('click', () => {
                const positions = ['matrix', 'potentiator', 'catalyst', 'experience', 'significator', 'transformation', 'great-way'];
                showFocusedView('position', positions[index]);
            });
        });

        // Row header clicks (cycles on desktop)
        document.querySelectorAll('.row-header').forEach((header, index) => {
            header.addEventListener('click', () => {
                const cycles = ['mind', 'body', 'spirit'];
                showFocusedView('cycle', cycles[index]);
            });
        });
    }

    // Card navigation arrows
    document.getElementById('prev-card').addEventListener('click', () => {
        navigateCard(-1);
    });

    document.getElementById('next-card').addEventListener('click', () => {
        navigateCard(1);
    });

    // Deck slider (detail view)
    document.getElementById('deck-slider').addEventListener('input', (e) => {
        currentDeck = parseInt(e.target.value);
        updateCardImage();
    });
    
    // Grid deck slider (main view)
    document.getElementById('grid-deck-slider').addEventListener('input', (e) => {
        currentDeck = parseInt(e.target.value);
        updateAllGridImages();
        // Sync with detail view slider
        document.getElementById('deck-slider').value = currentDeck;
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (currentView === 'detail') {
            if (e.key === 'ArrowLeft') {
                navigateCard(-1);
            } else if (e.key === 'ArrowRight') {
                navigateCard(1);
            } else if (e.key === 'Escape') {
                showView('grid');
            }
        }
    });

    // Touch swipe for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.getElementById('detail-view').addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.getElementById('detail-view').addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            navigateCard(1); // Swipe left = next
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            navigateCard(-1); // Swipe right = previous
        }
    }
}

function showView(viewName) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(`${viewName}-view`).classList.add('active');
    currentView = viewName;
}

function showFocusedView(type, value) {
    previousView = 'grid';
    const focusedContent = document.getElementById('focused-content');
    const focusedTitle = document.getElementById('focused-title');
    
    focusedContent.innerHTML = '';
    
    // Comprehensive cycle descriptions from "The Tarot According to Ra"
    const cycleDescriptions = {
        mind: `<h4 style="color: var(--memphis-pink); margin-bottom: 15px;">The Mind Cycle (Archetypes 1-7)</h4>
<p>The mind is the part of the self that has beliefs and emotions connected to those beliefs. The mind constructs stories about its experiences; its desires and intentions are governed by how it sees itself and others within those stories. Minds look at the world and see meaning and meaningfulness.</p>
<p>Because the mind's relationship to itself is veiled, this cycle is characterized by the gradual process of coming to know the hidden aspects of one's own mind. <strong>On the right-hand path, the lesson of the mind cycle is to love self and other unconditionally.</strong></p>
<p>Ra tells us that the mind must be initiated before the body. This is because the body cannot be properly used as a tool for honing one's ability to serve others unless the mind has a healthy relationship to itself. Without this first step, the bodily evolutionary mechanisms will always be overwhelmed by the overriding nature of the mind—the body will constantly reflect the mind's internal conflicts back to itself until the mind is initiated.</p>
<p>The mechanisms of the mind cycle tend to open and balance the lower four energy centers (red through green).</p>`,

        body: `<h4 style="color: var(--memphis-cyan); margin-bottom: 15px;">The Body Cycle (Archetypes 8-14)</h4>
<p>The body is the part of the self that exists as a vehicle for the mind's quest for meaning and meaningful action. As the mind is governed by the relationships between beliefs, thoughts, emotions, and attachments, so the body is governed by intentions, actions, consequences, and the laws of cause and effect. Our experience of the body is as the driver of the vehicle.</p>
<p>Because the mind is hidden from itself, the divisions and conflicts within the mind express themselves in the body. The mind controls the body, so internal mental conflicts are expressed through the body as external conflicts in intention, action, and consequence. The spiritual purpose of the body is to offer the mind a mirror to better understand itself and thereby understand others as well.</p>
<p><strong>On the right-hand path, the lesson of the body cycle is to act in ways that genuinely serve others.</strong></p>
<p>This cycle is characterized by the gradual process of developing the awareness and skill that allow one's intentions to successfully manifest in the physical world without unintended consequences. The body cycle tends to refine the green (heart) energy center and open the blue (throat) energy center.</p>`,

        spirit: `<h4 style="color: var(--memphis-yellow); margin-bottom: 15px;">The Spirit Cycle (Archetypes 15-21)</h4>
<p>The spirit is the part of the self that connects the mind to the One Infinite Creator. The spirit is our personal link to the divine and to the source of all power. According to Ra, carefully and consciously accessing this link allows us to work literal miracles. The spirit is the emissary of the divine, so our experience of it is characterized by the finite self opening up to an infinite whole.</p>
<p>Because the mind is hidden from itself, the wholeness of spirit is hidden from the mind. If the spirit were fully accessible to the mind, then the mind would be fully accessible to itself, since our presence to the truths of spirit will inevitably shine back down on the mind. The purpose of the spirit is to offer us a pathway for return to the One Infinite Creator whose gravity attracts all in the illusion of separation back to itself.</p>
<p><strong>On the right-hand path, the lesson of the spirit cycle is to allow personal attachments and desires to fall away and allow the divine will to guide all thought and action.</strong></p>
<p>Attempting to initiate the spirit before the body is especially dangerous, since one's actions will not have been tempered by the wisdom of experience—manifestations of spiritual awakening can cause dire consequences when unwisely acted out. The spirit cycle tends to open and refine the indigo (third eye) energy center.</p>`
    };
    
    // Comprehensive position descriptions from "The Tarot According to Ra"
    const positionDescriptions = {
        matrix: `<h4 style="color: var(--memphis-pink); margin-bottom: 15px;">The Matrix</h4>
<p>The Matrix is the experiential continuum that surrounds the sub-sub-Logos within us. Just as the witness (the Choice) observes the drama of objective reality, so the Potentiator is the subject in relation to the Matrix: the changes in the experiential continuum are the experience of self that the Potentiator chooses and observes.</p>
<p>The Matrix is a receptacle that takes on the changes chosen by the Potentiator. Because the receptacle is also intelligent, it requests change in its own unique way—representing the free will of the experienced. The Matrix wants to be experienced by and augmented by the Logos (Potentiator).</p>
<p>Ra says that the Matrix "reaches" for the Potentiator, just as intelligent energy reaches for the Logos. The Matrix invites the Potentiator, and the Potentiator answers the invitation through free will, initiating "experiments in novelty."</p>
<p><strong>Ra tells us that "the adept, whether positive or negative, has the same Matrix."</strong> This means Matrix archetypes do not polarize—they represent the part of self that wants to gain experience, without bias toward one moral path or another. The Matrix personas reach for and desire novel experience, but lack the resources to produce that novelty themselves.</p>`,

        potentiator: `<h4 style="color: var(--memphis-cyan); margin-bottom: 15px;">The Potentiator</h4>
<p>The Potentiator represents the sub-sub-Logos within us: the self within the illusion that is invested with the awareness and omnipotence of the Creator. It is the mind and hand of the unique part of the Creator that is the ultimate reality of each individual—the source of creative potential.</p>
<p>The Potentiator has the resources for novel experience and, when invited by the Matrix, acts to change the experiential continuum. The Potentiator represents the infinitely unique depth of self that has no choice about what it is. We are not free to be anything but ourselves, so the free will of the Potentiator is only the freedom to be what it is—it makes no choices; it only acts as it desires in the only way it ever could.</p>
<p><strong>Ra confirms that "the Potentiator is also identical" whether one is positively or negatively polarized.</strong> Like the Matrix, the Potentiator does not polarize. It contains all potentials for experience without particular bias for one moral path or another. This remains true no matter how much we evolve.</p>
<p>The veiling process hides the Potentiator from the Matrix, making contact between them difficult. But this difficulty also generates sufficient desire within veiled entities to develop the discipline necessary for spiritual graduation.</p>`,

        catalyst: `<h4 style="color: var(--memphis-yellow); margin-bottom: 15px;">The Catalyst</h4>
<p>When the Matrix reaches for the Potentiator to make a change within it, the Potentiator's choice produces a reaction—the Catalyst—between the two. This reaction exposes the Potentiator's choice to the Matrix in a coded way that allows the information to be interpreted along either the right-hand or left-hand path.</p>
<p>The Catalyst is the change in the experiential continuum as it presents itself to us. Contact between Potentiator and Matrix sparks changes that are not always apparent, but the aspects that are apparent are the Catalyst for our evolution. How we respond to Catalyst determines how successful our efforts to progress are.</p>
<p>Think of the Catalyst as a turning gear between the Potentiator and Matrix, into which the content emerging from the Potentiator is fed. The coding mechanism of the Catalyst lies along an axis of polarity—<strong>catalyst can be encoded in ways that favor one path over another, or in ways that mix the methods of both paths.</strong></p>
<p>Catalyst appears in "shades of grey" requiring moral interpretation. Apparently negative catalyst tends to polarize toward service-to-others (acceptance), while apparently positive catalyst can lead toward service-to-self (manipulation). Our Logos built these mechanisms into our illusion to give us opportunities for evolution.</p>`,

        experience: `<h4 style="color: var(--memphis-green); margin-bottom: 15px;">The Experience</h4>
<p>The Experience is the mechanism for processing Catalyst which, through discipline, allows us to make constructive use of the opportunities that Catalyst presents. Think of Experience as a second turning gear between the Matrix and the Catalyst—it receives information from the Catalyst, converts it to a form recordable in the Matrix, then the Matrix receives the change.</p>
<p>When we successfully employ the mechanisms of an Experience archetype, a change is recorded in the Matrix. Now that the Matrix has changed, its desire to be potentiated also changes and the possibilities for experience change. With the lesson learned, the Potentiator may, through free will, enact a new experiment in novelty. Thus, the cycle begins anew.</p>
<p><strong>Like Catalyst, the Experience mechanisms are variable along the dimension of moral polarity.</strong> The Experience can decode Catalyst in ways that favor one path, or in ways that mix the two paths. This variability is key—the coding and decoding process muddies communication between Matrix and Potentiator specifically along the dimension of morality.</p>
<p>The Experience personas work with the Catalyst personas to integrate and process new experiences. If integration is successful, the completion of the cycle causes a change in the Matrix. With the lesson learned, the Matrix now judges that the frontier for new experience is different from before.</p>`,

        significator: `<h4 style="color: var(--memphis-orange); margin-bottom: 15px;">The Significator</h4>
<p>The whole system of experience—the veiling medium through which change made by the Potentiator is recorded in the Matrix—is the Significator. This is the self considered as a whole. We are Logoi making changes in our experiential continua through a veil that requires coding and decoding.</p>
<p>Ra tells us that a Significator describes the very nature of the mind complex, body complex, or spirit complex. These personas represent each of the three basic parts of an entity as a whole. The previous four classifications (Matrix, Potentiator, Catalyst, Experience) represent the moving parts or organs within the Significator.</p>
<p><strong>The Significator identifies the repository of all biases acquired in previous lives.</strong> A Matrix has biased desires for certain kinds of novelty; a Potentiator has biases about appropriate lessons; Catalyst has tendencies in how it presents itself; and Experience has biases about how Catalyst should be processed. All these biases come together to form the unique functioning of the complex as a whole.</p>
<p>According to Ra, "free will, in the full sense" came from one ingenious Logos's attempt to imagine the Significator of Mind as complex (the Veiling). The ability to choose between the two moral paths belongs to the Significator. Because the intermediary mechanisms (Catalyst and Experience) can be of variable moral polarity, the Significator can also be of variable moral polarity.</p>`,

        transformation: `<h4 style="color: var(--memphis-purple); margin-bottom: 15px;">The Transformation</h4>
<p>A Significator cannot change itself. But there is a mechanism for switching out one's Catalyst and Experience processes for more polarized versions—this is called Transformation. Transformation can remove the Catalyst and Experience mechanisms currently in the Significator and exchange them for a new, more morally pure set. This allows the Significator to gradually improve in moral polarity by changing its very nature.</p>
<p>The Transformation reveals the kind of free will we think of as "the ability to do otherwise." Because Transformation is outside the Significator (what we think of as ourselves), it cannot be activated or chosen by the Significator. Becoming something different from what we are is not something we can do on our own.</p>
<p><strong>Transformation archetypes are fundamentally transitional personas—states of mind revolving around an event, with a before-state and an after-state.</strong> Their desires and abilities are all oriented toward successfully passing through the transformation from one Significator to the next. But they don't explain why transformation comes about—that happens because the Choice (the Fool) is tired of the Significator as it is and wants change.</p>
<p>Success in transforming depends on two things: (1) resistance to the process due to fear of what will be lost in getting to the after-state, and (2) the degree to which we have purely identified with the associated Great Way archetype.</p>`,

        'great-way': `<h4 style="color: var(--memphis-red); margin-bottom: 15px;">The Great Way</h4>
<p>As the Transformation archetypes are fundamentally transitional personas, the Great Way archetypes are the very opposite—they describe universal personas. The Great Way is the overarching path of spiritual evolution; it lays out the environment within which the Significator transforms.</p>
<p><strong>The unique contribution of the Great Way archetype is that it provides the Transformation archetype with direction.</strong> The Significator does not transform in an ungrounded, unpredictable way. The Great Way archetypes describe a pure devotion to one or another direction of spiritual evolution. The Significator's transformations move it progressively in the direction indicated by the Great Way.</p>
<p>The Great Way depicts all coordinating elements in their large-scale relationships, showing the inescapable nature of the journey toward self-knowledge. Unlike other archetypes that are expressed periodically, the Great Way is always active for those pursuing inner evolution.</p>
<p>The Great Way is outside both the Significator and Transformation. It is the axis along which one can transform—the direction in which one is heading in choosing to transform. This context provides purpose to the choices made by the Choice (the Fool). The Great Way archetypes represent the endpoint toward which the path is heading, the consistent orientation that gives meaning to each successive transformation.</p>`
    };
    
    // Cycle narrative stories - how each cycle works as a whole
    const cycleStories = {
        mind: `<h4 style="color: var(--memphis-pink); margin-top: 30px; margin-bottom: 15px;">The Story of the Mind Cycle</h4>
<p>The Mind Cycle tells the story of consciousness coming to know itself through the veiled relationship between the conscious and unconscious mind.</p>
<p><strong>The Magician (Matrix)</strong> represents the conscious mind—full of desire but empty of content, reaching toward the unknown for fulfillment. He is the "unfed mind" that longs to be nourished by experience.</p>
<p><strong>The High Priestess (Potentiator)</strong> is the vast unconscious, containing everything that can be known but is not yet known. She holds all the scrolls of wisdom but reveals them only when properly approached. The veil between Magician and Priestess is the fundamental structure of our mental experience.</p>
<p><strong>The Empress (Catalyst)</strong> emerges from the union of conscious reaching and unconscious answering. She is the constant stream of thoughts, feelings, and spontaneous expressions that flow through us—each one a coded opportunity for self-knowledge. Her offerings appear in "shades of grey," requiring moral interpretation.</p>
<p><strong>The Emperor (Experience)</strong> processes and judges the Catalyst, deciding what it means and recording changes in the Matrix. He discriminates between experiences, building the framework through which we understand ourselves and others.</p>
<p><strong>The Hierophant (Significator)</strong> represents the whole mind complex—all our accumulated biases, beliefs, and ways of processing experience. He is who we have become through countless iterations of the lesser cycle, the storyteller who weaves meaning from our experiences.</p>
<p><strong>The Lovers (Transformation)</strong> stand at the crossroads where genuine change becomes possible. Here the Choice (the Fool) can intervene, tired of the current Significator and desiring something different. The transformation requires choosing one path and sacrificing another.</p>
<p><strong>The Chariot (Great Way)</strong> shows the endpoint of mental evolution—the integrated self moving through life with all aspects working in harmony. The sphinxes of light and dark are tamed, serving rather than pulling apart. This is the direction toward which all mental transformation moves.</p>`,

        body: `<h4 style="color: var(--memphis-cyan); margin-top: 30px; margin-bottom: 15px;">The Story of the Body Cycle</h4>
<p>The Body Cycle tells the story of intention manifesting as action, and action teaching us through consequence. The body serves as a mirror for the mind's internal conflicts, expressing them externally.</p>
<p><strong>Justice (Matrix)</strong> represents the body's experiential continuum—the instinctual, unreflective responses that govern our physical existence. She operates according to lex talionis: proportional response, natural consequence. She is blindfolded because the body knows without knowing how it knows.</p>
<p><strong>The Hermit/Sage (Potentiator)</strong> carries the wisdom of embodied experience, the "knowing in the bones" that guides us when the conscious mind cannot see the way. His small candle illuminates only the next step—the body cannot plan far ahead but knows the immediate path with certainty.</p>
<p><strong>The Wheel of Fortune (Catalyst)</strong> represents the turning circumstances of physical existence—the ups and downs of fortune that test our embodied responses. Typhon descends while Hermanubis rises; what was high becomes low. These changes in circumstance are the body's opportunities for evolution.</p>
<p><strong>Strength (Experience)</strong> shows the proper relationship between will and instinct. The woman doesn't dominate the lion through force but through rapport and understanding. She processes the Catalyst of circumstance by working with the body's nature rather than against it.</p>
<p><strong>The Hanged Man (Significator)</strong> represents the whole body complex—suspended, unable to act, forced into receptive stillness. He is the homesteader who must balance expenditure and renewal, learning the economy of energy that allows continued existence.</p>
<p><strong>Death (Transformation)</strong> is the radical restructuring of physical existence. When the Hanged Man's current configuration becomes unsustainable, Death reaps what must go. This is not metaphorical—it is the body insisting that this way of living cannot continue.</p>
<p><strong>Temperance/The Alchemist (Great Way)</strong> shows the ongoing work of bodily integration—the patient transmutation of raw experience into wisdom. One foot on land, one in water, she bridges realms while continuously refining her relationship to physical existence.</p>`,

        spirit: `<h4 style="color: var(--memphis-yellow); margin-top: 30px; margin-bottom: 15px;">The Story of the Spirit Cycle</h4>
<p>The Spirit Cycle tells the story of the finite self opening to the infinite—our journey from separation back to unity with the One Infinite Creator. This is the most mysterious cycle, dealing with powers that can work literal miracles.</p>
<p><strong>The Devil (Matrix)</strong> represents the spiritual experiential continuum before any contact with higher power. She is the Adversary—not evil, but the experience of being fundamentally misunderstood, of living connected to powers that others fear. She guards the threshold against the unprepared.</p>
<p><strong>The Tower (Potentiator)</strong> is the lightning strike of spiritual awakening—the sudden, dramatic revelation that destroys false structures. The Disgraced Priest's carefully constructed spiritual edifice is shattered, revealing that it was built on sand. This is terrifying but necessary.</p>
<p><strong>The Star (Catalyst)</strong> emerges after the destruction, naked and vulnerable but open. She is the Faithful—having lost everything, she discovers what cannot be lost. Her two streams pour healing waters, offering the soul opportunities for genuine spiritual development.</p>
<p><strong>The Moon (Experience)</strong> processes spiritual Catalyst through the Watcher who guards the threshold. The two jackals—one helpful, one deceptive—represent the difficulty of spiritual discrimination. In the dim moonlight, nothing is clear; subtle sensing replaces rational assessment.</p>
<p><strong>The Sun (Significator)</strong> represents the whole spirit complex—the Celebrant who radiates or absorbs divine light. This is the self that either shares its connection with the Creator or feeds on the spiritual energy of others. The choice of polarity is most stark here.</p>
<p><strong>Judgment (Transformation)</strong> is the call from beyond that resurrects what has been entombed. The Prophet has dwelt in living death, will to live sapped, until the trumpet sounds. This is spiritual emergency as apocalypse—the unveiling that destroys the world-that-was.</p>
<p><strong>The World (Great Way)</strong> shows the Avatar living within constant flow of spiritual energy from Creator into manifestation. The feminine plays the masculine as instrument; the sacred circle is now mobile. This is the crown already upon the head—full integration with divine will.</p>`
    };
    
    // Position card summaries - how each card manifests in that position
    const positionCardSummaries = {
        matrix: `<h4 style="color: var(--memphis-pink); margin-top: 30px; margin-bottom: 15px;">The Three Matrices</h4>
<p><strong>The Magician (Mind)</strong> is the conscious mind reaching for experience—full of desire but empty of content. He represents our longing to understand ourselves and our world. His magical orb symbolizes the spiritual nature of what he seeks; his pointing hand shows the direction of his desire toward the hidden contents of the unconscious.</p>
<p><strong>Justice (Body)</strong> is the instinctual body responding before thought—the Wild Woman who acts without reflection. Blindfolded, she operates by feel rather than sight, governing through natural law and proportional response. She represents the body's honest feedback that cannot lie or rationalize.</p>
<p><strong>The Devil (Spirit)</strong> is the spiritual self before awakening—the Adversary who dwells at the threshold. She is neither good nor evil but represents the experience of radical individuality, the "if it feels right, it is right" orientation that precedes any recognition of the two paths. She guards against premature spiritual opening.</p>`,

        potentiator: `<h4 style="color: var(--memphis-cyan); margin-top: 30px; margin-bottom: 15px;">The Three Potentiators</h4>
<p><strong>The High Priestess (Mind)</strong> is the vast unconscious mind—the Maiden who contains all that can be known but is not yet known. She holds the scrolls of wisdom behind the veil, answering when properly approached. She represents the infinite depth of self that awaits discovery through the gradual process of unveiling.</p>
<p><strong>The Hermit (Body)</strong> is embodied wisdom—the Sage who carries the small candle of instinctive knowing. He cannot show the whole path, only the next step, because bodily wisdom operates in the immediate present. His two serpents represent the complementary poles of bodily guidance.</p>
<p><strong>The Tower (Spirit)</strong> is divine revelation—the lightning strike that destroys false spiritual constructs. The Disgraced Priest experiences the shattering of everything he thought he knew about the sacred. This violent potentiation is necessary because the spirit's truth cannot coexist with spiritual pretense.</p>`,

        catalyst: `<h4 style="color: var(--memphis-yellow); margin-top: 30px; margin-bottom: 15px;">The Three Catalysts</h4>
<p><strong>The Empress (Mind)</strong> is the constant stream of thoughts and feelings—the Expressive who pours forth mental and emotional content spontaneously. Each expression is a coded opportunity for self-knowledge, appearing in "shades of grey" that require moral interpretation. She offers truth but not clarity about what to do with it.</p>
<p><strong>The Wheel of Fortune (Body)</strong> is the turning of circumstance—the Affected experiencing the rise and fall of fortune. Typhon descends, Hermanubis rises; the sphinx watches from above. These changes test our embodied responses and reveal how we have brought our circumstances upon ourselves.</p>
<p><strong>The Star (Spirit)</strong> is the opportunity for spiritual renewal—the Faithful pouring healing waters after catastrophe. Having been stripped bare by the Tower, she offers the soul genuine opportunities for growth. Her nakedness represents vulnerability transformed into openness to divine blessing.</p>`,

        experience: `<h4 style="color: var(--memphis-green); margin-top: 30px; margin-bottom: 15px;">The Three Experiences</h4>
<p><strong>The Emperor (Mind)</strong> is the discriminating function—the Judge who processes Catalyst and determines meaning. He sits on his throne with scepter (generative authority) and ankh (life-preserving wisdom), ordering experience into the framework through which we understand ourselves. His judgments build our mental architecture.</p>
<p><strong>Strength (Body)</strong> is the harmonious relationship between will and instinct—the Whisperer who tames without dominating. She processes the Catalyst of circumstance by working with the body's nature, achieving "synergistic harmony of emotions." Her upright pitcher shows emotional biases now guiding rather than overwhelming.</p>
<p><strong>The Moon (Spirit)</strong> is the process of spiritual discrimination—the Watcher in the Night who guards the threshold between worlds. The two jackals (true helper and false seducer) represent the difficulty of distinguishing genuine spiritual guidance from deception. Diffuse moonlight requires subtle sensing.</p>`,

        significator: `<h4 style="color: var(--memphis-orange); margin-top: 30px; margin-bottom: 15px;">The Three Significators</h4>
<p><strong>The Hierophant (Mind)</strong> represents the whole mind complex—the Storyteller who weaves meaning from experience. He is the repository of all mental biases accumulated through incarnations, the doctrine-maker who contextualizes events within larger patterns. He guards the threshold to the Greater Cycle.</p>
<p><strong>The Hanged Man (Body)</strong> represents the whole body complex—the Homesteader suspended in enforced stillness. Unable to act, he must learn the economy of energy: what to hold, what to release. His crossed limbs form the ankh, suggesting that limitation itself becomes the path to life.</p>
<p><strong>The Sun (Spirit)</strong> represents the whole spirit complex—the Celebrant who lives in and through characteristic spiritual presence. People are drawn to him because of who he is, not what he does. The sacred takes shape as the pleasant; daily existence becomes ongoing communion with the divine.</p>`,

        transformation: `<h4 style="color: var(--memphis-purple); margin-top: 30px; margin-bottom: 15px;">The Three Transformations</h4>
<p><strong>The Lovers (Mind)</strong> stand at the crossroads of mental transformation—the Chooser facing two paths that cannot both be walked. This is where the Choice (the Fool) can intervene to change who we are mentally. The figure is transformed by choosing, not by what is chosen. Neither path is wrong; the transformation is in committing.</p>
<p><strong>Death (Body)</strong> is the radical restructuring of physical existence—the Reaper who comes when the current configuration is unsustainable. This is the body's insistence that this way of living cannot continue. Heads, hands, and feet are harvested—mental approach, actions, and way of life all under review.</p>
<p><strong>Judgment (Spirit)</strong> is the call from beyond personal self—the Prophet rising from living death when the trumpet sounds. Nothing the entombed one can do initiates this; it comes from outside. The burial wrappings fall away, the sarcophagus opens. This is spiritual resurrection through grace.</p>`,

        'great-way': `<h4 style="color: var(--memphis-red); margin-top: 30px; margin-bottom: 15px;">The Three Great Ways</h4>
<p><strong>The Chariot (Mind)</strong> shows mental integration achieved—the Conqueror moving through life with all aspects working in harmony. Light and dark sphinxes serve rather than divide. The canopy of stars indicates alignment with archetypal order. This is what mental evolution moves toward: centered authority with appropriate boundaries.</p>
<p><strong>Temperance (Body)</strong> shows the ongoing work of bodily integration—the Alchemist transmuting raw experience into refined wisdom. One foot on land, one in water, she bridges realms while continuously pouring between vessels. This is not an achievement but an enduring practice of balance.</p>
<p><strong>The World (Spirit)</strong> shows spiritual integration achieved—the Avatar living within constant flow of divine energy. The feminine plays the masculine as instrument; he offers himself to be played. The winged lingam-yoni flies freely; the sacred circle is now mobile. Every part of creation is revealed as holy ground.</p>`
    };
    
    if (type === 'cycle') {
        const cycleNames = { mind: 'Mind', body: 'Body', spirit: 'Spirit' };
        focusedTitle.textContent = `The ${cycleNames[value]} Cycle`;
        
        // Add description
        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'cycle-description';
        descriptionDiv.style.cssText = 'background: var(--bg-secondary); border: 4px solid var(--border-color); padding: 25px; margin-bottom: 20px; line-height: 1.8; color: var(--text-primary); font-size: 1.1rem; word-wrap: break-word; overflow-wrap: break-word;';
        descriptionDiv.innerHTML = cycleDescriptions[value];
        focusedContent.appendChild(descriptionDiv);
        
        // Add cycle story
        const storyDiv = document.createElement('div');
        storyDiv.className = 'cycle-story';
        storyDiv.style.cssText = 'background: var(--bg-secondary); border: 4px solid var(--border-color); padding: 25px; margin-bottom: 40px; line-height: 1.8; color: var(--text-primary); font-size: 1.1rem; word-wrap: break-word; overflow-wrap: break-word;';
        storyDiv.innerHTML = cycleStories[value];
        focusedContent.appendChild(storyDiv);
        
        // Create wrapper for cards in single row
        const cardsWrapper = document.createElement('div');
        cardsWrapper.className = 'focused-cards-wrapper';
        focusedContent.appendChild(cardsWrapper);
        
        focusedContent.classList.add('cycle-view');
        focusedContent.classList.remove('position-view');
        
        // Get all cards in this cycle
        Object.entries(tarotData).forEach(([num, card]) => {
            if (card.cycle === value && num !== '22') {
                addFocusedCard(num, card, cardsWrapper);
            }
        });
    } else if (type === 'position') {
        const positionNames = {
            matrix: 'Matrix',
            potentiator: 'Potentiator',
            catalyst: 'Catalyst',
            experience: 'Experience',
            significator: 'Significator',
            transformation: 'Transformation',
            'great-way': 'Great Way'
        };
        focusedTitle.textContent = `The ${positionNames[value]}`;
        
        // Add description
        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'position-description';
        descriptionDiv.style.cssText = 'background: var(--bg-secondary); border: 4px solid var(--border-color); padding: 25px; margin-bottom: 20px; line-height: 1.8; color: var(--text-primary); font-size: 1.1rem; word-wrap: break-word; overflow-wrap: break-word;';
        descriptionDiv.innerHTML = positionDescriptions[value];
        focusedContent.appendChild(descriptionDiv);
        
        // Add position card summaries
        const summaryDiv = document.createElement('div');
        summaryDiv.className = 'position-summary';
        summaryDiv.style.cssText = 'background: var(--bg-secondary); border: 4px solid var(--border-color); padding: 25px; margin-bottom: 40px; line-height: 1.8; color: var(--text-primary); font-size: 1.1rem; word-wrap: break-word; overflow-wrap: break-word;';
        summaryDiv.innerHTML = positionCardSummaries[value];
        focusedContent.appendChild(summaryDiv);
        
        // Create wrapper for cards in single row
        const cardsWrapper = document.createElement('div');
        cardsWrapper.className = 'focused-cards-wrapper';
        focusedContent.appendChild(cardsWrapper);
        
        focusedContent.classList.add('position-view');
        focusedContent.classList.remove('cycle-view');
        
        // Get all cards in this position
        Object.entries(tarotData).forEach(([num, card]) => {
            if (card.position === value && num !== '22') {
                addFocusedCard(num, card, cardsWrapper);
            }
        });
    }
    
    showView('focused');
}

function addFocusedCard(num, card, container) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card-cell';
    cardDiv.dataset.archetype = num;
    cardDiv.innerHTML = `
        <img src="${card.images.ra}" alt="${card.name}">
        <span class="card-name">${card.name}</span>
    `;
    cardDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        showCardDetail(parseInt(num));
    });
    container.appendChild(cardDiv);
}

function showCardDetail(archetypeNum) {
    previousView = currentView;
    currentCard = archetypeNum;
    const card = tarotData[archetypeNum];
    
    document.getElementById('detail-title').textContent = card.raName;
    
    // Framework
    let frameworkHTML = `<p>${card.framework}</p>`;
    if (card.character) {
        frameworkHTML += `<h4 style="margin-top: 20px; color: var(--memphis-cyan); font-family: var(--font-display); text-transform: uppercase; letter-spacing: 1px;">Character</h4>`;
        frameworkHTML += `<p>${card.character}</p>`;
    }
    document.getElementById('archetypal-framework').innerHTML = frameworkHTML;
    
    // Ra quotes
    const quotesDiv = document.getElementById('ra-quotes');
    if (card.raQuotes && card.raQuotes.length > 0) {
        quotesDiv.innerHTML = card.raQuotes.map(quote => {
            if (typeof quote === 'string') {
                return `<p>"${quote}"</p>`;
            } else if (quote.text) {
                const session = quote.session ? `<strong style="color: var(--memphis-cyan);">Session ${quote.session}:</strong> ` : '';
                return `<p>${session}"${quote.text}"</p>`;
            }
            return '';
        }).join('');
    } else {
        quotesDiv.innerHTML = '<p><em>Ra quotes will be added from the Law of One material.</em></p>';
    }
    
    // Symbolic elements
    const symbolsDiv = document.getElementById('symbolic-elements');
    if (card.symbols && card.symbols.length > 0) {
        symbolsDiv.innerHTML = '<ul style="list-style-position: inside; padding-left: 0;">' + 
            card.symbols.map(sym => `<li style="margin-bottom: 12px;">${sym}</li>`).join('') + 
            '</ul>';
    } else {
        symbolsDiv.innerHTML = '<p><em>Symbolic elements will be extracted from "The Tarot According to Ra".</em></p>';
    }
    
    // Levels of Expression
    const levelsDiv = document.getElementById('levels-of-expression');
    if (card.levels && (card.levels.personal || card.levels.interpersonal || card.levels.social)) {
        let levelsHTML = '';
        if (card.levels.personal) {
            levelsHTML += `<h4 style="color: var(--memphis-pink); margin-top: 15px;">Personal Level</h4><p>${card.levels.personal}</p>`;
        }
        if (card.levels.interpersonal) {
            levelsHTML += `<h4 style="color: var(--memphis-cyan); margin-top: 15px;">Interpersonal Level</h4><p>${card.levels.interpersonal}</p>`;
        }
        if (card.levels.social) {
            levelsHTML += `<h4 style="color: var(--memphis-yellow); margin-top: 15px;">Social Level</h4><p>${card.levels.social}</p>`;
        }
        levelsDiv.innerHTML = levelsHTML;
    } else {
        levelsDiv.innerHTML = '<p><em>Levels of expression will be added.</em></p>';
    }
    
    // Polarized Expressions
    const polarizedDiv = document.getElementById('polarized-expressions');
    const polarized = card.polarizedExpressions || card.polarized;
    if (polarized) {
        let polarizedHTML = '';
        // Handle note for non-polarized archetypes (Matrix/Potentiator)
        if (polarized.note) {
            polarizedHTML += `<p><em>${polarized.note}</em></p>`;
        }
        // Handle right-hand path / positive
        if (polarized.rightHandPath || polarized.positive) {
            const content = polarized.rightHandPath || polarized.positive;
            polarizedHTML += `<h4 style="color: var(--memphis-green); margin-top: 15px;">☀ Service to Others (Right-Hand Path)</h4><p>${content}</p>`;
        }
        // Handle left-hand path / negative
        if (polarized.leftHandPath || polarized.negative) {
            const content = polarized.leftHandPath || polarized.negative;
            polarizedHTML += `<h4 style="color: var(--memphis-red); margin-top: 15px;">☾ Service to Self (Left-Hand Path)</h4><p>${content}</p>`;
        }
        if (polarizedHTML) {
            polarizedDiv.innerHTML = polarizedHTML;
        } else {
            polarizedDiv.innerHTML = '<p><em>Polarized expressions will be added.</em></p>';
        }
    } else {
        polarizedDiv.innerHTML = '<p><em>Polarized expressions will be added.</em></p>';
    }
    
    // Distortions
    const distortionsDiv = document.getElementById('distortions-section');
    if (card.distortions && card.distortions.length > 0) {
        distortionsDiv.innerHTML = '<ul style="list-style-position: inside; padding-left: 0;">' + 
            card.distortions.map(dist => `<li style="margin-bottom: 12px;">${dist}</li>`).join('') + 
            '</ul>';
    } else {
        distortionsDiv.innerHTML = '<p><em>Distortions will be added.</em></p>';
    }
    
    // Jungian Analysis
    const jungianDiv = document.getElementById('jungian-analysis');
    if (card.jungian) {
        jungianDiv.innerHTML = `<p>${card.jungian}</p>`;
    } else {
        jungianDiv.innerHTML = '<p><em>Jungian analysis will be added.</em></p>';
    }
    
    // Lacanian Psychoanalysis
    const lacanianDiv = document.getElementById('lacanian-analysis');
    if (card.lacanian) {
        lacanianDiv.innerHTML = `<p>${card.lacanian}</p>`;
    } else {
        lacanianDiv.innerHTML = '<p><em>Lacanian analysis will be added.</em></p>';
    }
    
    updateCardImage();
    updateNavigationButtons();
    showView('detail');
}

function updateCardImage() {
    const card = tarotData[currentCard];
    const deckTypes = ['ra', 'rws', 'thoth'];
    const selectedDeck = deckTypes[currentDeck];
    
    document.getElementById('detail-card-image').src = card.images[selectedDeck];
    document.getElementById('detail-card-image').alt = card.name;
}

function updateAllGridImages() {
    const deckTypes = ['ra', 'rws', 'thoth'];
    const selectedDeck = deckTypes[currentDeck];
    
    // Update all card images in the grid
    document.querySelectorAll('.card-cell[data-archetype]').forEach(cell => {
        const archetype = cell.dataset.archetype;
        const card = tarotData[archetype];
        if (card && card.images) {
            const img = cell.querySelector('img');
            if (img) {
                img.src = card.images[selectedDeck];
            }
        }
    });
    
    // Update Fool card at bottom
    const foolCard = document.querySelector('#fool-bottom .card-small img');
    if (foolCard && tarotData['22'] && tarotData['22'].images) {
        foolCard.src = tarotData['22'].images[selectedDeck];
    }
}

function navigateCard(direction) {
    let newCard = currentCard + direction;
    
    // Wrap around (excluding Fool for now in sequence)
    if (newCard < 1) newCard = 22;
    if (newCard > 22) newCard = 1;
    
    showCardDetail(newCard);
}

function updateNavigationButtons() {
    // All cards can navigate, wrapping around
    document.getElementById('prev-card').disabled = false;
    document.getElementById('next-card').disabled = false;
}
