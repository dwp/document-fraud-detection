//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter('plural', function (content) {
    if(content == '1'){
      return content + " issue";
    }
    else {
        return content + " issues";}
})