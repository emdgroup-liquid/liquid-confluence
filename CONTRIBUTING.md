# Liquid Confluence

## Requirements

- **JDK 11**
  
  We recommend installing with [sdkman](https://sdkman.io):
  ```bash
  sdk install java 11
  ```
- [Atlassian Plugin SDK](https://developer.atlassian.com/server/framework/atlassian-sdk/install-the-atlassian-sdk-on-a-linux-or-mac-system/)

## Development

Start the dev server with:

```bash
atlas-run --jvmargs "-Xmx2048m"
```

After applying changes to frontend resources, you will need to run the following command in a separate terminal in order for [QuickReload](https://developer.atlassian.com/server/framework/atlassian-sdk/automatic-plugin-reinstallation-with-quickreload/) to pick up the changes:

```bash
atlas-mvn package
```