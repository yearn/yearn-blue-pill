function importImages(globResult) {
  return Object.entries(globResult)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, m]) => m.default);
}

export default importImages;
