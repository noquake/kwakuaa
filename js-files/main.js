const quotes = [
  { q: "Ex Africa semper aliquid novi", s: "Pliny the Elder, Naturalis Historia (70 A.D.)" },
  { q: "When you understand the nature of a thing, you know what it's capable of", s: "Blade (2011)" },
  { q: "Go and do likewise", s: "Jesus, Luke 10:37" },
  { q: "Your effort to remain what you are is what limits you", s: "Project 2501, Ghost in the Shell (1995)" },
  { q: "Everyone gets hurt. Not everyone is ready for it", s: "Miss Beard, The Passenger (2025)" },
  { q: "Three may keep a secret, if two of them are dead", s: "Ben Franklin" },
  { q: "Lust and Love are the wings to great deeds", s: "M. Hölderlin, 12 February 1791" },
  { q: "Nothing was, nothing will be; everything is, everything has essence, is present", s: "Siddhartha to the Ferryman, Siddhartha (1922), Herman Hesse" },
  { q: "Tu entres ou n'est pas l'ambiguïté.", s: "Le Fou, L'aventure ambiguë, Cheikh Hamidou Kane (1961)" },
  { q: "and at my death you too would die in the entrails of my core, in the shadow of my tomb", s: "Ibn Hazm, \"My Heart\" (Cordoba 994–Niebla, 1064)" },
  { q: "We, however, who used to think we understood it, have now become perplexed.", s: "Plato, Sophist 244a" },
  { q: "Whatever you do, do it a hundred percent. When you work, work. When you laugh, laugh. When you eat, eat like it's your last meal", s: "Tony Lip, The Green Book (2018)" },
  { q: "Reality is often disappointing", s: "Thanos, Avengers: Infinity War (2018)" },
  { q: "Running, that's what'll kill you", s: "Guy in Basement, War of the Worlds (2005)" },
  { q: "Dea ɔhome nyinaa wɔ power", s: "Ma" },
  { q: "You lack conviction.", s: "Agent Coulson, The Avengers" },
  { q: "Ain't no misery worth complaining about", s: "Annie, Sinners (2025)" },
  { q: "The Lord hates quitters.", s: "Frenchie, The Boys S3 E7" },
  { q: "With great power, comes the absolute certainty that you'll turn into a right cunt", s: "Butcher, The Boys S3 E5" },
  { q: "Act only on the maxim which you can at the same time will to be a universal law", s: "Immanuel Kant, Grounding for the Metaphysics of Morals (1785)" },
  { q: "It's all personal. Every bit of business.", s: "Michael Corleone, The Godfather" },
  { q: "Impossible is for the unwilling", s: "Marie, Hostel Meyerbeer" },
  { q: "Paulie, pull over, I gotta take a leak", s: "Pete Clemenza, The Godfather (1969)" },
  { q: "Friendship is everything. Friendship is more than talent. It is more than government. It is almost the equal of family.", s: "Vito Corleone, The Godfather (1969)" },
  { q: "Art is pain. Life is suffering.", s: "The Director of Ruska Roma, John Wick 3: Parabellum" },
  { q: "Take care of him; and whatsoever thou spendest more, when I come again, I will repay thee", s: "The Good Samaritan, Luke 10:30–35" },
  { q: "Nothing in the world is more distasteful to a man than to follow the path that leads to himself", s: "Max Demian, Demian" },
  { q: "I myself am the Sun!", s: "Ousmane Sembène" },
  { q: "What does it profit a man to gain the world and lose his soul? The world!", s: "Nikki Giovanni, A Dialogue (1971)" },
  { q: "See the child", s: "Blood Meridian (1985)" },
  { q: "It became, in a way, every room I had ever been in and every room I find myself in hereafter will remind me of Giovanni's room", s: "David, Giovanni's Room (1956)" },
  { q: "It's hard to let go isn't it? Well, that's life.", s: "Bill Parrish, Meet Joe Black" },
  { q: "This is the Way", s: "Paz Vizsla, The Mandalorian S3 E8" },
  { q: "While I've been mourning the nights that never were, one of them has been unfolding here before me", s: "Robert California, The Office S8 E12" },
  { q: "You have no idea how high I can fly", s: "Michael Scott, The Office S5 E20" },
  { q: "There is nothing light here. Everything is heavy", s: "Fatou Gueye, Handmade" },
  { q: "'Love is a tremendous responsibility' — 'It's the only one to take. There isn't any other'", s: "Nikki Giovanni and James Baldwin, A Conversation (1971)" },
  { q: "We need not fear that the diminished concern for law and order in science and society that is entailed by the use of anarchistic philosophies will lead to chaos. The human nervous system is too well organized for that.", s: "Paul Feyerabend, Against Method (1975)" },
  { q: "For my whole life, I didn't know if I really existed. But I do. And people are starting to notice.", s: "Arthur Fleck, Joker" },
  { q: "The world is as you find it", s: "Dick Cheney, Vice" },
  { q: "Things were really rolling. All I had to do was every once in a while tell Sandy that I loved her", s: "Henry Hill, Goodfellas" },
  { q: "You broke my heart. You broke my heart.", s: "Michael Corleone, The Godfather II" },
  { q: "Once you get their focus, you can take whatever you want.", s: "Nicky, Focus" },
  { q: "Some magic's real", s: "Cole, The Sixth Sense" },
  { q: "Everything is about people. Everything in this life that's worth a damn", s: "Morgan Jones, The Walking Dead S8 E16" },
  { q: "Actual victory belongs to things that do not see failure", s: "Nutella Man, Atlanta S1 E1" },
  { q: "It's not a motorcycle baby, it's a chopper", s: "Butch, Pulp Fiction" },
  { q: "Nah man, I'm pretty fucking far from ok", s: "Marsellus Wallace, Pulp Fiction" },
  { q: "DO NOT BELIEVE HIS LIES", s: "Lenny, Memento" },
  { q: "Never compromise", s: "Rorschach, Watchmen" },
  { q: "Tell your mum I said wagwaan", s: "Craig, Supacell S1 E6" },
  { q: "For you, a thousand times over", s: "Hassan, The Kite Runner" },
  { q: "I was never afraid before you showed up", s: "Bill, The Last of Us S1 E3" },
  { q: "Give me ten good men and some climbing spikes, I'll impregnate the bitch", s: "Bronn, Game of Thrones S1 E3" },
  { q: "Hodor", s: "Hodor, Game of Thrones S1 E1" },
  { q: "I wish I was the monster you think I am", s: "Tyrion Lannister, Game of Thrones S4 E7" },
  { q: "I found God, he used to say. While I was sitting there basking in the sublimity of mercy, I shot and ate that son of a bitch", s: "John Fitzgerald, The Revenant (2015)" },
  { q: "If we die, we die. But first, we'll live", s: "Ygritte, Game of Thrones S3 E7" },
  { q: "I am fire. I am death", s: "Smaug the Golden, The Hobbit: The Desolation of Smaug" },
  { q: "I save people, they cheer. I kill people, they cheer. It's meaningless", s: "Homelander, The Boys S4 E1" },
  { q: "I am McLovin", s: "Fogell, Superbad (2007)" },
  { q: "I don't want them bribed, Jack. I want it done legally. I want them bought", s: "Howard Hughes, The Aviator (2004)" },
  { q: "Fear is a sickness. It will crawl into the soul of anyone who engages it. It has tainted your peace already", s: "Flint Sky to Jaguar Paw, Apocalypto (2006)" },
  { q: "You can't stop what's coming. It ain't all waiting on you. That's vanity", s: "Ellis, No Country for Old Men (2007)" },
  { q: "Everything in this world is beautiful by nature", s: "Old Man Kōetsu, Vagabond" },
  { q: "You willing to die for it?", s: "Dominic Toretto, Fate of the Furious" },
  { q: "A man would have to put his soul at hazard", s: "Ed Tom Bell, No Country for Old Men" },
  { q: "I almost went broke trying to convince her I was anything but", s: "Yuri Orlov, Lord of War" },
  { q: "Stories are light", s: "Gregory the Jailer, The Tale of Despereaux" },
  { q: "Movement is life", s: "Gerry, World War Z" },
  { q: "First to know. First to act", s: "Unknown CIA Agent, World War Z" },
  { q: "That's you! Off to battle you go! For our Kaiser. Our God. And our Fatherland.", s: "Principal, All Quiet on the Western Front" },
  { q: "I don't know shit about fuck", s: "Ruth Langmore, Ozark S2 E10" },
  { q: "If you don't draw the line somewhere, how the hell are you gonna know where you stand?", s: "The Boys S3 E5" },
  { q: "The accumulation of those little despairs in life is what makes a person an adult", s: "Kento Nanami, Jujutsu Kaisen S1 E9" },
  { q: "Hope is the certain expectation of future glory", s: "Dante Alighieri, Paradiso 25, line 67" },
  { q: "Faith is the substance of the things we hope for and is the evidence of things not seen; and this I take to be its quiddity.", s: "Dante, Paradiso XXIV, 63" },
  { q: "Poetry and science are both manifestations of the spirit that create new ways of thinking the world, in order to understand it better — there are places in the world where rules are less important than kindness", s: "" },
  { q: "Don't think you are. Know you are.", s: "Morpheus, The Matrix" },
  { q: "When you look into his eyes, you are seeing your own emotions reflected back at you. Nothing else", s: "Pi's father, Life of Pi" },
  { q: "Because it's all I have left. Because it's my name. And I'll never have another.", s: "The Crucible" },
  { q: "Losing people is part of life. But that doesn't mean you stop letting them in", s: "Batman, The Lego Batman Movie" },
  { q: "How can a good that's shared by more possessors enable each to be more rich in it than if that good had been possessed by few?", s: "Dante Alighieri, Purgatorio XV" },
  { q: "You know what happened, the question is — can you live with it?", s: "Mike Ehrmantraut, Better Call Saul S1 E6" },
  { q: "Kenny, if I can pull this off, it will be the slickest thing I ever did in my life", s: "Don Lewis, Tiger King S1 E4" },
  { q: "And when we know the world, the world is ours", s: "Madame Swiney, Poor Things" },
  { q: "'Now you must cast aside your laziness' my master said, 'for he who rests on down or under covers can not come to fame'", s: "Dante's Inferno, Canto 24, lines 46–48" },
];

function getQuote() {
  const stored = JSON.parse(localStorage.getItem("quoteData") || "null");
  const now = Date.now();
  if (!stored || now - stored.timestamp > 24 * 60 * 60 * 1000) {
    const idx = Math.floor(Math.random() * quotes.length);
    localStorage.setItem("quoteData", JSON.stringify({ idx, timestamp: now }));
    return quotes[idx];
  }
  return quotes[stored.idx];
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  const radio = document.getElementById(`theme-${theme}`);
  if (radio) radio.checked = true;
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".quote p");
  if (el) {
    const { q, s } = getQuote();
    el.textContent = s ? `"${q}" — ${s}` : `"${q}"`;
  }

  applyTheme(localStorage.getItem("theme") || "warm");

  document.querySelectorAll('input[name="theme"]').forEach(radio => {
    radio.addEventListener("change", () => {
      localStorage.setItem("theme", radio.value);
      applyTheme(radio.value);
    });
  });

  document.querySelectorAll(".content a[href]").forEach(link => {
    link.target = "_blank";
  });

  const currentYear = new Date().getFullYear().toString();
  document.querySelectorAll(".content h3").forEach(h3 => {
    if (h3.textContent.trim() === currentYear) h3.classList.add("current-year");
  });
});
