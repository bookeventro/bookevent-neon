diff --git a/tailwind.config.ts b/tailwind.config.ts
new file mode 100644
index 0000000000000000000000000000000000000000..9e1d15f49823570c59cdfc8fe853284868effa02
--- /dev/null
+++ b/tailwind.config.ts
@@ -0,0 +1,43 @@
+import type { Config } from "tailwindcss";
+
+const config: Config = {
+  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
+  theme: {
+    extend: {
+      colors: {
+        "neon-blue": "#00EAFF",
+        "neon-purple": "#9B5CF6",
+        "neon-cyan": "#20FFFF",
+      },
+      boxShadow: {
+        glow: "0 0 20px rgba(0, 255, 255, 0.6)",
+        soft: "0 25px 80px rgba(0,0,0,0.35)",
+      },
+      borderRadius: {
+        xl: "1rem",
+        "2xl": "1.25rem",
+        "3xl": "1.75rem",
+      },
+      backgroundImage: {
+        "neon-gradient": "linear-gradient(135deg, #00EAFF 0%, #20FFFF 50%, #9B5CF6 100%)",
+        "glass-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
+      },
+      animation: {
+        float: "float 8s ease-in-out infinite",
+        pulseGlow: "pulseGlow 3s ease-in-out infinite",
+      },
+      keyframes: {
+        float: {
+          "0%, 100%": { transform: "translateY(0px)" },
+          "50%": { transform: "translateY(-8px)" },
+        },
+        pulseGlow: {
+          "0%, 100%": { boxShadow: "0 0 24px rgba(0,234,255,0.22)" },
+          "50%": { boxShadow: "0 0 36px rgba(155,92,246,0.35)" },
+        },
+      },
+    },
+  },
+  plugins: [],
+};
+export default config;
