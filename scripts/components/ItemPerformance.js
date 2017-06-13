/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemPerformanceDesign = require('library/ItemPerformance');

const ItemPerformance = extend(ItemPerformanceDesign)(
	function(_super, props, pageName){
		delete ItemPerformanceDesign.defaults.width
		_super(this, props || ItemPerformanceDesign.defaults );
		this.pageName = pageName;
		
		this.reviewDate.title.text  = lang["pgPerformance.reviewDate"];
		this.nextReview.title.text = lang["pgPerformance.nextReview"];
		this.rating.title.text = lang["pgPerformance.rating"];
		this.overallScore.title.text = lang["pgPerformance.overallScore"];
	}
);

module && (module.exports = ItemPerformance);

