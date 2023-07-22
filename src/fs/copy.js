import { promises as fs } from 'fs';
import path from 'path';

const folderName = 'files'
const newFolder = 'files_copy'

const copy = async () => {
    try {
        await fs.mkdir(newFolder, { recursive: true });
        console.log(`Folder "${newFolder}" created (if not existing).`);
    
        const files = await fs.readdir(folderName);
        await Promise.all(
          files.map(async (file) => {
            const sourcePath = path.join(folderName, file);
            const targetPath = path.join(newFolder, file);
            await fs.copyFile(sourcePath, targetPath);
            console.log(`File "${file}" copied to "${newFolder}".`);
          })
        );
      } catch (err) {
        console.error('Error copying files:', err);
      }
    
};

await copy();
