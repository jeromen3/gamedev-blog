// app/store/products.ts
export type ProductStatus = "available" | "coming-soon";

export type ProductCategory = "Notes" | "Kits" | "Tools" | "Apps";

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortTag: string;
  description: string;        // short card description
  longDescription: string;    // deeper detail for slug page
  bullets: string[];          // “What you'll learn / why it exists”
  includes: string[];         // “What’s inside”
  price: string;
  status: ProductStatus;
  gumroadUrl?: string;
  badge?: "New" | "Popular" | "Soon";
  category: ProductCategory;
};

export const products: Product[] = [
    {
    id: "plant-bio-notes",
    slug: "plant-biology-beginner-notes",
    name: "Plant Biology for Beginners – Notes & Diagrams",
    shortTag: "Notes",
    description:
      "Clean notes on plant cells, chloroplasts, photosynthesis, and how plants actually grow – written from a beginner’s perspective.",
    longDescription:
      "These are my real notes from learning plant biology: plant cells, chloroplasts, photosynthesis, stomata, and how energy flows through a plant. I rewrote them in plain language, added hand-drawn diagrams, and organized them so someone starting from zero can follow along without getting crushed by jargon.",
    bullets: [
      "Understand plant cells, chloroplasts, and basic plant anatomy in simple terms.",
      "See how light, water, and CO₂ actually turn into plant growth.",
      "Use the diagrams and summaries as a quick reference while you study or grow.",
    ],
    includes: [
      "30–40 page PDF of beginner-friendly plant biology notes.",
      "Hand-drawn diagrams for key concepts (cells, chloroplasts, stomata).",
      "Summary pages for quick review before tests or projects.",
    ],
    price: "$9",
    status: "coming-soon",
    badge: "Soon",
    category: "Notes",
  },
  {
    id: "soil-basics-pack",
    slug: "soil-science-starter-pack",
    name: "Soil Science Starter Pack",
    shortTag: "Starter Kit",
    description:
      "A practical starter kit for understanding soil texture, structure, and organic matter using simple tests and guided notes.",
    longDescription:
      "This pack is built for beginners who want to stop guessing about their soil. You get a guided PDF that explains soil texture, structure, and organic matter, plus simple at-home tests (jar test, squeeze test) with worksheets to record your results. It’s designed for people who want to actually understand what they’re growing in, not just throw fertilizer at it.",
    bullets: [
      "Learn what sand, silt, and clay actually mean for your plants.",
      "Run simple at-home tests and record your real soil results.",
      "Build a small soil profile for your garden, pots, or future beds.",
    ],
    includes: [
      "Soil science PDF guide (texture, structure, organic matter basics).",
      "Printable worksheets for jar tests and squeeze tests.",
      "Example interpretations so you’re not guessing at the results.",
    ],
    price: "$15",
    status: "coming-soon",
    badge: "Soon",
    category: "Kits",
  },
  {
    id: "garden-logbook",
    slug: "beginner-garden-logbook-pdf",
    name: "Beginner Garden & Grow Logbook",
    shortTag: "Logbook",
    description:
      "A printable logbook for tracking what you planted, where, when, and what actually happened – so every season you get smarter.",
    longDescription:
      "Most people grow plants and then forget what they did. This logbook fixes that. It gives you simple, repeatable pages for logging plant variety, dates, weather, soil notes, inputs, and outcomes. Over time, it becomes your personal grow history, so each season you make better decisions instead of starting over from scratch.",
    bullets: [
      "Track plantings, dates, weather, and inputs in one place.",
      "Notice patterns in what worked and what failed over time.",
      "Use it as a companion to your blog posts, experiments, and projects.",
    ],
    includes: [
      "Printable PDF logbook pages (daily/weekly/seasonal views).",
      "Crop summary pages for each plant or bed.",
      "A short guide on how to actually use the logbook without overcomplicating it.",
    ],
    price: "$12",
    status: "coming-soon",
    badge: "Soon",
    category: "Kits",
  },
  {
    id: "soil-water-guide",
    slug: "soil-water-visual-guide",
    name: "Soil & Water – Visual Guide to Field Capacity and Wilting",
    shortTag: "Visual Guide",
    description:
      "A visual guide that explains field capacity, wilting point, and soil water in plain language with diagrams you can actually remember.",
    longDescription:
      "Soil water concepts are where most beginners check out. This visual guide breaks down field capacity, wilting point, saturation, and drainage with hand-drawn diagrams and simple explanations. It connects the science to what you actually see in your pots, beds, or future farm soil.",
    bullets: [
      "See field capacity, wilting point, and saturation as pictures, not just terms.",
      "Understand why overwatering and underwatering both kill plants.",
      "Use the guide while you read more advanced soil science or watch videos.",
    ],
    includes: [
      "Visual PDF guide with Wacom-drawn soil water diagrams.",
      "One-page cheat sheet for quick reference.",
      "Examples of how these concepts show up in real growing situations.",
    ],
    price: "$12",
    status: "coming-soon",
    badge: "Soon",
    category: "Notes",
  },

];
