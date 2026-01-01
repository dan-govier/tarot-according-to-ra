// Tarot Card Data Structure
const tarotData = {
    1: {
        name: "The Magician",
        cycle: "mind",
        position: "matrix",
        raName: "Matrix of the Mind",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/redrawn/magician.png",
            rws: "/images/tarot/rws/magician.jpg",
            thoth: "/images/tarot/thoth/magician.jpg"
        },
        framework: "The Matrix of the Mind represents the Conscious Mind - the actor, the doer, the part of self that reaches and grasps. It is the conscious awareness that seeks, questions, and explores. This archetype is the foundation of mental experience, the faculty through which we perceive and interact with our reality.",
        raQuotes: [],
        symbols: []
    },
    2: {
        name: "The High Priestess",
        cycle: "mind",
        position: "potentiator",
        raName: "Potentiator of the Mind",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/redrawn/high-priestess.png",
            rws: "/images/tarot/rws/high-priestess.jpg",
            thoth: "/images/tarot/thoth/priestess.jpg"
        },
        framework: "The Potentiator of the Mind represents the Unconscious Mind - the vast reservoir of potential, intuition, and deeper knowing. It is that which the conscious mind may access but never fully grasp. The Potentiator holds all possibilities, waiting to be drawn forth by the Matrix.",
        raQuotes: [],
        symbols: []
    },
    3: {
        name: "The Empress",
        cycle: "mind",
        position: "catalyst",
        raName: "Catalyst of the Mind",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/redrawn/empress.png",
            rws: "/images/tarot/rws/empress.jpg",
            thoth: "/images/tarot/thoth/empress.jpg"
        },
        framework: "The Catalyst of the Mind represents all that the mind encounters - experiences, ideas, perceptions, and stimuli that prompt mental processing. Catalyst is the rich, unconsciously generated material that the conscious mind must work with and respond to.",
        raQuotes: [],
        symbols: []
    },
    4: {
        name: "The Emperor",
        cycle: "mind",
        position: "experience",
        raName: "Experience of the Mind",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/redrawn/emperor.png",
            rws: "/images/tarot/rws/emperor.jpg",
            thoth: "/images/tarot/thoth/emperor.jpg"
        },
        framework: "The Experience of the Mind represents that which has been processed, understood, and integrated by the conscious mind working with catalyst. It is the result of mental engagement - the lessons learned, patterns recognized, and understandings achieved.",
        raQuotes: [],
        symbols: []
    },
    5: {
        name: "The Hierophant",
        cycle: "mind",
        position: "significator",
        raName: "Significator of the Mind",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/redrawn/heirophant.png",
            rws: "/images/tarot/rws/hierophant.jpg",
            thoth: "/images/tarot/thoth/hierophant.jpg"
        },
        framework: "The Significator of the Mind represents the complex of the mind itself - the entity who chooses, the self who experiences mental existence. It is both observer and participant, containing elements of both Matrix and Potentiator in balance.",
        raQuotes: [],
        symbols: []
    },
    6: {
        name: "The Two Paths",
        cycle: "mind",
        position: "transformation",
        raName: "Transformation of the Mind",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/redrawn/lovers.png",
            rws: "/images/tarot/rws/lovers.jpg",
            thoth: "/images/tarot/thoth/art.jpg"
        },
        framework: "The Transformation of the Mind represents the moment of conscious choice between paths - the selection of how to use mind, whether in service to self or service to others. It is the archetype of free will in mental experience.",
        raQuotes: [],
        symbols: []
    },
    7: {
        name: "The Chariot",
        cycle: "mind",
        position: "great-way",
        raName: "Great Way of the Mind",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/redrawn/chariot.png",
            rws: "/images/tarot/rws/chariot.jpg",
            thoth: "/images/tarot/thoth/chariot.jpg"
        },
        framework: "The Great Way of the Mind represents the path of the adept - one who has mastered the mental faculties and uses them in service of the spiritual will. The chariot moves forward powered by balanced use of both conscious and unconscious mind.",
        raQuotes: [],
        symbols: []
    },
    8: {
        name: "Justice",
        cycle: "body",
        position: "matrix",
        raName: "Matrix of the Body",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/justice.png",
            rws: "/images/tarot/rws/strength.jpg",
            thoth: "/images/tarot/thoth/lust.jpg"
        },
        framework: "The Matrix of the Body represents the physical vehicle itself - the body in its totality as a complex instrument for experience in third density. It is the foundation of bodily experience.",
        raQuotes: [],
        symbols: []
    },
    9: {
        name: "The Sage",
        cycle: "body",
        position: "potentiator",
        raName: "Potentiator of the Body",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/sage.png",
            rws: "/images/tarot/rws/hermit.jpg",
            thoth: "/images/tarot/thoth/hermit.jpg"
        },
        framework: "The Potentiator of the Body represents the unreached potential of the body - wisdom that comes through bodily experience, the disciplined use of the physical vehicle, and balanced functioning.",
        raQuotes: [],
        symbols: []
    },
    10: {
        name: "Wheel of Fortune",
        cycle: "body",
        position: "catalyst",
        raName: "Catalyst of the Body",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/wheel.png",
            rws: "/images/tarot/rws/wheel.jpg",
            thoth: "/images/tarot/thoth/fortune.jpg"
        },
        framework: "The Catalyst of the Body represents physical experiences, sensations, and circumstances that engage the bodily complex. The wheel turns, bringing varied bodily experiences - pleasure, pain, health, illness.",
        raQuotes: [],
        symbols: []
    },
    11: {
        name: "The Enchantress",
        cycle: "body",
        position: "experience",
        raName: "Experience of the Body",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/enchantress.png",
            rws: "/images/tarot/rws/justice.jpg",
            thoth: "/images/tarot/thoth/adjustment.jpg"
        },
        framework: "The Experience of the Body represents the wisdom and understanding gained through bodily catalyst - the lessons of physical existence, the balanced use of the body, and embodied knowing.",
        raQuotes: [],
        symbols: []
    },
    12: {
        name: "The Martyr",
        cycle: "body",
        position: "significator",
        raName: "Significator of the Body",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/hangedman.png",
            rws: "/images/tarot/rws/hanged-man.jpg",
            thoth: "/images/tarot/thoth/hanged-man.jpg"
        },
        framework: "The Significator of the Body represents the body complex in its role as vehicle for spiritual evolution - the body surrendered to higher purpose, positioned to receive illumination from spirit.",
        raQuotes: [],
        symbols: []
    },
    13: {
        name: "Death",
        cycle: "body",
        position: "transformation",
        raName: "Transformation of the Body",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/death.png",
            rws: "/images/tarot/rws/death.jpg",
            thoth: "/images/tarot/thoth/death.jpg"
        },
        framework: "The Transformation of the Body represents physical transformation - the shedding of that which no longer serves, regeneration, and the body's role in spiritual transformation through death and rebirth.",
        raQuotes: [],
        symbols: []
    },
    14: {
        name: "The Alchemist",
        cycle: "body",
        position: "great-way",
        raName: "Great Way of the Body",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/alchemist.png",
            rws: "/images/tarot/rws/temperance.jpg",
            thoth: "/images/tarot/thoth/art.jpg"
        },
        framework: "The Great Way of the Body represents mastery of the physical vehicle - the body as instrument of alchemical transformation, perfectly balanced and aligned with spiritual purpose.",
        raQuotes: [],
        symbols: []
    },
    15: {
        name: "The Devil",
        cycle: "spirit",
        position: "matrix",
        raName: "Matrix of the Spirit",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/devil.png",
            rws: "/images/tarot/rws/devil.jpg",
            thoth: "/images/tarot/thoth/devil.jpg"
        },
        framework: "The Matrix of the Spirit represents the Dark Night of the Soul - the experience of spiritual darkness, separation, or bondage that calls forth the seeking of spiritual light and freedom.",
        raQuotes: [],
        symbols: []
    },
    16: {
        name: "Lightning Struck Tower",
        cycle: "spirit",
        position: "potentiator",
        raName: "Potentiator of the Spirit",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/lightning.png",
            rws: "/images/tarot/rws/tower.jpg",
            thoth: "/images/tarot/thoth/tower.jpg"
        },
        framework: "The Potentiator of the Spirit represents sudden spiritual illumination - the lightning flash of divine contact, the breakthrough that shatters limiting structures and reveals truth.",
        raQuotes: [],
        symbols: []
    },
    17: {
        name: "The Star",
        cycle: "spirit",
        position: "catalyst",
        raName: "Catalyst of the Spirit",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/faith.png",
            rws: "/images/tarot/rws/star.jpg",
            thoth: "/images/tarot/thoth/star.jpg"
        },
        framework: "The Catalyst of the Spirit represents faith, hope, and spiritual nourishment - experiences that catalyze spiritual growth and sustain the seeker on their path.",
        raQuotes: [],
        symbols: []
    },
    18: {
        name: "The Moon",
        cycle: "spirit",
        position: "experience",
        raName: "Experience of the Spirit",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/moon.png",
            rws: "/images/tarot/rws/moon.jpg",
            thoth: "/images/tarot/thoth/moon.jpg"
        },
        framework: "The Experience of the Spirit represents the spiritual journey through illusion and shadow - the testing of faith, confrontation with fears, and emergence into greater spiritual understanding.",
        raQuotes: [],
        symbols: []
    },
    19: {
        name: "The Sun",
        cycle: "spirit",
        position: "significator",
        raName: "Significator of the Spirit",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/sun.png",
            rws: "/images/tarot/rws/sun.jpg",
            thoth: "/images/tarot/thoth/sun.jpg"
        },
        framework: "The Significator of the Spirit represents the spiritual self in its clarity and radiance - spirit connected to Source, illuminated and illuminating, free and joyful.",
        raQuotes: [],
        symbols: []
    },
    20: {
        name: "Awakening",
        cycle: "spirit",
        position: "transformation",
        raName: "Transformation of the Spirit",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/judgment.png",
            rws: "/images/tarot/rws/judgement.jpg",
            thoth: "/images/tarot/thoth/aeon.jpg"
        },
        framework: "The Transformation of the Spirit represents spiritual rebirth - the awakening to one's true nature, resurrection into new spiritual understanding, and the call to higher service.",
        raQuotes: [],
        symbols: []
    },
    21: {
        name: "The World",
        cycle: "spirit",
        position: "great-way",
        raName: "Great Way of the Spirit",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/universe.png",
            rws: "/images/tarot/rws/world.jpg",
            thoth: "/images/tarot/thoth/universe.jpg"
        },
        framework: "The Great Way of the Spirit represents spiritual mastery and completion - the dancing adept in perfect harmony with All That Is, embodying divine will in the world.",
        raQuotes: [],
        symbols: []
    },
    22: {
        name: "The Fool",
        cycle: "spirit",
        position: "choice",
        raName: "The Choice",
        images: {
            ra: "https://assets.llresearch.org/ra-contact/resources/tarot/royal-road/fool.png",
            rws: "/images/tarot/rws/fool.jpg",
            thoth: "/images/tarot/thoth/fool.jpg"
        },
        framework: "The Fool represents the Choice itself - the leap of faith, the beginning of the spiritual journey, and the essential innocence and openness required to walk the path of transformation. It stands outside the structured cycles yet encompasses them all.",
        raQuotes: [],
        symbols: []
    }
};

