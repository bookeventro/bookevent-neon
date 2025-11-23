diff --git a/components/marketing/RecommendedSection.tsx b/components/marketing/RecommendedSection.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..77bbac6bc71ed49abd57257bc55e685c95351899
--- /dev/null
+++ b/components/marketing/RecommendedSection.tsx
@@ -0,0 +1,68 @@
+import { providers } from "@/lib/constants";
+import Card from "@/components/ui/Card";
+import Badge from "@/components/ui/Badge";
+import Button from "@/components/ui/Button";
+import { Star, MapPin, Clock, Flame } from "lucide-react";
+import Image from "next/image";
+import { formatCurrency } from "@/lib/utils";
+
+export default function RecommendedSection() {
+  return (
+    <section id="providers" className="space-y-6">
+      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
+        <div>
+          <p className="text-sm text-white/70">Top-rated for your preferences</p>
+          <h2 className="text-3xl font-semibold">Recommended curators</h2>
+        </div>
+        <Button variant="ghost" className="border border-white/10">View all</Button>
+      </div>
+      <div className="grid gap-6 md:grid-cols-2">
+        {providers.map((provider) => (
+          <Card key={provider.name} className="p-5 flex flex-col gap-4">
+            <div className="flex items-start gap-4">
+              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10">
+                <Image src={provider.image} alt={provider.name} fill sizes="80px" className="object-cover" />
+              </div>
+              <div className="flex-1 space-y-2">
+                <div className="flex items-center gap-2">
+                  <h3 className="text-lg font-semibold">{provider.name}</h3>
+                  {provider.featured && (
+                    <Badge tone="purple" icon={<Flame className="h-3 w-3" />}>Signature</Badge>
+                  )}
+                </div>
+                <p className="text-sm text-white/70">{provider.tagline}</p>
+                <div className="flex flex-wrap gap-2">
+                  {provider.badges.map((badge) => (
+                    <Badge key={badge}>{badge}</Badge>
+                  ))}
+                </div>
+              </div>
+              <div className="text-right space-y-1">
+                <p className="text-sm text-white/60">from</p>
+                <p className="text-xl font-bold text-neon-blue">{formatCurrency(provider.price)}</p>
+                <div className="flex items-center justify-end gap-1 text-sm text-white/70">
+                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
+                  <span>{provider.rating}</span>
+                </div>
+              </div>
+            </div>
+            <div className="grid grid-cols-2 gap-3 text-sm text-white/75">
+              <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 flex items-center gap-2">
+                <MapPin className="h-4 w-4 text-neon-blue" />
+                <span>{provider.location}</span>
+              </div>
+              <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 flex items-center gap-2">
+                <Clock className="h-4 w-4 text-neon-purple" />
+                <span>{provider.delivery}</span>
+              </div>
+            </div>
+            <div className="flex flex-wrap gap-3">
+              <Button className="flex-1">Book now</Button>
+              <Button variant="ghost" className="flex-1 border border-white/10">View details</Button>
+            </div>
+          </Card>
+        ))}
+      </div>
+    </section>
+  );
+}
