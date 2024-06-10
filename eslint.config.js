import globals from "globals";
import pluginJs from "@eslint/js";
// import jest from 'eslint-plugin-jest';


export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node,
        ...globals.jest,} }},
  pluginJs.configs.recommended,
];