// Application State
let currentView = 'grid';
let currentCard = null;
let currentDeck = 0; // 0=Ra/Fathman, 1=RWS, 2=Thoth
let previousView = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    showView('grid');
});

function initializeEventListeners() {
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

    // Column header clicks
    document.querySelectorAll('.column-header').forEach((header, index) => {
        header.addEventListener('click', () => {
            const cycles = ['mind', 'body', 'spirit'];
            showFocusedView('cycle', cycles[index]);
        });
    });

    // Row header clicks
    document.querySelectorAll('.row-header').forEach((header, index) => {
        header.addEventListener('click', () => {
            const positions = ['matrix', 'potentiator', 'catalyst', 'experience', 'significator', 'transformation', 'great-way'];
            showFocusedView('position', positions[index]);
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
    document.getElementById('archetypal-framework').innerHTML = `<p>${card.framework}</p>`;
    
    // Populate Ra quotes (will be filled in later)
    const quotesDiv = document.getElementById('ra-quotes');
    if (card.raQuotes && card.raQuotes.length > 0) {
        quotesDiv.innerHTML = card.raQuotes.map(quote => `<p>"${quote}"</p>`).join('');
    } else {
        quotesDiv.innerHTML = '<p><em>Ra quotes will be added from the Law of One material.</em></p>';
    }
    
    // Populate symbolic elements (will be filled in later)
    const symbolsDiv = document.getElementById('symbolic-elements');
    if (card.symbols && card.symbols.length > 0) {
        symbolsDiv.innerHTML = '<ul>' + card.symbols.map(sym => `<li>${sym}</li>`).join('') + '</ul>';
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
