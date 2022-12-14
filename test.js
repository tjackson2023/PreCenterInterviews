
export function cleanMe(p, doSplit) {
  // split out the elements of the array, e.g. ['123,345', '234'] -> ['123', '345', '234']
  if (doSplit) {
    p = p.flatMap(x => (typeof x === 'string' ? x.split(',') : x));
  }

  // remove duplicates
  p = [...new Set(p)];

  // trim string elements
  p = p.map(x => (typeof x === 'string' ? x.trim() : x));

  // remove null/empty values from list, if present
  p = p.filter(x => x !== '');

  // sort
  p.sort();

  return p;
}
