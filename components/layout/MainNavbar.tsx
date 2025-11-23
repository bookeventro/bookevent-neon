diff --git a/components/layout/MainNavbar.tsx b/components/layout/MainNavbar.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..ff9a284d3a07113b146547483e16c22dac435441
--- /dev/null
+++ b/components/layout/MainNavbar.tsx
@@ -0,0 +1,82 @@
+"use client";
+
+import { useState } from "react";
+import { Menu, X, Sparkles, Search } from "lucide-react";
+import Button from "@/components/ui/Button";
+import { cn } from "@/lib/utils";
+import Link from "next/link";
+
+const links = [
+  { label: "Discover", href: "#discover" },
+  { label: "Categories", href: "#categories" },
+  { label: "Providers", href: "#providers" },
+  { label: "How it works", href: "#how-it-works" },
+];
+
+export default function MainNavbar() {
+  const [open, setOpen] = useState(false);
+
+  return (
+    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-[0_0_25px_rgba(0,234,255,0.25)]"> 
+      <div className="max-w-6xl mx-auto px-4">
+        <div className="flex items-center justify-between py-4">
+          <Link href="#" className="flex items-center gap-2">
+            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple p-[1px] shadow-[0_0_25px_rgba(0,234,255,0.45)]">
+              <div className="h-full w-full rounded-[14px] bg-slate-950/90 flex items-center justify-center">
+                <Sparkles className="h-6 w-6 text-neon-blue" />
+              </div>
+            </div>
+            <div className="leading-tight">
+              <p className="text-lg font-semibold">NeonEvents</p>
+              <p className="text-xs text-white/70">Premium marketplace</p>
+            </div>
+          </Link>
+
+          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
+            {links.map((link) => (
+              <Link
+                key={link.label}
+                href={link.href}
+                className="transition hover:text-neon-blue"
+              >
+                {link.label}
+              </Link>
+            ))}
+          </nav>
+
+          <div className="hidden md:flex items-center gap-3">
+            <Button variant="ghost" className="border border-white/10" icon={<Search className="h-4 w-4" />}>Search</Button>
+            <Button>Sign up</Button>
+          </div>
+
+          <button
+            className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5"
+            onClick={() => setOpen((v) => !v)}
+            aria-label="Toggle menu"
+          >
+            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
+          </button>
+        </div>
+
+        <div className={cn("md:hidden pb-4", open ? "block" : "hidden")}> 
+          <div className="space-y-4">
+            {links.map((link) => (
+              <Link
+                key={link.label}
+                href={link.href}
+                className="block rounded-xl bg-white/5 px-4 py-3 border border-white/10"
+                onClick={() => setOpen(false)}
+              >
+                {link.label}
+              </Link>
+            ))}
+            <div className="flex gap-3">
+              <Button className="flex-1" variant="ghost">Log in</Button>
+              <Button className="flex-1">Sign up</Button>
+            </div>
+          </div>
+        </div>
+      </div>
+    </header>
+  );
+}
