const nospace = (str) => {
  let VRegExp = new RegExp(/^(\s|\u00A0)+/g),
    VResult = str.replace(VRegExp, '');
  return VResult
}

export {nospace}
