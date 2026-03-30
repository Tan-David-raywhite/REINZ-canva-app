import pkg from "../package.json" with { type: "json" };
import { apps, apps_no_i18n, i18n } from "./config/index.js";
const plugin = {
    meta: {
        name: "@canva/app-eslint-plugin",
        version: pkg.version,
    },
    configs: {
        apps,
        apps_no_i18n,
        apps_i18n: i18n,
    },
};
export default plugin;
