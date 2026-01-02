// Tarot Card Data Structure - will be enhanced by loading JSON
let tarotData = {};

// Image path configuration
const imagePaths = {
    1: {
        ra: "/public/images/tarot/ra/magician.png",
        rws: "/public/images/tarot/rws/magician.jpg",
        thoth: "/public/images/tarot/thoth/magician.webp"
    },
    2: {
        ra: "/public/images/tarot/ra/high-priestess.png",
        rws: "/public/images/tarot/rws/priestess.jpg",
        thoth: "/public/images/tarot/thoth/priestess.webp"
    },
    3: {
        ra: "/public/images/tarot/ra/empress.png",
        rws: "/public/images/tarot/rws/empress.jpg",
        thoth: "/public/images/tarot/thoth/empress.webp"
    },
    4: {
        ra: "/public/images/tarot/ra/emperor.png",
        rws: "/public/images/tarot/rws/emperor.jpg",
        thoth: "/public/images/tarot/thoth/emperor.webp"
    },
    5: {
        ra: "/public/images/tarot/ra/hierophant.png",
        rws: "/public/images/tarot/rws/hierophant.jpg",
        thoth: "/public/images/tarot/thoth/hierophant.webp"
    },
    6: {
        ra: "/public/images/tarot/ra/lovers.png",
        rws: "/public/images/tarot/rws/lovers.jpg",
        thoth: "/public/images/tarot/thoth/lovers.webp"
    },
    7: {
        ra: "/public/images/tarot/ra/chariot.png",
        rws: "/public/images/tarot/rws/chariot.jpg",
        thoth: "/public/images/tarot/thoth/chariot.webp"
    },
    8: {
        ra: "/public/images/tarot/ra/justice.png",
        rws: "/public/images/tarot/rws/justice.jpg",
        thoth: "/public/images/tarot/thoth/justice.webp"
    },
    9: {
        ra: "/public/images/tarot/ra/sage.png",
        rws: "/public/images/tarot/rws/sage.jpg",
        thoth: "/public/images/tarot/thoth/sage.webp"
    },
    10: {
        ra: "/public/images/tarot/ra/wheel.png",
        rws: "/public/images/tarot/rws/wheel.jpg",
        thoth: "/public/images/tarot/thoth/wheel.webp"
    },
    11: {
        ra: "/public/images/tarot/ra/enchantress.png",
        rws: "/public/images/tarot/rws/enchantress.jpg",
        thoth: "/public/images/tarot/thoth/enchantress.webp"
    },
    12: {
        ra: "/public/images/tarot/ra/hangedman.png",
        rws: "/public/images/tarot/rws/hangedman.jpg",
        thoth: "/public/images/tarot/thoth/hangedman.webp"
    },
    13: {
        ra: "/public/images/tarot/ra/death.png",
        rws: "/public/images/tarot/rws/death.jpg",
        thoth: "/public/images/tarot/thoth/death.webp"
    },
    14: {
        ra: "/public/images/tarot/ra/alchemist.png",
        rws: "/public/images/tarot/rws/alchemist.jpg",
        thoth: "/public/images/tarot/thoth/alchemist.webp"
    },
    15: {
        ra: "/public/images/tarot/ra/devil.png",
        rws: "/public/images/tarot/rws/devil.jpg",
        thoth: "/public/images/tarot/thoth/devil.webp"
    },
    16: {
        ra: "/public/images/tarot/ra/lightning.png",
        rws: "/public/images/tarot/rws/lightning.jpg",
        thoth: "/public/images/tarot/thoth/lightning.webp"
    },
    17: {
        ra: "/public/images/tarot/ra/star.png",
        rws: "/public/images/tarot/rws/star.jpg",
        thoth: "/public/images/tarot/thoth/star.webp"
    },
    18: {
        ra: "/public/images/tarot/ra/moon.png",
        rws: "/public/images/tarot/rws/moon.jpg",
        thoth: "/public/images/tarot/thoth/moon.webp"
    },
    19: {
        ra: "/public/images/tarot/ra/sun.png",
        rws: "/public/images/tarot/rws/sun.jpg",
        thoth: "/public/images/tarot/thoth/sun.webp"
    },
    20: {
        ra: "/public/images/tarot/ra/judgment.png",
        rws: "/public/images/tarot/rws/judgment.jpg",
        thoth: "/public/images/tarot/thoth/judgment.webp"
    },
    21: {
        ra: "/public/images/tarot/ra/world.png",
        rws: "/public/images/tarot/rws/world.jpg",
        thoth: "/public/images/tarot/thoth/world.webp"
    },
    22: {
        ra: "/public/images/tarot/ra/fool.png",
        rws: "/public/images/tarot/rws/fool.jpg",
        thoth: "/public/images/tarot/thoth/fool.webp"
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
});

function initializeTheme() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

