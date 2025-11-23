diff --git a/components/marketing/CategoriesStrip.tsx b/components/marketing/CategoriesStrip.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..76944d5ee644e23d1975aa1f11fd1f8eabc8d3cc
--- /dev/null
+++ b/components/marketing/CategoriesStrip.tsx
@@ -0,0 +1,39 @@
+import { categories } from "@/lib/constants";
+import Badge from "@/components/ui/Badge";
+
+export default function CategoriesStrip() {
+  return (
+    <section id="categories" className="space-y-4">
+      <div className="flex items-center gap-3">
+        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple p-[1px] shadow-[0_0_16px_rgba(0,234,255,0.35)]">
+          <div className="h-full w-full rounded-[12px] bg-slate-950/90 flex items-center justify-center text-sm text-white/80">
+            01
+          </div>
+        </div>
+        <div>
+          <p className="text-sm text-white/70">Browse by need</p>
+          <h2 className="text-2xl font-semibold">Signature categories</h2>
+        </div>
+      </div>
+      <div className="overflow-x-auto">
+        <div className="flex gap-4 min-w-max">
+          {categories.map((category) => (
+            <div
+              key={category.name}
+              className="glass-panel rounded-2xl px-5 py-4 min-w-[180px] border border-white/10 hover:border-neon-blue/50 transition shadow-[0_0_24px_rgba(0,255,255,0.18)]"
+            >
+              <div className="flex items-center justify-between">
+                <div>
+                  <p className="text-sm text-white/60">{category.tagline}</p>
+                  <p className="text-lg font-semibold">{category.name}</p>
+                </div>
+                <Badge tone="cyan">{category.count}+ picks</Badge>
+              </div>
+              <p className="mt-3 text-sm text-white/60 leading-relaxed">{category.description}</p>
+            </div>
+          ))}
+        </div>
+      </div>
+    </section>
+  );
+}
