diff --git a/components/marketing/HowItWorks.tsx b/components/marketing/HowItWorks.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..84fdceab5315fffd51a45a74a1360c7228f9eca2
--- /dev/null
+++ b/components/marketing/HowItWorks.tsx
@@ -0,0 +1,64 @@
+import { ArrowRight, CheckCircle, Sparkles, Clock } from "lucide-react";
+import Card from "@/components/ui/Card";
+
+const steps = [
+  {
+    title: "Define your vibe",
+    description: "Set preferences for mood, scale, budget, and impact. Our neon-grade engine maps them instantly.",
+    icon: Sparkles,
+  },
+  {
+    title: "Match with curators",
+    description: "Receive elite providers with transparent pricing, delivery windows, and immersive add-ons.",
+    icon: CheckCircle,
+  },
+  {
+    title: "Activate & track",
+    description: "Book in one click, sync milestones to your calendar, and monitor progress in real time.",
+    icon: Clock,
+  },
+];
+
+export default function HowItWorks() {
+  return (
+    <section id="how-it-works" className="space-y-6">
+      <div className="flex items-center gap-3">
+        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple p-[1px] shadow-[0_0_16px_rgba(0,234,255,0.35)]">
+          <div className="h-full w-full rounded-[12px] bg-slate-950/90 flex items-center justify-center text-sm text-white/80">
+            02
+          </div>
+        </div>
+        <div>
+          <p className="text-sm text-white/70">Frictionless booking</p>
+          <h2 className="text-2xl font-semibold">How it works</h2>
+        </div>
+      </div>
+      <div className="grid gap-4 md:grid-cols-3">
+        {steps.map((step, index) => (
+          <Card key={step.title} className="p-5 relative overflow-hidden">
+            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-neon-purple/10" />
+            <div className="relative space-y-4">
+              <div className="flex items-center justify-between">
+                <div className="flex items-center gap-3">
+                  <span className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue font-semibold">
+                    {index + 1}
+                  </span>
+                  <div>
+                    <p className="text-sm text-white/60">Step {index + 1}</p>
+                    <h3 className="text-lg font-semibold">{step.title}</h3>
+                  </div>
+                </div>
+                <step.icon className="h-5 w-5 text-neon-purple" />
+              </div>
+              <p className="text-white/70 leading-relaxed">{step.description}</p>
+              <div className="flex items-center gap-2 text-neon-blue text-sm font-semibold">
+                Learn more
+                <ArrowRight className="h-4 w-4" />
+              </div>
+            </div>
+          </Card>
+        ))}
+      </div>
+    </section>
+  );
+}
