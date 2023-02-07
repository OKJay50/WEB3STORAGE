
import { Web3Storage, getFilesFromPath } from "web3.storage"
import { Web3Response } from "web3.storage/dist/src/lib/interface"

const token = process.env['WEB3STORAGE_API_TOKEN']

// Construct with token and endpoint
const client: Web3Storage = new Web3Storage({ token })

async function uploadAndRetriveFiles() {
  const filesToUpload = await getFilesFromPath('./files')
  const rootCid = await client.put(filesToUpload)

  console.log(rootCid)

  const res = await client.get(rootCid)
  const files = await res?.files()
  for (const file of files!) {
    console.log(`${file.cid} ${file.name} ${file.size}`)
  }
}

uploadAndRetriveFiles()





