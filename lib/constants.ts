diff --git a/lib/constants.ts b/lib/constants.ts
new file mode 100644
index 0000000000000000000000000000000000000000..b0bd4f5ff334c3f420ed301425a753d54239ea1d
--- /dev/null
+++ b/lib/constants.ts
@@ -0,0 +1,85 @@
+export const categories = [
+  {
+    name: "Immersive shows",
+    tagline: "Spectacle",
+    description: "Projection mapping, lasers, dancers, interactive holograms tailored to your story.",
+    count: 86,
+  },
+  {
+    name: "Culinary labs",
+    tagline: "Taste",
+    description: "Multi-sensory tasting menus, molecular mixology, chef tables with glowing plating.",
+    count: 112,
+  },
+  {
+    name: "Live music",
+    tagline: "Sound",
+    description: "Bands, DJs, and composers who specialize in atmospheric electronic and future bass.",
+    count: 134,
+  },
+  {
+    name: "Experience design",
+    tagline: "Flow",
+    description: "Spatial design, ambient lighting, scent-scaping, and guest journey choreography.",
+    count: 74,
+  },
+  {
+    name: "Tech installations",
+    tagline: "Code",
+    description: "Interactive LED tunnels, AI art walls, volumetric capture booths, AR invitations.",
+    count: 59,
+  },
+  {
+    name: "Talent & hosts",
+    tagline: "People",
+    description: "Bilingual MCs, futurist speakers, celebrity cameos, and concierge guest services.",
+    count: 91,
+  },
+];
+
+export const providers = [
+  {
+    name: "Astra Nova Studios",
+    tagline: "Immersive XR performances blending fashion, light, and live choreography.",
+    image: "/bg-neon.png",
+    rating: 4.9,
+    price: 18000,
+    location: "Los Angeles, CA",
+    delivery: "4-6 weeks",
+    featured: true,
+    badges: ["XR shows", "Creative direction", "Global crew"],
+  },
+  {
+    name: "Lumenwave Audio",
+    tagline: "Boutique electronic ensembles and sound designers for cinematic atmospheres.",
+    image: "/gradient-mask.png",
+    rating: 4.8,
+    price: 7200,
+    location: "Austin, TX",
+    delivery: "2-3 weeks",
+    featured: false,
+    badges: ["Hybrid sets", "Custom playlists", "On-site engineers"],
+  },
+  {
+    name: "Cyan Peak Events",
+    tagline: "Full-stack production house for executive offsites and tech festivals.",
+    image: "/bg-neon.png",
+    rating: 4.95,
+    price: 24000,
+    location: "New York, NY",
+    delivery: "6-8 weeks",
+    featured: true,
+    badges: ["Production", "Stage design", "Concierge"],
+  },
+  {
+    name: "Prism Atelier",
+    tagline: "Avant-garde culinary lab crafting phosphorescent courses and kinetic desserts.",
+    image: "/gradient-mask.png",
+    rating: 4.7,
+    price: 9500,
+    location: "Chicago, IL",
+    delivery: "3-4 weeks",
+    featured: false,
+    badges: ["Chef table", "Molecular mixology", "Live plating"],
+  },
+];
