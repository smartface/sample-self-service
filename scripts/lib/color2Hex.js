const Color = require('sf-core/ui/color');

exports.getRGB = getRGB;

function d2h(d) { return (+d).toString(16).toUpperCase(); }

function getRGB(color) {
    var red = Color.red(color);
    var green = Color.green(color);
    var blue = Color.blue(color);

    return "#" + d2h(red) + d2h(green) + d2h(blue);
}
