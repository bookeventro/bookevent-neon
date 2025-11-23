diff --git a/components/marketing/Hero.tsx b/components/marketing/Hero.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..a81fb741de1f0e403ee473d48da6ddd563c72f7a
--- /dev/null
+++ b/components/marketing/Hero.tsx
@@ -0,0 +1,160 @@
+"use client";
+
+import { useState } from "react";
+import { Sparkles, MapPin, Calendar, DollarSign, Play } from "lucide-react";
+import Button from "@/components/ui/Button";
+import { cn, formatCurrency } from "@/lib/utils";
+
+const eventTypes = ["Corporate", "Wedding", "Concert", "Festival", "Conference", "Private Party"];
+
+export default function Hero() {
+  const [eventType, setEventType] = useState(eventTypes[0]);
+  const [location, setLocation] = useState("Los Angeles, CA");
+  const [date, setDate] = useState("");
+  const [budget, setBudget] = useState(12500);
+
+  return (
+    <section id="discover" className="relative overflow-hidden">
+      <div className="absolute inset-0 -z-10 opacity-80">
+        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,234,255,0.25),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(155,92,246,0.2),transparent_40%)]" />
+        <div className="absolute -top-24 -left-32 h-72 w-72 rounded-full bg-neon-blue/30 blur-3xl" />
+        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-neon-purple/25 blur-3xl" />
+      </div>
+      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
+        <div className="space-y-6">
+          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 shadow-[0_0_18px_rgba(0,234,255,0.35)] border border-white/15">
+            <Sparkles className="h-4 w-4 text-neon-blue" />
+            Neon-grade experiences for discerning hosts
+          </p>
+          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
+            Curate unforgettable <span className="text-neon-gradient">events</span> with premium creators.
+          </h1>
+          <p className="text-lg text-white/75 max-w-2xl">
+            Browse elite entertainers, chefs, planners, and technologists ready to transform any gathering into a luminous spectacle. Transparently priced, instantly bookable.
+          </p>
+          <div className="glass-panel rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.18)]">
+            <div className="grid gap-4 sm:grid-cols-2">
+              <label className="space-y-2">
+                <span className="text-sm text-white/70">Event type</span>
+                <div className="relative">
+                  <select
+                    className="input-neon appearance-none pr-10"
+                    value={eventType}
+                    onChange={(e) => setEventType(e.target.value)}
+                  >
+                    {eventTypes.map((type) => (
+                      <option key={type}>{type}</option>
+                    ))}
+                  </select>
+                  <Sparkles className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-neon-blue" />
+                </div>
+              </label>
+              <label className="space-y-2">
+                <span className="text-sm text-white/70">Location</span>
+                <div className="relative">
+                  <input
+                    className="input-neon"
+                    placeholder="City, venue, or virtual"
+                    value={location}
+                    onChange={(e) => setLocation(e.target.value)}
+                  />
+                  <MapPin className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-neon-purple" />
+                </div>
+              </label>
+              <label className="space-y-2">
+                <span className="text-sm text-white/70">Date</span>
+                <div className="relative">
+                  <input
+                    type="date"
+                    className="input-neon"
+                    value={date}
+                    onChange={(e) => setDate(e.target.value)}
+                  />
+                  <Calendar className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-neon-blue" />
+                </div>
+              </label>
+              <label className="space-y-2">
+                <div className="flex items-center justify-between text-sm text-white/70">
+                  <span>Budget</span>
+                  <span className="text-white/90 font-medium">{formatCurrency(budget)}</span>
+                </div>
+                <div className="relative">
+                  <input
+                    type="range"
+                    min={2000}
+                    max={50000}
+                    step={500}
+                    value={budget}
+                    onChange={(e) => setBudget(Number(e.target.value))}
+                    className="w-full accent-neon-blue cursor-pointer"
+                  />
+                  <DollarSign className="pointer-events-none absolute right-3 top-1 h-4 w-4 text-neon-cyan" />
+                </div>
+              </label>
+            </div>
+            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
+              <Button className="flex-1 shadow-[0_0_25px_rgba(0,234,255,0.35)]">Search matches</Button>
+              <Button variant="ghost" className="flex-1 border border-white/10" icon={<Play className="h-4 w-4" />}>
+                Watch demo
+              </Button>
+            </div>
+            <p className="mt-3 text-xs text-white/60">
+              Tailored results based on your inputs. Over 1,200 vetted providers with instant confirmation.
+            </p>
+          </div>
+        </div>
+
+        <div className="relative">
+          <div className="absolute -inset-4 bg-gradient-to-br from-neon-blue/25 via-transparent to-neon-purple/25 blur-3xl" />
+          <div className="relative glass-panel rounded-[28px] border border-white/10 p-6 shadow-[0_0_28px_rgba(0,234,255,0.25)]">
+            <div className="flex items-center justify-between mb-4">
+              <div>
+                <p className="text-sm text-white/70">Featured curator</p>
+                <p className="text-lg font-semibold">Astra Nova Studios</p>
+              </div>
+              <Badge tone="blue">Top 1%</Badge>
+            </div>
+            <div className="h-56 rounded-2xl bg-[linear-gradient(145deg,rgba(0,234,255,0.18),rgba(155,92,246,0.18))] flex items-center justify-center shadow-[0_0_40px_rgba(0,255,255,0.28)]">
+              <div className="text-center space-y-2">
+                <p className="text-sm uppercase tracking-[0.3em] text-white/70">immersive</p>
+                <p className="text-3xl font-semibold">Holographic runway</p>
+                <p className="text-white/70">From $18k • 9.8/10 satisfaction</p>
+              </div>
+            </div>
+            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/80">
+              <div className="rounded-xl bg-white/5 border border-white/10 p-3 space-y-1">
+                <p className="text-xs text-white/60">Delivery</p>
+                <p className="font-semibold">4 weeks</p>
+              </div>
+              <div className="rounded-xl bg-white/5 border border-white/10 p-3 space-y-1">
+                <p className="text-xs text-white/60">Crew</p>
+                <p className="font-semibold">12 specialists</p>
+              </div>
+              <div className="rounded-xl bg-white/5 border border-white/10 p-3 space-y-1">
+                <p className="text-xs text-white/60">Tech</p>
+                <p className="font-semibold">Volumetric capture</p>
+              </div>
+              <div className="rounded-xl bg-white/5 border border-white/10 p-3 space-y-1">
+                <p className="text-xs text-white/60">Add-ons</p>
+                <p className="font-semibold">AR invites, concierge</p>
+              </div>
+            </div>
+          </div>
+        </div>
+      </div>
+    </section>
+  );
+}
+
+function Badge({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "purple" }) {
+  return (
+    <span
+      className={cn(
+        "rounded-full px-3 py-1 text-xs font-semibold shadow-[0_0_18px_rgba(0,234,255,0.35)]",
+        tone === "blue" ? "bg-neon-blue/15 text-neon-blue border border-neon-blue/40" : "bg-neon-purple/15 text-neon-purple border border-neon-purple/40",
+      )}
+    >
+      {children}
+    </span>
+  );
+}
