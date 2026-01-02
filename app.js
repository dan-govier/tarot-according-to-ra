// Tarot Card Data Structure - will be enhanced by loading JSON
let tarotData = {};

// Image path configuration
const imagePaths = {
    1: {
        ra: "/public/images/tarot/ra/magician.png",
        rws: "/public/images/tarot/rws/magician.jpg",
        thoth: "/public/images/tarot/thoth/magician.jpg"
    },
    2: {
        ra: "/public/images/tarot/ra/high-priestess.png",
        rws: "/public/images/tarot/rws/high-priestess.jpg",
        thoth: "/public/images/tarot/thoth/priestess.jpg"
    },
    3: {
        ra: "/public/images/tarot/ra/empress.png",
        rws: "/public/images/tarot/rws/empress.jpg",
        thoth: "/public/images/tarot/thoth/empress.jpg"
    },
    4: {
        ra: "/public/images/tarot/ra/emperor.png",
        rws: "/public/images/tarot/rws/emperor.jpg",
        thoth: "/public/images/tarot/thoth/emperor.jpg"
    },
    5: {
        ra: "/public/images/tarot/ra/hierophant.png",
        rws: "/public/images/tarot/rws/hierophant.jpg",
        thoth: "/public/images/tarot/thoth/hierophant.jpg"
    },
    6: {
        ra: "/public/images/tarot/ra/lovers.png",
        rws: "/public/images/tarot/rws/lovers.jpg",
        thoth: "/public/images/tarot/thoth/lovers.jpg"
    },
    7: {
        ra: "/public/images/tarot/ra/chariot.png",
        rws: "/public/images/tarot/rws/chariot.jpg",
        thoth: "/public/images/tarot/thoth/chariot.jpg"
    },
    8: {
        ra: "/public/images/tarot/ra/justice.png",
        rws: "/public/images/tarot/rws/strength.jpg",
        thoth: "/public/images/tarot/thoth/lust.jpg"
    },
    9: {
        ra: "/public/images/tarot/ra/sage.png",
        rws: "/public/images/tarot/rws/hermit.jpg",
        thoth: "/public/images/tarot/thoth/hermit.jpg"
    },
    10: {
        ra: "/public/images/tarot/ra/wheel.png",
        rws: "/public/images/tarot/rws/wheel.jpg",
        thoth: "/public/images/tarot/thoth/fortune.jpg"
    },
    11: {
        ra: "/public/images/tarot/ra/enchantress.png",
        rws: "/public/images/tarot/rws/justice.jpg",
        thoth: "/public/images/tarot/thoth/adjustment.jpg"
    },
    12: {
        ra: "/public/images/tarot/ra/hangedman.png",
        rws: "/public/images/tarot/rws/hanged-man.jpg",
        thoth: "/public/images/tarot/thoth/hanged-man.jpg"
    },
    13: {
        ra: "/public/images/tarot/ra/death.png",
        rws: "/public/images/tarot/rws/death.jpg",
        thoth: "/public/images/tarot/thoth/death.jpg"
    },
    14: {
        ra: "/public/images/tarot/ra/alchemist.png",
        rws: "/public/images/tarot/rws/temperance.jpg",
        thoth: "/public/images/tarot/thoth/art.jpg"
    },
    15: {
        ra: "/public/images/tarot/ra/devil.png",
        rws: "/public/images/tarot/rws/devil.jpg",
        thoth: "/public/images/tarot/thoth/devil.jpg"
    },
    16: {
        ra: "/public/images/tarot/ra/lightning.png",
        rws: "/public/images/tarot/rws/tower.jpg",
        thoth: "/public/images/tarot/thoth/tower.jpg"
    },
    17: {
        ra: "/public/images/tarot/ra/star.png",
        rws: "/public/images/tarot/rws/star.jpg",
        thoth: "/public/images/tarot/thoth/star.jpg"
    },
    18: {
        ra: "/public/images/tarot/ra/moon.png",
        rws: "/public/images/tarot/rws/moon.jpg",
        thoth: "/public/images/tarot/thoth/moon.jpg"
    },
    19: {
        ra: "/public/images/tarot/ra/sun.png",
        rws: "/public/images/tarot/rws/sun.jpg",
        thoth: "/public/images/tarot/thoth/sun.jpg"
    },
    20: {
        ra: "/public/images/tarot/ra/judgment.png",
        rws: "/public/images/tarot/rws/judgement.jpg",
        thoth: "/public/images/tarot/thoth/aeon.jpg"
    },
    21: {
        ra: "/public/images/tarot/ra/world.png",
        rws: "/public/images/tarot/rws/world.jpg",
        thoth: "/public/images/tarot/thoth/universe.jpg"
    },
    22: {
        ra: "/public/images/tarot/ra/fool.png",
        rws: "/public/images/tarot/rws/fool.jpg",
        thoth: "/public/images/tarot/thoth/fool.jpg"
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
    try {
        const response = await fetch('tarot_card_descriptions.json');
        const enhancedData = await response.json();
        
        // Merge enhanced data with basic data and image paths
        for (let num in basicCardData) {
            tarotData[num] = {
                ...basicCardData[num],
                images: imagePaths[num],
                framework: "",
                character: "",
                symbols: [],
                levels: {},
                raQuotes: []
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
    } catch (error) {
        console.error('Could not load enhanced descriptions, using basic data:', error);
        // Use basic data as fallback
        for (let num in basicCardData) {
            tarotData[num] = {
                ...basicCardData[num],
                images: imagePaths[num],
                framework: "Detailed description will be added soon.",
                character: "",
                symbols: [],
                levels: {},
                raQuotes: []
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
    showView('grid');
});

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
        cell.addEventListener('click', (e) => {
            const archetype = parseInt(cell.dataset.archetype);
            showCardDetail(archetype);
        });
    });

    // Fool card clicks
    document.querySelectorAll('.card-small').forEach(card => {
        card.addEventListener('click', () => {
            showCardDetail(22);
        });
    });

    // Column header clicks (now archetypal positions)
    document.querySelectorAll('.column-header').forEach((header, index) => {
        header.addEventListener('click', () => {
            const positions = ['matrix', 'potentiator', 'catalyst', 'experience', 'significator', 'transformation', 'great-way'];
            showFocusedView('position', positions[index]);
        });
    });

    // Row header clicks (now cycles)
    document.querySelectorAll('.row-header').forEach((header, index) => {
        header.addEventListener('click', () => {
            const cycles = ['mind', 'body', 'spirit'];
            showFocusedView('cycle', cycles[index]);
        });
    });

    // Back buttons
    document.getElementById('back-to-grid').addEventListener('click', () => {
        showView('grid');
    });

    document.getElementById('back-from-detail').addEventListener('click', () => {
        if (previousView) {
            showView(previousView);
        } else {
            showView('grid');
        }
    });

    // Card navigation arrows
    document.getElementById('prev-card').addEventListener('click', () => {
        navigateCard(-1);
    });

    document.getElementById('next-card').addEventListener('click', () => {
        navigateCard(1);
    });

    // Deck slider
    document.getElementById('deck-slider').addEventListener('input', (e) => {
        currentDeck = parseInt(e.target.value);
        updateCardImage();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (currentView === 'detail') {
            if (e.key === 'ArrowLeft') {
                navigateCard(-1);
            } else if (e.key === 'ArrowRight') {
                navigateCard(1);
            } else if (e.key === 'Escape') {
                document.getElementById('back-from-detail').click();
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
    
    if (type === 'cycle') {
        const cycleNames = { mind: 'Mind', body: 'Body', spirit: 'Spirit' };
        focusedTitle.textContent = `The ${cycleNames[value]} Cycle`;
        focusedContent.classList.add('cycle-view');
        focusedContent.classList.remove('position-view');
        
        // Get all cards in this cycle
        Object.entries(tarotData).forEach(([num, card]) => {
            if (card.cycle === value && num !== '22') {
                addFocusedCard(num, card);
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
        focusedContent.classList.add('position-view');
        focusedContent.classList.remove('cycle-view');
        
        // Get all cards in this position
        Object.entries(tarotData).forEach(([num, card]) => {
            if (card.position === value && num !== '22') {
                addFocusedCard(num, card);
            }
        });
    }
    
    showView('focused');
}

function addFocusedCard(num, card) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card-cell';
    cardDiv.dataset.archetype = num;
    cardDiv.innerHTML = `
        <img src="${card.images.ra}" alt="${card.name}">
        <span class="card-name">${card.name}</span>
    `;
    cardDiv.addEventListener('click', () => showCardDetail(parseInt(num)));
    document.getElementById('focused-content').appendChild(cardDiv);
}

function showCardDetail(archetypeNum) {
    previousView = currentView;
    currentCard = archetypeNum;
    const card = tarotData[archetypeNum];
    
    document.getElementById('detail-title').textContent = card.raName;
    
    // Framework
    let frameworkHTML = `<p>${card.framework}</p>`;
    if (card.character) {
        frameworkHTML += `<h4 style="margin-top: 20px; color: var(--memphis-cyan);">Character: ${card.character.split(' - ')[0]}</h4>`;
        frameworkHTML += `<p>${card.character.split(' - ').slice(1).join(' - ')}</p>`;
    }
    document.getElementById('archetypal-framework').innerHTML = frameworkHTML;
    
    // Ra quotes (will be filled in later)
    const quotesDiv = document.getElementById('ra-quotes');
    if (card.raQuotes && card.raQuotes.length > 0) {
        quotesDiv.innerHTML = card.raQuotes.map(quote => `<p>"${quote}"</p>`).join('');
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
