import fs from 'fs/promises';
import path from 'path';

const create = async () => {
  const folderName = 'files';
  const fileName = path.join(folderName, 'create.txt');
  const contentToWrite = 'I am fresh and young.';

  try {
    await fs.access(folderName);
    console.log('Folder "files" already exists.');
  } catch (err) {
    if (err.code === 'ENOENT') {
      try {
        await fs.mkdir(folderName);
        console.log('Folder "files" created.');
      } catch (err) {
        console.error('Error creating folder:', err);
      }
    } else {
      console.error('Error accessing folder:', err);
    }
  }

  try {
    await fs.writeFile(fileName, contentToWrite);
    console.log('File created and text inserted successfully!');
  } catch (err) {
    console.error('Error creating/writing the file:', err);
  }
};

await create();