function handleMobileGrid() {
    const isMobile = window.innerWidth <= 768;
    const gridHeader = document.querySelector('.grid-header');
    const gridContent = document.querySelector('.grid-content');
    
    if (!gridHeader || !gridContent) return;
    
    console.log('handleMobileGrid called', { isMobile, dataLoaded: Object.keys(tarotData).length });
    
    if (isMobile && !gridContent.classList.contains('mobile-rebuilt')) {
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
            { name: 'POTENT.', key: 'potentiator' },
            { name: 'CATALYST', key: 'catalyst' },
            { name: 'EXPER.', key: 'experience' },
            { name: 'SIGNIF.', key: 'significator' },
            { name: 'TRANSF.', key: 'transformation' },
            { name: 'GRT WAY', key: 'great-way' }
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
                    gridHTML += `<div class="card-cell card-placeholder" style="background: var(--bg-secondary); opacity: 0.3;"></div>`;
                }
            });
        });
        
        gridContent.innerHTML = gridHTML;
        
        // Reattach event listeners for mobile grid
        attachMobileEventListeners();
        
    } else if (!isMobile && gridContent.classList.contains('mobile-rebuilt')) {
        // Switching back to desktop - reload page to restore original HTML
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

    // Back button (detail view only)
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
    
    // Cycle and position descriptions
    const cycleDescriptions = {
        mind: "The Mind Cycle (Archetypes 1-7) explores consciousness and the relationship between the conscious and unconscious mind. These archetypes show how we think, process catalyst, and develop our mental frameworks for understanding reality. The mind must be initiated before body and spirit, making this the foundational cycle for spiritual evolution.",
        body: "The Body Cycle (Archetypes 8-14) deals with action, manifestation, and how we interact with the physical illusion. While the mind processes internally, the body acts externally. These archetypes show how our mental processing manifests in physical reality and how we navigate the world of experience and consequence.",
        spirit: "The Spirit Cycle (Archetypes 15-21) represents our connection to the One Infinite Creator and the shuttle or communicator between mind and body. Spirit is neither created nor destroyed but is the channel through which unity and love flow. These archetypes show our eternal nature and our journey back to Source."
    };
    
    const positionDescriptions = {
        matrix: "The Matrix is the foundation and stage upon which experience unfolds. It represents the conscious, active, masculine principle - full of desire but empty of content. The Matrix reaches toward the Potentiator seeking fulfillment, creating the initial conditions for consciousness to know itself.",
        potentiator: "The Potentiator is the vast reservoir of potential - the unconscious, passive, feminine principle containing all that can be known but is not yet known. It awaits activation by the Matrix. The veiling process makes the Potentiator mysterious and hidden, requiring effort to access its riches.",
        catalyst: "The Catalyst is the mind/body/spirit as potentiated - experiences and stimuli that prompt processing and response. Catalyst is unconsciously generated material that the Matrix must work with. It appears in shades of grey requiring moral interpretation, often with apparently negative catalyst polarizing toward service-to-others.",
        experience: "The Experience is the mind/body/spirit's relation to itself after processing Catalyst. It records and integrates what has been learned, creating the foundation for further evolution. Experience shows us making sense of catalyst through our chosen moral framework, building our understanding incrementally.",
        significator: "The Significator is the harvest of all previous incarnational biases - the total complex experiencing itself through the cyclical processes of Matrix, Potentiator, Catalyst, and Experience. It is both actor and acted upon, representing our complete being as it currently exists, shaped by all we have been.",
        transformation: "The Transformation archetype emerges at the crossroads between two potential versions of the Significator. It represents the liminal state where choice determines moral polarity. These are moments of initiation where we must sacrifice one path to walk another, unable to move forward until a clear choice is made.",
        'great-way': "The Great Way is the total environment within which evolution occurs. It depicts all coordinating elements in their large-scale relationships, showing the inescapable nature of the journey toward self-knowledge. Unlike other archetypes expressed periodically, the Great Way is always active for those pursuing inner evolution."
    };
    
    if (type === 'cycle') {
        const cycleNames = { mind: 'Mind', body: 'Body', spirit: 'Spirit' };
        focusedTitle.textContent = `The ${cycleNames[value]} Cycle`;
        
        // Add description
        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'cycle-description';
        descriptionDiv.style.cssText = 'background: var(--bg-secondary); border: 4px solid var(--border-color); padding: 25px; margin-bottom: 40px; line-height: 1.8; color: var(--text-primary); font-size: 1.1rem;';
        descriptionDiv.innerHTML = `<p>${cycleDescriptions[value]}</p>`;
        focusedContent.appendChild(descriptionDiv);
        
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
        descriptionDiv.style.cssText = 'background: var(--bg-secondary); border: 4px solid var(--border-color); padding: 25px; margin-bottom: 40px; line-height: 1.8; color: var(--text-primary); font-size: 1.1rem;';
        descriptionDiv.innerHTML = `<p>${positionDescriptions[value]}</p>`;
        focusedContent.appendChild(descriptionDiv);
        
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
    if (card.polarized && (card.polarized.positive || card.polarized.negative)) {
        let polarizedHTML = '';
        if (card.polarized.positive) {
            polarizedHTML += `<h4 style="color: var(--memphis-green); margin-top: 15px;">Service to Others (STO / Right-Hand Path)</h4><p>${card.polarized.positive}</p>`;
        }
        if (card.polarized.negative) {
            polarizedHTML += `<h4 style="color: var(--memphis-red); margin-top: 15px;">Service to Self (STS / Left-Hand Path)</h4><p>${card.polarized.negative}</p>`;
        }
        polarizedDiv.innerHTML = polarizedHTML;
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
