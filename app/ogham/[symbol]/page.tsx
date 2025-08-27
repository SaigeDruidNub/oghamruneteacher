'use client'
import { useParams } from "next/navigation";
import Image from "next/image";

const oghamOrder = [
	"b","l","f","s","n",
    "h","d","t","c","q",
    "m","g","ng","z","r",
    "a","o","u","e","i"
];

const published = <div>
    Information from "Tree Ogham Card Game" Published by <span style={{ fontWeight: "bold" }}>Oak Tree Press</span> in association with OBOD for www.childrensforest.earth and www.forestheart.co.uk
</div>

const oghamDetails = {
    b: {
        tree: "Birch",
        keyWord: "Adventure",
        name: "Ogham name: Beith (say a short \"bay\")",
        poem: "New beginnings are calling you, \nBright adventures, life renewed.",
        about: "I am Silver Birch, tree of new beginnings. I am a pioneer tree, I was one of the first to grow after the ice age. I nourish the earth with my leaves when they fall in autumn, helping create soil for new forests to grow. I am the Lady of the Woods, shining silver in sun and moonlight. I dance in the wind and live lightly on the earth, giving life and home to many fungi, insects and birds in the forest. My tiny seeds journey on the wind, to new lands where I help life begin anew. Remember life is ever changing and true home is within you wherever you go. See life with fresh eyes every day and step lightly into new adventures.",
        medicine: "Medicine from my leaves and sap is purifying. In spring my sap flows and I offer this cleansing gift to bring you renewal. My leaves offer healing for skin problems. Birch polypore mushroom grows on my old and dying trees, an excellent woodland plaster for cuts, burns and swellings.",
        // Add more fields as needed
    },
    l: {
        tree: "Rowan",
        keyWord: "Bright Light",
        name: "Ogham name: Luis (say \"loo-ish\")",
        poem: "A blessing of light I give to thee, \nTo feel protected, wild and free.",
        about: "I am Rowan, the tree of light. High on the hills, see me shine, rooted amongst rocks where mountain streams flow. I am the Mountain Ash with bright shining bark, leaves like bird feathers and white summer blossom for bees. As the year turns and the light draws in, my red berries shine with the sun's fire, a blaze upon the hills at Autumn Equinox, a feast for migrating birds arriving from the cold northlands. Hardy and resilient, I hold fast in harsh places. I stand strong through winter's storms, a bright fire that drives away the darkness. I am a magical tree with uncommon strength in my shining, protective spirit. I am the fire of inspiration that lights you up and a bright blessing to guide your way.",
        medicine: "Medicine can be made from my berries as strengthening tea, sweetened with honey, protecting you from many illnesses, especially colds, sore throats and coughs that can affect you in cold damp lands. Plant some of my tiny seeds for a bright future.",
    },
    f: {
        tree: "Alder",
        keyWord: "Unity",
        name: "Ogham name: Fearn (say \"farn\")",
        poem: "Together we stand in the currents of life, \nHolding each other, Roots entwined.",
        about: "I am Alder, the tree of unity. Growing in valleys, I hold the banks firm so the waters can flow. Growing together in groves, our leafy branches overlap like holding hands, strong when storm winds blow. Down below, my roots join together like a strong basket holding the earth from washing away in floods. Standing tall, the power of the sun's fire is bright in my heartwood, orange-red when cut. I carry the air to nodules on my roots, nourishing the earth with life-giving nitrogen for others to grow. I am the bridge, unifying the elements of water and fire, or earth and air. Joining the banks of the river together, joining the inner and outer ralms of dream and action. When you are unified within yourself, you are whole. When you are unified with others you are strong when the winds of change blow. I do not grow alone and neither do you.",
        medicine: "Medicine from my leaves and green cones helps to cool and heal swellings and sore skin. Tea made from my leaves helps sore throats and diarrhea. My chewed twigs can be used as toothbrushes for my inner bark gives pain relief from toothache.",
    },
    s: {
        tree: "Willow",
        keyWord: "Vision",
        name: "Ogham name: Saille (say \"sahluh\")",
        poem: "Your heart knows the dream you must follow.",
        about: "I am Willow, the tree of vision. Strong and full of vitality, I grow by the waters, silver leaves shining in the moonlight. When life stirs in the land I spring into life, offering special nectar to queen bees from my catkins. My name Saille means to leap or express. From tiny seeds or twigs pressed into damp earth, I leap into life. The power of growth is strong in me. Every seed has the vision of who it will grow into, like a shining star within. I bend and flex in the heart of the wind. Flexibility is my strength. Weave a basket from my boughs, hold a clear vision of what your hands are creating and your vessel will be strong. The river always flows to the sea, knowing its course. What is your vision, your guiding star? Where is life calling you? Hear the river whisper... \"Your heart knows the dream you must follow.\"",
        medicine: "Medicine from my leaves and bark has pain relieving properties and is the original source of askprin, helping headaces, sore throats, fevers, aches and pains, especially conditions made worse by damp environments. My leaves can help to heal bleeding cuts and to cool swellings.",
    },
    n: {
        tree: "Ash",
        keyWord: "Key",
        name: "Ogham name: Nion (say \"neen\")",
        poem: "With the power of the key, \nUnlock the mysteries within thee.",
        about: "I am Ash, the tree of knowledge and insight. My tall and slender form reaches for the sky, while my roots dig deep into the earth. I am a symbol of wisdom and understanding, reminding you to seek the truth and embrace your inner strength. My wood is used for making tools and weapons, carrying the spirit of the forest with it.",
        medicine: "My bark has been used in traditional medicine to treat fevers and inflammation. Infusions made from my leaves can help with digestive issues, and my wood is often used for making charcoal.",
    },
    h: {
        tree: "Hawthorn",
        keyWord: "Heart",
        description: "Hawthorn is known for its beautiful flowers and is associated with love and protection...",
        history: "The blossoms of the Hawthorn were used in ancient rituals to symbolize hope and new beginnings...",
    },
    d: {
        tree: "Oak",
        keyWord: "Strength",
        description: "Oak trees are symbols of strength and endurance, often living for hundreds of years...",
        history: "The Oak was sacred to the Druids and was believed to be a source of wisdom and power...",
    },
    t: {
        tree: "Holly",
        keyWord: "Protection",
        description: "Holly is known for its red berries and sharp leaves, symbolizing protection and defense...",
        history: "Holly was used in ancient rituals to protect against evil spirits and was a symbol of eternal life...",
    },
    c: {
        tree: "Hazel",
        keyWord: "Intuition",
        description: "Hazel trees are associated with wisdom, intuition, and knowledge...",
        history: "In ancient mythology, Hazel nuts were eaten by scholars to enhance wisdom and knowledge...",
    },
    q: {
        tree: "Apple",
        keyWord: "Generosity",
        description: "Apple trees are symbols of generosity and abundance, often bearing fruit in abundance...",
        history: "The Apple was considered a sacred fruit in many ancient cultures, symbolizing immortality and knowledge...",
    },
    m: {
        tree: "Bramble",
        keyWord: "Harvest",
        description: "Bramble, or blackberry, is associated with the harvest and the changing seasons...",
        history: "The Bramble was often used in ancient rituals to celebrate the harvest and to offer thanks to the earth...",
    },
    g: {
        tree: "Ivy",
        keyWord: "Flow",
        description: "Ivy is a symbol of fidelity, eternity, and strong affectionate attachment...",
        history: "Ivy was used in ancient wedding ceremonies to symbolize eternal love and fidelity...",
    },
    ng: {
        tree: "Fern",
        keyWord: "Invisibility",
        description: "Ferns are ancient plants that often symbolize sincerity and magic...",
        history: "In ancient times, ferns were believed to be magical plants that could render one invisible...",
    },
    z: {
        tree: "Blackthorn",
        keyWord: "Challenge",
        description: "Blackthorn is associated with challenge and protection, often used to make walking sticks...",
        history: "The Blackthorn was used in ancient rituals to protect against evil and to challenge adversaries...",
    },
    r: {
        tree: "Elder",
        keyWord: "Wisdom",
        description: "Elder trees are associated with wisdom, protection, and healing...",
        history: "The Elder was considered a sacred tree in ancient cultures, often associated with the goddess and with healing...",
    },
    a: {
        tree: "Pine",
        keyWord: "Spirit",
        description: "Pine trees are symbols of immortality and are often associated with spiritual enlightenment...",
        history: "The Pine was sacred to many ancient cultures and was often used in spiritual rituals and ceremonies...",
    },
    o: {
        tree: "Gorse",
        keyWord: "Hope",
        description: "Gorse is a hardy shrub that symbolizes hope and resilience...",
        history: "The bright yellow flowers of the Gorse were seen as a symbol of hope and were used in ancient rituals to celebrate the sun...",
    },
    u: {
        tree: "Heather",
        keyWord: "Joy",
        description: "Heather is associated with joy, beauty, and admiration...",
        history: "Heather was used in ancient rituals to attract love and to bring happiness and joy...",
    },
    e: {
        tree: "Aspen",
        keyWord: "Listening",
        description: "Aspen trees are known for their trembling leaves and are associated with communication and listening...",
        history: "The Aspen was considered a sacred tree of the Druids, who believed it could help one connect with the spirit world...",
    },
    i: {
        tree: "Yew",
        keyWord: "Ancestors",
        description: "Yew trees are long-lived and are often associated with death and resurrection...",
        history: "The Yew was considered a tree of the underworld and was often planted in graveyards to honor the ancestors...",
    }
};

