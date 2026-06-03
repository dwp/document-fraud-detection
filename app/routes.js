//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/prototypes/DFP-1087/v1/issue-false', function(request, response) {
    if(request.session.data['reportedType']=='False positive'){
        response.redirect("issue-p-location");
    }
    else{
        response.redirect("issue-n-location");
    }
});

router.post('/prototypes/DFP-1087/v1/issue-p-location', function(request, response) {
        response.redirect("issue-describe");
});

router.post('/prototypes/DFP-1087/v1/issue-n-location', function(request, response) {
   
        response.redirect("issue-describe");
});

router.post('/prototypes/DFP-1087/v1/issue-describe', function(request, response) {
        response.redirect("issue-cya");
});


router.post('/prototypes/DFP-1087/v1/issue-cya', function(request, response) {
// This is where we save the array objects in each loop
        let tempArray = [];
        if(request.session.data['issues']){
            tempArray = request.session.data['issues'];
         }
         let tempObject = {type: request.session.data['reportedType'], page: request.session.data['pageNo'], location: request.session.data['location'], check: request.session.data['checkName'], detail: request.session.data['moreDetail']};
         tempArray.push(tempObject);
         request.session.data['issues'] = tempArray;
        response.redirect("issue-list");
});

router.post('/prototypes/DFP-1087/v1/issue-list', function(request, response) {
      if(request.session.data['addAnother']=='Yes'){
        response.redirect("issue-false");
    }
    else{
        response.redirect("issue-consent");
    }
});

router.post('/prototypes/DFP-1087/v1/issue-delete', function(request, response) {
    if(request.session.data['delete']=='yes'){  
      let x = request.session.data['loop'];
      let temporaryArray = [];
      temporaryArray = request.session.data['issues']
      temporaryArray.splice(x, 1);
      request.session.data['issues'] = temporaryArray
      request.session.data['loop'] = null;  
    }
    response.redirect('issue-list');
});

router.post('/prototypes/DFP-1087/v1/issue-consent', function(request, response) {
        response.redirect("issue-confirm");
});