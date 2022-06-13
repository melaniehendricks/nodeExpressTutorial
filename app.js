


/** NPM notes
 * - reuse our own code in other projects 
 * - use code written by other devs
 * - share our own solutions with other devs
 * - package === dependency === module
 * - no quality control - anyone can publish anything (look at # weekly downloads)
 * 
 * npm - global command, comes with node
 * npm -version or --v
 * 
 * 2 flavors:
 * 1) a local dependency - use it only in this particular project
 * npm i <packageName>
 * 
 * 2) global dependency - use it in any project
 * npm install -g <packagename>
 * sudo install -g <packageName> (Mac)
 * 
 * 
 * package.json - manifest file (stores important info about project/package)
 * 1) manual approach (create package.json in teh root, create properties, etc)
 * 2) npm init (step by step, press enter to skip)
 * 3) npm init -y (everything default)
 * 
 * WHY WE NEED IT
 * - stores dependencies + versions needed for application (i.e. lodash)
 * 
 */

const _ = require('lodash');
const items = [1,[2,[3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);