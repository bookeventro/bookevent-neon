diff --git a/app/(marketing)/page.tsx b/app/(marketing)/page.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0f679753809c650d9052c6794731f7347718c486
--- /dev/null
+++ b/app/(marketing)/page.tsx
@@ -0,0 +1,19 @@
+import MainNavbar from "@/components/layout/MainNavbar";
+import Hero from "@/components/marketing/Hero";
+import CategoriesStrip from "@/components/marketing/CategoriesStrip";
+import RecommendedSection from "@/components/marketing/RecommendedSection";
+import HowItWorks from "@/components/marketing/HowItWorks";
+
+export default function HomePage() {
+  return (
+    <main className="relative">
+      <MainNavbar />
+      <div className="max-w-6xl mx-auto px-4 pb-20 pt-28 space-y-20">
+        <Hero />
+        <CategoriesStrip />
+        <RecommendedSection />
+        <HowItWorks />
+      </div>
+    </main>
+  );
+}
