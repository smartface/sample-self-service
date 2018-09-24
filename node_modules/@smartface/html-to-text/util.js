function isEaualProps(a, b) {
  return (
    a.underline === b.underline &&
    a.backgroundColor === b.backgroundColor &&
    a.foregroundColor === b.foregroundColor &&
    a.link === b.link &&
    isEqualFontProps(a.font, b.font) && (
      (a.ios && b.ios) ? (a.ios.underlineColor === b.ios.underlineColor) :
      (!a.ios && !b.ios) ? true : false)
  );
}

function isEqualFontProps(a, b) {
  if (a && b) {
    return (
      a.bold === b.bold &&
      a.italic === b.italic &&
      a.style === b.style &&
      a.family === b.family &&
      a.size === b.size
    );
  }
  else if (!a && !b)
    return true;
  return false;
}

function clearProps(t) {
  t.string = t.string;
  delete t.value;
  t.backgroundColor === "transparent" && (delete t.backgroundColor);
  t.underlineColor && (t.ios = { underlineColor: t.underlineColor });
  delete t.underlineColor;
  return t;
}

function updateUnderlineColor(t){
  if(t.underline && !t.underlineColor){
    t.underlineColor = t.foregroundColor || "#000000";
  }
}


function isPlainAttributedText(t){
    return ( 
        !t.backgroundColor &&
        !t.foregroundColor &&
        !t.underline &&
        !t.ios &&
        !t.font
       );
}

module.exports = {
    isEaualProps,
    isEqualFontProps,
    clearProps,
    isPlainAttributedText,
    updateUnderlineColor
};