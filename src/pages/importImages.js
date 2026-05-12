function importImages(globResult) {
  return Object.values(globResult).map((m) => m.default);
}

export default importImages;
