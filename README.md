# Primer

## Running the app
* Run `npm install` followed by `npm run build`, and finally `node bin/app.bundle.js`.
* For testing run `npm install` followed by `npm test`.

## Notes
* Rudimentary sieve algorithm used, would like to improve.
* Currently the `renderMultiplicationGrid` is not very performant, would like to spend more time on it.
* As this evolves will break everything into classes. 
    * Currently `getPrimes` and `renderMultiplicationGrid` live in the same file, since there is little cohesion to put them into the same class.
* Was't quite sure on the best approach of testing the performance.