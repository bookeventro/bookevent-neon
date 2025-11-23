diff --git a/components/ui/Button.tsx b/components/ui/Button.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..899d5a307c8920e3a3a43d4eedc140d0ef803632
--- /dev/null
+++ b/components/ui/Button.tsx
@@ -0,0 +1,28 @@
+import { ButtonHTMLAttributes, ReactNode } from "react";
+import { cn } from "@/lib/utils";
+
+type ButtonVariant = "primary" | "ghost";
+
+type ButtonProps = {
+  children: ReactNode;
+  variant?: ButtonVariant;
+  icon?: ReactNode;
+} & ButtonHTMLAttributes<HTMLButtonElement>;
+
+export default function Button({ children, variant = "primary", icon, className, ...props }: ButtonProps) {
+  return (
+    <button
+      className={cn(
+        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-neon-blue/60",
+        variant === "primary" &&
+          "bg-gradient-to-br from-neon-blue via-neon-cyan to-neon-purple text-slate-950 shadow-[0_0_25px_rgba(0,234,255,0.4)]",
+        variant === "ghost" && "bg-white/5 text-white hover:bg-white/10",
+        className,
+      )}
+      {...props}
+    >
+      {icon && <span className="flex-shrink-0">{icon}</span>}
+      {children}
+    </button>
+  );
+}
