diff --git a/components/ui/Badge.tsx b/components/ui/Badge.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..569cd8ae6f8d0f670cb64e01fe1505ef6e635402
--- /dev/null
+++ b/components/ui/Badge.tsx
@@ -0,0 +1,30 @@
+import { ReactNode } from "react";
+import { cn } from "@/lib/utils";
+
+type BadgeTone = "blue" | "purple" | "cyan";
+
+type BadgeProps = {
+  children: ReactNode;
+  tone?: BadgeTone;
+  icon?: ReactNode;
+};
+
+const toneStyles: Record<BadgeTone, string> = {
+  blue: "bg-neon-blue/15 text-neon-blue border-neon-blue/40",
+  purple: "bg-neon-purple/15 text-neon-purple border-neon-purple/40",
+  cyan: "bg-neon-cyan/15 text-neon-cyan border-neon-cyan/40",
+};
+
+export default function Badge({ children, tone = "blue", icon }: BadgeProps) {
+  return (
+    <span
+      className={cn(
+        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold shadow-[0_0_16px_rgba(0,234,255,0.25)]",
+        toneStyles[tone],
+      )}
+    >
+      {icon}
+      {children}
+    </span>
+  );
+}
