import chalk from 'chalk';
import { readFromFile, writeToFile } from './fileIO.js';
import { convertJSONToCSV } from './csv.js';

const convert = async () => {
  const JSONData = await readFromFile('YOUR_FILE_INSIDE_DATA_FOLDER.json');
  
  const json = await JSON.parse(JSONData);
  
  // process and polish the json items here if needed before next stage.
  // Remember that convertJSONToCSV accepts an array of jsons. [ {}, {} ]

  const CSV = await convertJSONToCSV(json.Item);
  
  await writeToFile('Output.csv', CSV);
};

const main = async () => {
  await convert();
  console.log(chalk.magenta('Done...'));
  process.exit(0);
};

main();
