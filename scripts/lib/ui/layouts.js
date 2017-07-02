const getCombinedStyle = require("library/styler-builder").getCombinedStyle;
const FlexLayout = require("sf-core/ui/flexlayout");

function createLoadingLayout(height) {
    const layoutStyle = getCombinedStyle(".flexLayout .flexLayout-headerBar", {
		left: 0,
		top: 0,
		width: null,
		height: height,
		positionType: FlexLayout.PositionType.RELATIVE
	});
    var layout = new FlexLayout(layoutStyle);
    return layout;
}

module.exports = {
    createLoadingLayout: createLoadingLayout
};