export default function SymbolInfoPage() {
    const params = useParams();
    const symbol = params.symbol as string;
    const idx = oghamOrder.indexOf(symbol);

    if (idx === -1) {
        return <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}><h1>Symbol not found</h1></main>;
    }

    const details = oghamDetails[symbol as keyof typeof oghamDetails];

    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(<--background)", color: "var(--foreground)" }}>
            <div style={{ background: "var(--card)", color: "var(--card-foreground)", borderRadius: "1.5rem", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", padding: "2rem", maxWidth: "28rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "var(--primary)", textAlign: "center" }}>{symbol.toUpperCase()}</h1>
                <Image src={`/${symbol}.png`} alt={symbol} width={96} height={96} style={{ borderRadius: "0.5rem", boxShadow: "0 2px 8px 0 rgba(61, 176, 215, 0.15)", background: "var(--card)", opacity: 0.95, marginBottom: "1.5rem" }} />
                <div style={{ fontWeight: 600, color: "var(--primary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Tree: {details.tree}</div>
                <div style={{ fontWeight: 500, color: "var(--foreground)", fontSize: "1rem", marginBottom: "0.5rem" }}>Key Word: {details.keyWord}</div>
                {details.name && (
                    <div style={{ fontWeight: 400, color: "var(--foreground)", fontSize: "0.9rem", marginBottom: "1rem", textAlign: "center" }}>{details.name}</div>
                )}
                {details.poem && (
                    <div style={{ fontWeight: 400, color: "var(--foreground)", fontSize: "0.9rem", marginBottom: "1rem", textAlign: "center",  whiteSpace: "pre-line"  }}>{details.poem}</div>
                )}
                {details.about && (
                    <div style={{ fontWeight: 400, color: "var(--foreground)", fontSize: "0.9rem", marginBottom: "1rem", textAlign: "center" }}>{details.about}</div>
                )}
                {details.medicine && (
                    <div style={{ fontWeight: 400, color: "var(--foreground)", fontSize: "0.9rem", marginBottom: "1rem", textAlign: "center" }}>{details.medicine}</div>
                )}
                {details.description && (
                    <div style={{ fontWeight: 400, color: "var(--foreground)", fontSize: "0.9rem", marginBottom: "1rem", textAlign: "center" }}>{details.description}</div>
                )}
                {details.history && (
                    <div style={{ fontWeight: 400, color: "var(--foreground)", fontSize: "0.9rem", marginBottom: "1rem", textAlign: "center" }}>{details.history}</div>
                )}
                    {/* Add more info here as needed */}
                    <div style={{ fontWeight: 300, color: "var(--muted)", fontSize: "0.8rem", marginTop: "1rem", textAlign: "center" }}>{published}</div>
            </div>
        </main>
    );
}
