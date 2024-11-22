export default function useSort(data) {
  function sort(a, b) {
    if (a.name?.common < b.name?.common) {
      return -1;
    }
    if (a.name?.common > b.name?.common) {
      return 1;
    }
    return 0;
  }

  return data.sort(sort);
}
