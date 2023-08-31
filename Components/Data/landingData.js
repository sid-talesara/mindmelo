import { v4 as uuidv4 } from "uuid";
import headphones from "../../public/graphics/headphones.png";
import night from "../../public/graphics/night.png";
import book from "../../public/graphics/open-book.png";
import plant from "../../public/graphics/plant.png";
import sofa from "../../public/graphics/sofa.png";
import soundWave from "../../public/graphics/sound-wave.png";
import toolBox from "../../public/graphics/tool-box.png";
import workInProgress from "../../public/graphics/work-in-progress.png";
export const data = [
  {
    id: uuidv4(),
    heading: "Work, Study, Relax",
    desc: "MindMelo is your friend for concentration, blocking out noise, and unwinding. Dive into our calming nature music to work better and find your calm.",
    img: headphones,
    altText: "headphones-img",
    rowReverse: false,
  },
  {
    id: uuidv4(),
    heading: "The right tools to be more productive",
    desc: "MindMelo offers high quality sounds that you can mix and match as you like, plus curated Playlists for various situations. Work in sessions with our Timer and Todo’s.",
    img: toolBox,
    altText: "toolbox-img",
    rowReverse: true,
  },
  {
    id: uuidv4(),
    heading: "MindMelo for Productive Work",
    desc: "At work, distractions disrupt focus and stress builds up. MindMelo helps you rise above office noise, chatty colleagues, and constant phone buzz. Our Timer ensures efficient work intervals, guarding against burnout. MindMelo also fosters an inspiring atmosphere, fueling motivation and creativity. Let our background sounds guide you and keep your mind on tasks.",
    img: workInProgress,
    altText: "work-in-progress-img",
    rowReverse: false,
  },
  {
    id: uuidv4(),
    heading: "MindMelo at Home",
    desc: "Working from home brings its own challenges—distractions and sudden noises. MindMelo remedies the quiet and keeps you on track. Combat interruptions with our adaptable soundscapes, whether through speakers or headphones. MindMelo ensures a productive and serene home workspace.",
    img: plant,
    altText: "plant-img",
    rowReverse: true,
  },
  {
    id: uuidv4(),
    heading: "MindMelo while Studying",
    desc: "Studying smarter is possible with MindMelo. Break down study sessions with our Timer. Background sounds create a serene study zone, minimizing disruptions and enhancing focus. Whether working alone or in class, MindMelo boosts concentration and fuels creativity.",
    img: book,
    altText: "book-img",
    rowReverse: false,
  },
  {
    id: uuidv4(),
    heading: "MindMelo for Relaxation",
    desc: "Nature's tranquility calms the mind and de-stresses. MindMelo brings nature to you with soothing background sounds. Experience rainforest serenity or a soothing train ride from the comfort of your space. Tailor MindMelo to your needs, taking breaks or winding down after a busy day.",
    img: sofa,
    altText: "sofa-img",
    rowReverse: true,
  },
  {
    id: uuidv4(),
    heading: "MindMelo for Restful Sleep",
    desc: "Sound sleep is vital for a productive day. MindMelo establishes a calming bedtime routine, easing you into restful slumber. Mask external disturbances with gentle background sounds. The calming effect works wonders for all, including children.",
    img: night,
    altText: "night-moon-img",
    rowReverse: false,
  },
  {
    id: uuidv4(),
    heading: "Why MindMelo Works?",
    desc: "Unlike silence or loud noises, steady background sounds keep our focus intact. They mask sudden disruptions, merging them seamlessly. Background noise fosters creative thinking and abstract pondering. Music with lyrics can divert attention, making tasks harder.",
    img: soundWave,
    altText: "sound-wave-img",
    rowReverse: true,
  },
];
