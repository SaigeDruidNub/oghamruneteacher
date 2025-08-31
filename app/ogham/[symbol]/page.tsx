'use client'
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const oghamOrder = [
	"b","l","f","s","n",
    "h","d","t","c","q",
    "m","g","ng","z","r",
    "a","o","u","e","i"
];

const published = <div>
    Information from &quot;Tree Ogham Card Game&quot; Published by <span style={{ fontWeight: "bold" }}>Oak Tree Press</span> in association with OBOD for www.childrensforest.earth and www.forestheart.co.uk
</div>

const oghamDetails = {
    b: {
        tree: "Birch",
        keyWord: "Adventure",
    name: "Ogham name: Beith (say a short &quot;bay&quot;)",
        poem: "New beginnings are calling you, \nBright adventures, life renewed.",
        about: "I am Silver Birch, tree of new beginnings. I am a pioneer tree, I was one of the first to grow after the ice age. I nourish the earth with my leaves when they fall in autumn, helping create soil for new forests to grow. I am the Lady of the Woods, shining silver in sun and moonlight. I dance in the wind and live lightly on the earth, giving life and home to many fungi, insects and birds in the forest. My tiny seeds journey on the wind, to new lands where I help life begin anew. Remember life is ever changing and true home is within you wherever you go. See life with fresh eyes every day and step lightly into new adventures.",
        medicine: "Medicine from my leaves and sap is purifying. In spring my sap flows and I offer this cleansing gift to bring you renewal. My leaves offer healing for skin problems. Birch polypore mushroom grows on my old and dying trees, an excellent woodland plaster for cuts, burns and swellings.",
        // Add more fields as needed
    },
    l: {
        tree: "Rowan",
        keyWord: "Bright Light",
    name: "Ogham name: Luis (say &quot;loo-ish&quot;)",
        poem: "A blessing of light I give to thee, \nTo feel protected, wild and free.",
        about: "I am Rowan, the tree of light. High on the hills, see me shine, rooted amongst rocks where mountain streams flow. I am the Mountain Ash with bright shining bark, leaves like bird feathers and white summer blossom for bees. As the year turns and the light draws in, my red berries shine with the sun's fire, a blaze upon the hills at Autumn Equinox, a feast for migrating birds arriving from the cold northlands. Hardy and resilient, I hold fast in harsh places. I stand strong through winter's storms, a bright fire that drives away the darkness. I am a magical tree with uncommon strength in my shining, protective spirit. I am the fire of inspiration that lights you up and a bright blessing to guide your way.",
        medicine: "Medicine can be made from my berries as strengthening tea, sweetened with honey, protecting you from many illnesses, especially colds, sore throats and coughs that can affect you in cold damp lands. Plant some of my tiny seeds for a bright future.",
    },
    f: {
        tree: "Alder",
        keyWord: "Unity",
    name: "Ogham name: Fearn (say &quot;farn&quot;)",
        poem: "Together we stand in the currents of life, \nHolding each other, Roots entwined.",
        about: "I am Alder, the tree of unity. Growing in valleys, I hold the banks firm so the waters can flow. Growing together in groves, our leafy branches overlap like holding hands, strong when storm winds blow. Down below, my roots join together like a strong basket holding the earth from washing away in floods. Standing tall, the power of the sun's fire is bright in my heartwood, orange-red when cut. I carry the air to nodules on my roots, nourishing the earth with life-giving nitrogen for others to grow. I am the bridge, unifying the elements of water and fire, or earth and air. Joining the banks of the river together, joining the inner and outer ralms of dream and action. When you are unified within yourself, you are whole. When you are unified with others you are strong when the winds of change blow. I do not grow alone and neither do you.",
        medicine: "Medicine from my leaves and green cones helps to cool and heal swellings and sore skin. Tea made from my leaves helps sore throats and diarrhea. My chewed twigs can be used as toothbrushes for my inner bark gives pain relief from toothache.",
    },
    s: {
        tree: "Willow",
        keyWord: "Vision",
    name: "Ogham name: Saille (say &quot;sahluh&quot;)",
        poem: "Your heart knows the dream you must follow.",
        about: "I am Willow, the tree of vision. Strong and full of vitality, I grow by the waters, silver leaves shining in the moonlight. When life stirs in the land I spring into life, offering special nectar to queen bees from my catkins. My name Saille means to leap or express. From tiny seeds or twigs pressed into damp earth, I leap into life. The power of growth is strong in me. Every seed has the vision of who it will grow into, like a shining star within. I bend and flex in the heart of the wind. Flexibility is my strength. Weave a basket from my boughs, hold a clear vision of what your hands are creating and your vessel will be strong. The river always flows to the sea, knowing its course. What is your vision, your guiding star? Where is life calling you? Hear the river whisper... \"Your heart knows the dream you must follow.\"",
        medicine: "Medicine from my leaves and bark has pain relieving properties and is the original source of askprin, helping headaces, sore throats, fevers, aches and pains, especially conditions made worse by damp environments. My leaves can help to heal bleeding cuts and to cool swellings.",
    },
    n: {
        tree: "Ash",
        keyWord: "Key",
    name: "Ogham name: Nuin (say &quot;noo-in&quot;)",
        poem: "Your imagination is the key to creation.",
        about: "I am the Ash, the tree of life, with deep roots in the underworld and branches in the starry realms. I stand strong and tall with delicate leaves casting dappled light. In winter my black buds are like tiny deer hooves reaching to the sky. My seeds are called keys and hang in bunches. I hold the key to the gifts within, like seeds that lie dormant, waiting for the right conditions to grow. You too have gifts within you waiting to be unlocked. When you connect your inner world together with the world around you, you can create amazing things. As a human you have a special ability to bring what you imagine into the world. Connection is the key.",
        medicine: "Medicine from my leaves made into tea helps fevers and can help when the joints are painful and swollen. I offer a tonic for long life, health and wellbeing.",
    },
    h: {
        tree: "Hawthorn",
        keyWord: "Heart",
    name: "Ogham name: Huathe (say &quot;hooah&quot;)",
        poem: "Love is at the heart of life, \nEven in times of thorns and strife.",
        about: "I am Hawthorn, tree of the heart. I grow on mountain and moor, forest, hedgerow and shore, throughout the heart of our land. Fresh green in spring, I feed many caterpillars and in May my white blossom hums with bees. In autumn my red berries shine, faery apples, a feast for the birds and medicine for the heart. I am Whitethorn, the faery tree, a magical tree to be respected. I herald the celebration of Beltane, festival of bright fire when you decorate maypoles with my boughs and we dance together celebrating life and love. I have sharp thorns and tangled branches, creating a sanctuary for small birds, protecting them from hunting hawks. Sometimes a thorny situation requires our hearts to grow stronger and wiser, to remember that love is alwyas at the heart of life.",
        medicine: "Medicine from my flowers is a calming tea and can help with sleep. The pulp of my berries can draw out splinters. My berries are a spceial medicine for strengthening and protecting your heart.",
    },
    d: {
        tree: "Oak",
        keyWord: "Strength",
    name: "Ogham name: Duir (say &quot;dare&quot;)",
        poem: "Be deeply rooted, \nAnd strong of heart.",
        about: "I am Oak, the tree of strength. As King of the forest, I shelter and support many species, from tiny insects, mosses and mushrooms, to many birds and mammals who are fed by my acorns. As a true sovereign, I take care of those in my realm. Growing slowly and steadily for up to a thousand years, my deep roots and strong heartwood enable me to stand through many trials and storms. I am a guardian of the land and my name, Duir, is the origin of the word door. My wood is used to make doors for buildings and i am also a doorway to the sky world. I may court a lightning strike, drawing the power of the heavens down into the earth. With deep roots and a strong heart you will stand through all weathers.",
        medicine: "Medicine from my bark, leaves and acorns helps to heal wounds, sore throat, gums and diarrhea. Acorns strengthen your heart, bones and teeth.",
    },
    t: {
        tree: "Holly",
        keyWord: "Protection",
    name: "Ogham name: Tinne (say &quot;tinna&quot;)",
        poem: "Bright protection to keep you from harm, \nSafe sanctuary beneath my arms.",
        about: "I am Holly, tree of protection, evergreen throughout the turning year. My name Holly comes from the word 'holy' - I am a tree of everlasting life and divine love. I am a guardian of this land, sheltering animals beneath my canopy, giving shade in hot sun, safe sanctuary in storms and protection from lightning. My white four-petalled flowers are honey-scented, nectar for insects in summer months. My scarlet berries feed birds through the winder cold. I protect myself from browsing animals with spiky leaves, but look up through my boughs and you'll see that my high-up leaves are not so spiked - I do not have thorns where they are not needed. Sometimes we need thorns to protect ourselves or others. Sometimes we can trust that all is well. I offer you my bright protection and safe sanctuary.",
        medicine: "Medicine from my leaves can help to heal coughs and fever. Holly berries are poisonous. The leaves should be used only in small quantities, as tea, under adult supervision.",
    },
    c: {
        tree: "Hazel",
        keyWord: "Intuition",
    name: "Ogham name: Coll (say &quot;col&quot;)",
        poem: "Crack the shell and you will find, \nThe kernel of wisdom within you lies.",
        about: "I am Hazel, the tree of wisdom and inner knowing. With my silver-brown stems and rich leafy branches, I am home for many nesting birds and other creatures. Growing as the understory in the forest family, I live in community, providing a feast of hazelnuts for all in the autumn. With my roots in the dark earth, I know where underground streams flow and where seams of metal and crystals are in the earth, deep below. My branches touch the sky and know the secrets of the stars. Druids walked among my groves and ate my hazelnuts to bring them wisdom and inspiration. Each hazelnut is filled with wisdom of the Universe. Trust your intuition - the way you know things without knowing how.",
        medicine: "Medicine from my leaves helps to heal bruises. Other medicines within me are being rediscovered for more serious illness.",
    },
    q: {
        tree: "Apple",
        keyWord: "Generosity",
    name: "Ogham name: Quert (say &quot;kwairt&quot;)",
        poem: "Tend your health with love and care, \nAnd goodness with your loved ones share.",
        about: "I am Apple, the tree of health and love. In spring my pink-white blossom gives golden nectar for bees. In autumn I offer plentiful fruits for all to share. I give generously with loved ones, that way the gift is passed on to others. In the forest I grow as Crab or Wild Apple, with small, bright green fruits on thorny branches. My fruit is an abundant health-giving food for many animals, important to your ancestors, and sacred to the Druids. Inside each apple is a hidden star filled with seeds, reminding you how to see the hidden treasure in yourself and others.",
        medicine: "Medicine Apples help to cleanse the body and are helpful for soothing tummy aches and strengthening your heart. Make delicious tea from fresh, chopped apples. Crushed pulp can be used for healing woulds and burns. My flower essence is for those who find it hard to love themselves.",
    },
    m: {
        tree: "Bramble",
        keyWord: "Harvest",
    name: "Ogham name: Muin (say &quot;moo-in&quot;)",
        poem: "Celebrating work well done, \nMerry making, \nHarvest sun.",
        about: "I am Bramble, rambling wild, growing in forests and fields, hedgerows and edges. Come celebrate the harvest and feast on my blackberries. See how I grow, weaving my thorny tendrils throughout the land. I am a protector of nature; my thickets are a safe haven for tree saplings, protecting them from browsing animals. Small mammals, birds and insects live in the sanctuary of my thorny thickets. My blossom is savoured by bees. I share my berries with one and all. The children of all species have special gifts to share in the family of nature. Celebrate my gifts, your own gifts and those of others. It is time for merry-making, sharing the fruits of your harvest, work well done!",
        medicine: "Medicine from my Bramble flowers and leaves is a wonderful first aid to heal a cut or bleeding wound, especially those given by my thorns. Simply chew and apply. Tea from my leaves is excellent for diarrhea. Eating my berries helps protect you from illnesses of colder months.",
    },
    g: {
        tree: "Ivy",
        keyWord: "Flow",
    name: "Ogham name: Gort (say &quot;gort&quot;)",
        poem: "Find your way by learning to flow, \nThe world will support you and help you grow.",
        about: "I am Ivy, the weaver, growing up and down, over walls, along the forest floor and climbing trees to touch the sky. My Gaelic name is Eidhion meaning 'clothoes of a tree'. I flow through the world and need support to grow. In return I support many other lives. My golden flowers in late autumn are the last flowers of the year to give nectar for the insects. In the winter months I offer safe haven for sheltering birds, nestling them in my evergreen cloak and feeding them my berries through the coldest times. I grow freely, and flow like water, adapting to the world as I go. Let the Earth hold you. Learn to flow, to be supported and to support life in return, as you grow.",
        medicine: "Medicine from my leaves can help heal coughs and is strong so should be used very carefully by herbalists. My leaves are cooling and help to heal burns. Make a soothing footbath with my leaves after a long walk.",
    },
    ng: {
        tree: "Fern",
        keyWord: "Invisibility",
    name: "Ogham name: Ngetal (say &quot;nie-etal&quot;)",
        poem: "Return to your essence, the stillness inside, \nDeep in the forest, within me hide.",
        about: "I am Fern, of an ancient race that once grew as tall as trees when dinosaurs roamed these lands. We grow in the sunlit forest glades and along the mossy branches of great Oaks. As Bracken, I grow freely and oftehn clothe the mountainsides and moors. See me unfurl in spirals of golden-green from the earth in springtime. I cast dappled light and feathered shadows, a place for animals to hide. Your ancestors knew secrets of invisibility and used my leaves as camouflage. Quiet your mind and become the forest, listen to the life around you, smell the rich soil, be still and blend in. You are one with the Earth.",
        medicine: "",
    },
    z: {
        tree: "Blackthorn",
        keyWord: "Challenge",
    name: "Ogham name: Straif (say &quot;strahf&quot;)",
        poem: "Rise to the challenge and you will find, \nHidden treasure of many kinds.",
        about: "I am Blackthorn, hardy and strong. I grow in the forest edges and hedgerows, holding the boundaries with my thorny presence. I am Grandmother Blackthorn and I demand respect. My thorns are fierce and can cause you harm. Take care! In early spring my white blossoms appear like snow against my black wood, first tree-nectar for walking bees. In autumn I bear purple sloe berries enjoyed by many birds and animals. Sloes are sharp and sour but there is a gift of hidden sweetness for you. I can show you how to meet life's challenges with strength. How to hold boundaries and protect yourself and others with fierceness. How to find the hidden treasure in all situations, in others and in ourselves.",
        medicine: "Medicine is given from my flowers which can be made into tea to help tummy ache. Tea from my leaves soothes sore throats and , when cooled, heals eyes. Sloe berries make syrup and teas for colds and coughs.",
    },
    r: {
        tree: "Elder",
        keyWord: "Wisdom",
    name: "Ogham name: Ruis (say &quot;roo-ish&quot;)",
        poem: "Wisdom is a rare medicine, \nTo be treasured.",
        about: "I am Elder, the wise woman. My tree is a medicine chest. In leaf, blossom and berry, I see what you need to guide your return to health. My blossoms offer nectar for insects. My berries fill the bellies of migrating birds and other animals giving strength for their journeys and the winter ahead. I am the way finder, the path clearer. My music and medicine clears stuck energy, opens your breath and clears your sight. I share my medicine and in return ask to be harvested with care and respect. The pathway to wisdom is rarely a straight one. Remember to honour your elders who have earned wisdom through their long winding journeys and many experiences.",
        medicine: "Medicine from my leaves helps with the healing of bruises and sprains, burns and pains. In summer the smell of my crushed leaves helps to keep insects away. My blossoms, used as a cold compress, can help heal wounds, burns and sore eyes. Drink my blossom as tea for fever, sunstroke and hay fever. My berries as syrups and tea give strength and protection from coughs, colds and flu.",
    },
    a: {
        tree: "Pine",
        keyWord: "Spirit",
    name: "Ogham name: Ailm (say &quot;arim&quot;)",
        poem: "Take a breath, see from on high, \nThat all is well beneath the sky.",
        about: "I am the Pine, tree of Divine Light and Spirit. I brush the sky clean with my evergreen needles. As I breathe, I share special particles called pinene to gift you health and clean the atmosphere. My forests have always been held as sacred places by the people. At midwinter Druids light fires of my wood to celebrate the return of the light and today you gather together round the Christmas tree to celebrate this holy time. Visit my tall trees and look up into my high branches. Imagine how the world looks from my treetop. Imagine how it looks from the sky where eagles fly. From high up, where the air is fresh and we can see for miles around, we may see that some things that seemed important are in fact tiny. From the heavens we can see er are all connected.",
        medicine: "Medicine from my pine needles made into tea is rich in vitamin C and helps to heal a cough and cold and protect your from illness. My pollen is a powerful medicine to five energy and health. My sap can be made into an ointment to draw out splinters and heal wounds.",
    },
    o: {
        tree: "Gorse",
        keyWord: "Hope",
    name: "Ogham name: Onn (say &quot;orn&quot;)",
        poem: "Even in the winter's night or when the clouds are grey, \nThe golden sun is shining for you, never far away.",
        about: "I am Gorseor Furze, with flowers shining gold in all seasons. I am a hardy plant. I grow on open heaths and moorland, in winter wind and snow or blazing summer sun and, like a phoenix, I return anew after scorching fires. My spiky bushes are a safe haven for birds and animals and I feed the soil with nitrogen to help other plants to ggrow. I am loved by the elementals and the insects who enjoy my sweet nectar. I am treasure, the true gold of the land. Even in the heart of the winter, when all is cold and grey, my flowers bloom, reminding you that light and hope are never far away.",
        medicine: "Medicine from my flower essence helps those who have given up hope and are full of despair, helping the return of inner sunshine, hope and joy.",
    },
    u: {
        tree: "Heather",
        keyWord: "Joy",
    name: "Ogham name: Ur (say &quot;oor&quot;)",
        poem: "With a joyful spring in your step, \nKnow that luck is on your side.",
        about: "I am Heather, a hardy plant growing on moors and mountains. In summer, I turn the hillsides purple-pink. I buzz with the sound of bees and scent the breeze. I bring love to hard places. I grow like a miniature forest, tiny trees with woody trunks and waxy leaves which protect me from all weathers. Three of my kind grow together, Ling, Bell and Cross, food and home for caterpillars including the Emperor moth. I am wonderful to lie on, a plant to dream on, a springy bed on a sunny day. A heather cloak. A balm for the soul. Dance on the hills and be of light heart for I am a lucky plant who brings you good fortune and a joyful spring in your step.",
        medicine: "Medicine from my flowers infused in oil can help chilblains, aches and pains in the joints. Tea from my flowers and leaves is calming and can help you sleep well. Honey made from my nectar is a powerful medicine to protect you from illness. Heather honey is a treasure of the medicine chest.",
    },
    e: {
        tree: "Aspen",
        keyWord: "Listening",
    name: "Ogham name: Eadhadh (say &quot;ay-ya&quot;)",
        poem: "Listen to the world for it always sings, \nTelling stories on the breath of the wind.",
        about: "I am Aspen, of the Poplar family, the whispering tree. My leaves grow on long stalks which flutter strongly in the wind making a rusling sound which you may hear from some distance away. I am also known as the trembling or quaking aspen. My wood is a favorite food of beavers, while many others such as hare and deer love to eat my bark, buds and leaves. I can tell you about the weather and I share the music and stories of the wind, who travels all around the world. Be still, hear the world speaking to you. Close your eyes and listen. The wind loves to blow through my leaves, to touch your cheeks and play with your hair. Where is the wind blowing from today? What is the world saying? What stories do you hear and what stories would you like to share?",
        medicine: "Medicine from my leaves and buds helps heal cuts, burns and grazes. My inner bark can help diarrhea. A tea of my leaves and bark helps to relieve pain and swellings. Sometimes, when you are worried or afraid, feelings can make you tremble inside. My flower essence remedy can help you to feel courage in your heart, to be still and to listen.",
    },
    i: {
        tree: "Yew",
        keyWord: "Ancestors",
    name: "Ogham name: Ioho (say &quot;ee-oh&quot;)",
        poem: "New beginnings lead to endings, \nEvery end, a new life tending.",
        about: "I am the Yew, tree of the ancestors. In my dark evergreen boughs, many birds come to feed on my red berries known as 'arils'. My leaves are eaten by the Satin Beauty moth. I am the oldest tree in this land and one of the most ancient beings alive on Earth. Some of my trees are many thousands of years old. I have a special way of living where parts of my wood die while other parts continue to grow. Because I embrace death as I grow, I am able to span the ages. Whole civilizations rise and fall in the lifetime of one of my trees. I see th epassing of many generations. You belong to a great family tree, joined to those who have fone before you and the future generations. Remember your ancestors are with you. Remember to live well for those yet to come.",
        medicine: "Medicine is made from my inner bark to treat certain cancers. It is very poisonous so the dose isvery tiny and must only by given by trained herbalists and doctors. Please take great care of your short and precious lives. Yew is deadly poisonous in every part, with the exception of the res flesh of the berry. However, due to the deadly seed, never forage this with children!",
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
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(--background)", color: "var(--foreground)" }}>
            <div style={{ background: "var(--card)", color: "var(--card-foreground)", borderRadius: "1.5rem", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", padding: "2rem", maxWidth: "28rem", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link href="/ogham" passHref legacyBehavior>
                    <a style={{ alignSelf: "flex-start", marginBottom: "1rem", color: "var(--primary)", textDecoration: "underline", fontWeight: 500, fontSize: "1rem" }}>&larr; Back to Ogham Landing Page</a>
                </Link>
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
                
                    {/* Add more info here as needed */}
                    <div style={{ fontWeight: 300, color: "var(--muted)", fontSize: "0.8rem", marginTop: "1rem", textAlign: "center" }}>{published}</div>
            </div>
        </main>
    );
}
