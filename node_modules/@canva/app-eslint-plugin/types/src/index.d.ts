import type { TSESLint } from "@typescript-eslint/utils";
interface CanvaPlugin extends TSESLint.FlatConfig.Plugin {
  meta: {
    name: "@canva/app-eslint-plugin";
    version: string;
  };
  configs: {
    apps: TSESLint.FlatConfig.ConfigArray;
    apps_no_i18n: TSESLint.FlatConfig.ConfigArray;
    apps_i18n: TSESLint.FlatConfig.Config;
  };
}
declare const plugin: CanvaPlugin;
export default plugin;
