diff --git a/components/ui/Card.tsx b/components/ui/Card.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0846ef02e2ef67b76a665f41cca1b16eac6d8317
--- /dev/null
+++ b/components/ui/Card.tsx
@@ -0,0 +1,20 @@
+import { HTMLAttributes, ReactNode } from "react";
+import { cn } from "@/lib/utils";
+
+type CardProps = {
+  children?: ReactNode;
+} & HTMLAttributes<HTMLDivElement>;
+
+export default function Card({ className, children, ...props }: CardProps) {
+  return (
+    <div
+      className={cn(
+        "rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_0_24px_rgba(0,234,255,0.25)] transition",
+        className,
+      )}
+      {...props}
+    >
+      {children}
+    </div>
+  );
+}
