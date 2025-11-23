diff --git a/postcss.config.js b/postcss.config.js
new file mode 100644
index 0000000000000000000000000000000000000000..12a703d900da8159c30e75acbd2c4d87ae177f62
--- /dev/null
+++ b/postcss.config.js
@@ -0,0 +1,6 @@
+module.exports = {
+  plugins: {
+    tailwindcss: {},
+    autoprefixer: {},
+  },
+};
