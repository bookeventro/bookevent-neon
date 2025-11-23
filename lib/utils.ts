diff --git a/lib/utils.ts b/lib/utils.ts
new file mode 100644
index 0000000000000000000000000000000000000000..50a813e5a580db60572f7fffd5ecf769cf8c438d
--- /dev/null
+++ b/lib/utils.ts
@@ -0,0 +1,11 @@
+export function cn(...classes: Array<string | false | null | undefined>) {
+  return classes.filter(Boolean).join(" ");
+}
+
+export function formatCurrency(value: number) {
+  return new Intl.NumberFormat("en-US", {
+    style: "currency",
+    currency: "USD",
+    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
+  }).format(value);
+}
