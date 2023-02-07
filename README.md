## Working with TypeScript and Web3Storage

[Web3Storage](https://web3.storage/) is a platform for storing data on the decentralized web using a simple API. It’s fast, open, and free.

In this template, we upload image files to Web3Storage, retrieve the [root content identifier (CID)](https://docs.ipfs.io/concepts/content-addressing/)(which is a unique pointer to an uploaded directory of files), use the CID to retrieve and loop over those files then print out individual file's CID, name, and size.

You can use this template as a jumping point to build your own data decentralized app with Web3Storage as the core decentralized data storage.

### Getting Started

![Web3Storage and TypeScript template walkthrough](https://www.loom.com/share/bf65261d17c04036860f13a525ed40f2)

**Important** - You'll need to create a secret in replit that references your Web3Storage Client API token. The secret key should be named:
 
```
WEB3STORAGE_API_TOKEN
```
And the assigned value should be your API token string. Get the API token from [Web3Storage](https://web3.storage/) and insert into the Secrets.

- Hit **Run** to see the CID and dataframe printed
- Learn how it works from the code!