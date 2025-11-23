diff --git a/app/layout.tsx b/app/layout.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..ea6bab6bb1316e8784f83b443e3185a24c611ee0
--- /dev/null
+++ b/app/layout.tsx
@@ -0,0 +1,29 @@
+import type { Metadata } from "next";
+import "./globals.css";
+import { Space_Grotesk } from "next/font/google";
+
+const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
+
+export const metadata: Metadata = {
+  title: "Neon Events Marketplace",
+  description: "Discover and book premium event experiences with glowing neon flair.",
+};
+
+export default function RootLayout({ children }: { children: React.ReactNode }) {
+  return (
+    <html lang="en" className="dark">
+      <body className={`${spaceGrotesk.className} bg-slate-950 text-white min-h-screen relative overflow-x-hidden`}> 
+        <div className="fixed inset-0 -z-20 bg-slate-950" aria-hidden />
+        <div className="fixed inset-0 -z-10 pointer-events-none">
+          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-neon-blue/30 blur-3xl" />
+          <div className="absolute top-20 right-0 h-[28rem] w-[28rem] rounded-full bg-neon-purple/25 blur-3xl" />
+          <div className="absolute bottom-10 left-1/4 h-[22rem] w-[22rem] rounded-full bg-neon-cyan/20 blur-3xl" />
+          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,234,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(155,92,246,0.08),transparent_35%),radial-gradient(circle_at_40%_80%,rgba(32,255,255,0.06),transparent_35%)]" />
+        </div>
+        <div className="relative z-10 flex min-h-screen flex-col">
+          {children}
+        </div>
+      </body>
+    </html>
+  );
+}
