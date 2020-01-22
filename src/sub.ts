const closestToZero = (n: number[]) => {
  let actual = n[0]
  if (!n || !n.length) {
    return 0
  }
  for (let i = 0; i < n.length; i++) {
    actual =
      Math.abs(n[i]) <= Math.abs(actual)
        ? Math.abs(n[i]) === actual
          ? actual
          : n[i]
        : actual
  }
  return actual
}

export default {
  closestToZero,
}
