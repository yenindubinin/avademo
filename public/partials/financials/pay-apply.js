app.controller('PayApplyCtrl' ,
    ['$scope', '$state', '$stateParams', '$timeout', function ($scope, $state, $stateParams, $timeout) {
        $scope.$parent.setCurrentTab($state.current.name);

        if ($stateParams.initialize) {
            $timeout(function() {
                $scope.$parent.stats = {
                    estimated: 52,
                    contractual: 30,
                    direct: 12,
                    pending: 0,
                    unbudgeted: 0,
                    amount: {
                        total: ' -',
                        funds_disbursed: ' -',
                        est_budget: ' -',
                        contractual: ' -',
                        direct: ' -',
                        pending: ' -',
                        unbudgeted: ' -'
                    }
                };
            }, 400);
        }

        $scope.applies = {
            listRequiredByMe: [
                    {flag: 'red', title: 'Confirm Progress on Fireplace', type: "Secure Ledger Board", due_date: '8/16/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Fireplace Install'].join(", "), amount: 56678, status: ['In Process', 0]},
                    {flag: 'red', title: 'Need Stairs Ready for Floor Lights', type: "Secure Ledger Board", due_date: '8/17/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Mary Beroset', company: 'ABC Inc'}, sow: ['Stairway Floor Lighting'].join(", "), amount: 45766, status: ['In Process', 0.3]},
                    {flag: 'yellow', title: 'Decision on Ventilation ', type: "Secure Ledger Board", due_date: '8/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Dave Musgrove', company: 'ABC Inc'}, sow: [''].join(", "), amount: 12234, status: ['In Process', 0]},
                    {flag: 'yellow', title: 'Confirm Completion of Dry-In', type: "Secure Ledger Board", due_date: '8/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Jeff Price', company: 'ABC Inc'}, sow: ['Roof Dry-In'].join(", "), amount: 9089, status: ['pending', 0.25]},
                    {flag: 'yellow', title: 'Contact Inspector to Set Up 4-Way', type: "Secure Ledger Board", due_date: '8/18/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['-'].join(", "), amount: 23544, status: ['pending', 0]},
                    {flag: 'yellow', title: 'Inspect Fireplace Framing', type: "Secure Ledger Board", due_date: '8/19/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'John Steel', company: 'ABC Inc'}, sow: ['Fireplace Install'].join(", "), amount: 12132, status: ['In Process', 0.5]},
                    {flag: 'yellow', title: 'Initiate Bid Process for Drywall', type: "Secure Ledger Board", due_date: '8/19/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Drywall'].join(", "), amount: 61893, status: ['pending', 0]},
                    {flag: 'green', title: 'Ready for Facia Install', type: "Secure Ledger Board", due_date: '8/27/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Dave Gebo', company: 'ABC Inc'}, sow: ['Roof Dry-In'].join(", "), amount: 5322, status: ['In Process', 0.8]},
                    {flag: 'green', title: 'Contact Plumber for Install', type: "Secure Ledger Board", due_date: '9/3/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Plumbing Rough-In'].join(", "), amount: 86545, status: ['In Process', 0.1]},
                    {flag: 'green', title: 'Clean Job Site', due_date: '-', type: "Secure Ledger Board", responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['-'].join(", "), amount: 98731, status: ['In Process', 0]}
            ],
            listRequiredByOthers: [
                {flag: 'red', title: 'Submit Invoice for Additional Lumber', type: "Secure Ledger Board", due_date: '8/14/2015', responsible: {name: 'Dave Gebo', company: 'ABC Inc'},initiator: {name: 'Jeff Price', company: 'ABC Inc'}, sow: ['Roof Dry-In'].join(', '), amount: 454543, status: ['In Process', 0.2]},
                {flag: 'red', title: 'Discuss Ventilation Options', due_date: '8/16/2015', responsible: {name: 'Dave Musgrove', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Fireplace Install'].join(', '), amount: 12342, status: ['In Process', 0]},
                {flag: 'red', title: 'Complete Fireplace Framing', due_date: '8/17/2015', responsible: {name: 'John Steel', company: 'ABC Inc'},initiator: {name: 'John Steel', company: ''}, sow: ['Fireplace Install'].join(', '), amount: 875656, status: ['In Process', 0.8]},
                {flag: 'red', title: 'Close Garage Roof', due_date: '8/17/2015', responsible: {name: 'Dave Gebo', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: [''].join(', '), amount: 35654, status: ['In Process', 0.95]},
                {flag: 'red', title: 'Finish Closing in Roof', type: "Secure Ledger Board", due_date: '8/17/2015', responsible: {name: 'Mike Hunter', company: 'ABC Inc'},initiator: {name: 'Dave Gebo', company: 'ABC Inc'}, sow: [''].join(', '), amount: 877744, status: ['In Process', 0.45]},
                {flag: 'red', title: 'Roof Dry-In', due_date: '8/17/2015', responsible: {name: 'Dave Gebo', company: ''},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Roof Dry-In'].join(', '), amount: 122378, status: ['In Process', 0]},
                {flag: 'yellow', title: 'Electrical Overview', due_date: '8/18/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mary Beroset', company: 'ABC Inc'}, sow: ['Main Floor Overhead Lighting'].join(', '), amount: 7633, status: ['In Process', 0.3]},
                {flag: 'yellow', title: 'Install Fireplace ', due_date: '8/18/2015', responsible: {name: 'Dave Musgrove', company: ''},initiator: {name: 'Dave  Musgrove', company: ''}, sow: ['Fireplace Install'].join(', '), amount: 17673, status: ['In Process', 0]},
                {flag: 'yellow', title: 'Walk-Through w/Deisgner', type: "Secure Ledger Board", due_date: '8/18/2015', responsible: {name: 'Mike Riley', company: 'ABC Inc'},initiator: {name: 'Mary Beroset', company: 'ABC Inc'}, sow: ['Stairway Floor Lighting'].join(', '), amount: 23890, status: ['In Process', 0.25]},
                {flag: 'yellow', title: 'Complete Revisions from Walk-Through', due_date: '8/18/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mike Riley', company: 'ABC Inc'}, sow: ['Main Floor Overhead Lighting'].join(', '), amount: 56678, status: ['In Process', 0]},
                {flag: 'yellow', title: 'Complete Fireplace Install', due_date: '8/19/2015', responsible: {name: 'Dase Musgrove', company: ''},initiator: {name: 'Dave Musgrove', company: ''}, sow: ['-'].join(', '), amount: 267889, status: ['In Process', 0.5]},
                {flag: 'yellow', title: 'Final Walk-Through with GC', type: "Secure Ledger Board", due_date: '8/19/2015', responsible: {name: 'Dave Gebo', company: 'ABC Inc'},initiator: {name: 'Dave Gebo', company: ''}, sow: ['Roof Dry-In'].join(', '), amount: 1899, status: ['In Process', 0]},
                {flag: 'yellow', title: 'Product Review', type: "Secure Ledger Board", due_date: '8/20/2015', responsible: {name: 'Dave Musgrove', company: 'ABC Inc'},initiator: {name: 'Christian Peters', company: 'ABC Inc'}, sow: ['Fireplace Install'].join(', '), amount: 45342, status: ['In Process', 0.8]},
                {flag: 'green', title: 'Identify Electrical Requirements w/Designer', due_date: '8/22/2015', responsible: {name: 'Mary Beroset', company: 'ABC Inc'},initiator: {name: 'Mike Riley', company: ''}, sow: ['Stairway Floor Lighting'].join(', '), amount: 21986, status: ['In Process', 0.1]},
                {flag: 'green', title: 'Verify Additional Needs', due_date: '8/27/2015', responsible: {name: 'Dan Bonker', company: 'ABC Inc'},initiator: {name: 'Jeff Price', company: 'ABC Inc'}, sow: ['Frame 2nd Story'].join(', '), amount: 78955, status: ['In Process', 0]},
                {flag: 'green', title: 'Follow Up on Fireplace Install', due_date: '9/1/2015', responsible: {name: 'Christian Peters', company: 'ABC Inc'},initiator: {name: 'Dave Musgrove', company: 'ABC Inc'}, sow: ['Fireplace Install'].join(', '), amount: 12333, status: ['In Process', 0]}
            ],
            listDrafts: [
                {flag: 'draft', title: 'Samples of Door Frames Onsite', type: "Secure Ledger Board", due_date: '8/22/2015', responsible: {name: 'Mary Beroset', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Door Frames'].join(', '), amount: 76885, status: ['Draft', '-']},
                {flag: 'draft', title: 'Bring Copy of Instruction Manual', type: "Secure Ledger Board", due_date: '8/29/2015', responsible: {name: 'Mike Riley', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Fireplace Install'].join(', '), amount: 35354, status: ['Draft', '-']},
                {flag: 'draft', title: 'Verify Completion of Garage Insulation', due_date: '9/7/2015 ', responsible: {name: 'Mike Bearnson', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Insulation '].join(', '), amount: 10978, status: ['Draft', '-']},
                {flag: 'draft', title: 'Walk-Through ', type: "Secure Ledger Board", due_date: '9/12/2015', responsible: {name: 'Jim White', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Window Case'].join(', '), amount: 568786, status: ['Draft', '-']},
                {flag: 'draft', title: 'Discuss Schedule for September', due_date: '9/12/2015', responsible: {name: 'Earnie Rutland', company: ''},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Base '].join(', '), amount: 278907, status: ['Draft', '-']},
                {flag: 'draft', title: 'Follow Up on Code', due_date: '-', responsible: {name: '-', company: ''},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Fire Sprinker Rough In'].join(', '), amount: 9765, status: ['Draft', '-']},
                {flag: 'draft', title: 'Reminder to Input Bid', type: "Secure Ledger Board", due_date: '', responsible: {name: 'Brad Harrison', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Drywall'].join(', '), amount: 34566, status: ['Draft', '-']},
                {flag: 'draft', title: 'Required Primer', due_date: '-', responsible: {name: 'Mark Stevens', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Prime'].join(', '), amount: 2097, status: ['Draft', '-']}
            ],
            listCompleted: [
                {flag: 'completed', title: 'Follow Up on Steel Support', type: "Secure Ledger Board", due_date: '7/21/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Set Steel'].join(', '), amount: 7634, status: ['Completed', 1]},
                {flag: 'completed', title: 'Need to Install Sewer Pump', due_date: '7/14/2015', responsible: {name: 'Christine Spendlove', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['Rough Plumbing'].join(', '), amount: 54656, status: ['Completed', 1]},
                {flag: 'completed', title: 'Complete Rough Electical', type: "Secure Ledger Board", due_date: '7/9/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mike Riley', company: 'ABC Inc'}, sow: ['Rough Electrical'].join(', '), amount: 87533, status: ['Completed', 1]},
                {flag: 'completed', title: 'What is Rough Mechanical ', type: "Secure Ledger Board", due_date: '7/1/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Rough Mechanical'].join(', '), amount: 41093, status: ['Completed', 1]},
                {flag: 'completed', title: 'Site Prep', due_date: '6/30/2015', responsible: {name: 'Dale Guerra', company: ''},initiator: {name: 'Rebekah Brown', company: 'ABC Inc'}, sow: ['Pour Foundation'].join(', '), amount: 86422, status: ['Completed', 1]},
                {flag: 'completed', title: 'Verify Setup is Secure', due_date: '6/12/2015', responsible: {name: 'Adam Simpson', company: ''},initiator: {name: 'Dale Guerra', company: 'ABC Inc'}, sow: ['Form Foundation Walls'].join(', '), amount: 34343, status: ['Completed', 1]},
                {flag: 'completed', title: 'Measure Twice, Cut Once', type: "Secure Ledger Board", due_date: '6/9/2015', responsible: {name: 'Adam Simpson', company: 'ABC Inc'},initiator: {name: 'Dale Guerra', company: 'ABC Inc'}, sow: ['Form Footings'].join(', '), amount: 234534, status: ['Completed', 1]},
                {flag: 'canceled', title: 'Where is the Snow', type: "Secure Ledger Board", due_date: '7/16/2015', responsible: {name: 'Torben Moench', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: ''}, sow: ['Snow Removal'].join(', '), amount: 2123, status: ['Canceled', '-']},
                {flag: 'canceled', title: 'Interview Potential Admin', due_date: '7/5/2015', responsible: {name: 'Bruce Wayne', company: 'ABC Inc'},initiator: {name: 'Bruce Wayne', company: 'ABC Inc'}, sow: ['-'].join(', '), amount: 763, status: ['Canceled', '-']},
                {flag: 'canceled', title: 'What is a Submittal', due_date: '6/26/2015', responsible: {name: 'Josh Kimball', company: ''},initiator: {name: 'Steven Phillips', company: 'ABC Inc'}, sow: ['Submittals'].join(', '), amount: 1230, status: ['Canceled', '-']}
            ]
        }

    }]);