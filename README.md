## Union Station 3d

3d rendering of Union Station in Denver Colorado rendered with synced interaction on a MapboxGL map. Model loaded from .gltf and rendered using Three.js with Threebox for camera alignment. Built with Vue.js. 

For live version visit: http://unionstation3d.surge.sh/

## To Use This Repo
1. From the command line, clone down this repo `git clone [this url]`
2. Install the dependencies: `cd union-station-3d && npm install`
3. Get an API key from [Mapbox](http://mapbox.com) and save it in a file called `key.js` in the `src` directory as: 
```
export const MB_TOKEN = 'that.string.you.got.from.mapbox'
```
4. Run `npm start` to start the development server
5. Have fun! 
