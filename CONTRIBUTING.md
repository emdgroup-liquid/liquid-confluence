# Liquid Confluence

## Requirements

- **JDK 11**
  
  We recommend installing with [sdkman](https://sdkman.io):
  ```bash
  sdk install java 11
  ```
- [Atlassian Plugin SDK](https://developer.atlassian.com/server/framework/atlassian-sdk/install-the-atlassian-sdk-on-a-linux-or-mac-system/)
- [Node.js](https://nodejs.org/en/download/)

## Development

1. `cd` into the `src-frontend` directory.
2. Run `npm install && npm run atlas-run` (this starts up Confluence on localhost).
3. As soon as Confluence is up and running, execute the command `npm run vite-build` in a new shell (vite now builds the frontend resources in [watch mode](https://vitejs.dev/config/build-options.html#build-watch)).

After applying changes to frontend resources, Vite (actually Rollup) will automatically invoke [QuickReload](https://developer.atlassian.com/server/framework/atlassian-sdk/automatic-plugin-reinstallation-with-quickreload/). You will still need to reload the browser window manually – like back in the old days 🔄.

## Using Web Components within Confluence

The HTML Macro is disabled in Confluence by default for [security reasons](https://confluence.atlassian.com/doc/html-macro-38273085.html#HTMLMacro-Securityconsiderations). If you trust your content managers, you can still [enable the HTML Macro in the Confluence system settings](https://confluence.atlassian.com/doc/html-macro-38273085.html#HTMLMacro-EnablingtheHTMLMacro).