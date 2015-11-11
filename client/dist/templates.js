angular.module("typr").run(["$templateCache", function($templateCache) {$templateCache.put("button/button.html","\n<button ng-click=\"clicked()\"> <i class=\"glyphicon glyphicon-plus\"></i></button>");
$templateCache.put("about/about.html","");
$templateCache.put("global/global.html","\n<div class=\"col-sm-12\">\n  <h1>Filters</h1>\n</div>\n<div class=\"col-sm-12\">\n  <h1>Top Users</h1>\n</div>");
$templateCache.put("header/header.html","\n<div class=\"row header\">\n  <div class=\"col-sm-2 logo\"><i class=\"fa fa-keyboard-o\"></i><span class=\"logo\">TYPR</span></div>\n  <div ng-repeat=\"link in links\" ui-sref=\"{{link.state}}\" ng-class=\"{selected: link.selected}\" ng-click=\"select(link)\" class=\"link col-sm-2\"> <i class=\"{{link.icon}}\"> </i>{{link.title}}</div>\n</div>");
$templateCache.put("main/main.html","\n<div class=\"container-fluid\">\n  <typr-header links=\"links\"></typr-header>\n  <div class=\"row\">\n    <div ui-view=\"page\" class=\"col-sm-12 main\"></div>\n  </div>\n</div>");
$templateCache.put("profile/profile.html","");
$templateCache.put("reports/reports.html","\n<div class=\"row\">\n  <div class=\"col-md-2 snippit-list no-pad pt2 full\">\n    <div ng-click=\"openModal()\" class=\"snippit new\"><span class=\"glyphicon glyphicon-plus\"> </span><span>New Snippit</span></div>\n    <div ng-repeat=\"snippit in snippits track by snippit.id\" ng-click=\"snippitClicked(snippit)\" ng-class=\"{selected: snippit.selected}\" class=\"snippit\"> <span>{{snippit.name}} </span>\n      \n    </div>\n  </div>\n  <div class=\"col-md-10 content full\">\n    <div class=\"row\">\n      <div class=\"col-md-12\"> \n        <h1>{{snippit.name}}</h1>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"col-md-12\">\n          <h2>Accuracy</h2>\n          <canvas chart-labels=\"charts.accuracy.labels\" chart-legend=\"false\" chart-series=\"charts.accuracy.series\" chart-data=\"charts.accuracy.data\" ng-show=\"charts.accuracy.data[0].length &gt; 0\" class=\"chart chart-line\"></canvas>\n        </div>\n        <div class=\"col-md-12\">\n          <h2>CPM</h2>\n          <canvas chart-labels=\"charts.cpm.labels\" chart-legend=\"false\" chart-series=\"charts.cpm.series\" chart-data=\"charts.cpm.data\" ng-show=\"charts.cpm.data[0].length &gt; 0\" class=\"chart chart-line\"></canvas>\n        </div>\n        <div class=\"col-md-12\">\n          <h2>Time</h2>\n          <canvas chart-labels=\"charts.time.labels\" chart-legend=\"false\" chart-series=\"charts.time.series\" chart-data=\"charts.time.data\" ng-show=\"charts.time.data[0].length &gt; 0\" class=\"chart chart-line\"></canvas>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <h2>Reports</h2>\n        <div ng-repeat=\"report in reports | orderBy:\'time\':true track by report.id\" ng-click=\"reportClicked(report)\" ng-class=\"{selected: report.selected}\" class=\"report\"> \n          <h3>{{report.date | amCalendar}}</h3>\n          <h5>Chars Per Minute (CPM): {{report.charsPerMin}}</h5>\n          <h5>Tokens Per Minute (TPM): {{report.tokensPerMin | number: 0}}</h5>\n          <h5>Accuracy: {{report.accuracy | number:2}}% (Correct {{report.correct}} / Total: {{report.strokes}}))</h5>\n          <h5>Seconds Elapsed: {{report.secElapsed}}</h5>\n          <h5>Average Token Length: {{report.averageTokenLen | number:1}}</h5>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h2>Snippit Preview</h2>\n        <pre class=\"preview\">{{snippit.code}}</pre>\n        <button ng-click=\"openTypingModal()\" class=\"start-practice\"> <i class=\"glyphicon glyphicon-flag\"></i>Start Pratice! </button>\n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("reports/upload_modal.html","\n<div class=\"typr-upload centered\">\n  <h1> <span class=\"glyphicon glyphicon-cloud-upload\"></span></h1>\n  <h2>Upload a Snippit</h2>\n  <typr-upload upload-clicked=\"upload\"></typr-upload>\n</div>");
$templateCache.put("snippits/snippits.html","\n<div class=\"col-sm-12\">\n  <h2>Filters</h2>\n  <div ng-repeat=\"type in types\" ng-click=\"select(type)\" ng-class=\"{selected: type.selected}\" class=\"filter col-sm-2\"><i class=\"glyphicon glyphicon-book\"></i>{{type.name}}</div>\n</div>\n<div class=\"col-sm-12\">\n  <h2>Snippits</h2>\n  <div ng-repeat=\"snippit in snippits | where : {type: filter}\" class=\"snippit col-sm-4\"> \n    <h2>{{snippit.name}} ({{snippit.type}})</h2>\n    <pre>{{snippit.code}}</pre>\n    <button ng-click=\"openSnippit(snippit)\" class=\"practice\"><i class=\"glyphicon glyphicon-flag\"></i>Pratice</button>\n  </div>\n</div>\n<typr-button clicked=\"showUpload()\"></typr-button>");
$templateCache.put("typing/typing_directive.html","\n<div>\n  <input autofocus=\"autofocus\" ng-blur=\"blur()\" ng-model=\"text\" ng-keypress=\"keypress($event)\" class=\"type\"/>\n</div>\n<div class=\"code\"></div>");
$templateCache.put("typing/typing_modal.html","\n<div class=\"typr-typing\">\n  <h1 class=\"centered\"><span class=\"glyphicon glyphicon-hourglass\"></span></h1>\n  <h2 class=\"centered\">{{snippit.name}} </h2>\n  <h2 ng-hide=\"countdown\" class=\"centered\">{{elapsed}}s Elapsed</h2>\n  <h2 ng-show=\"countdown\" class=\"centered\">Starts In {{countdown}}s!</h2>\n  <typr-typing snippit=\"snippit\" is-typing=\"isTyping\" done=\"done\" elapsed=\"elapsed\" countdown=\"countdown\"></typr-typing>\n</div>");
$templateCache.put("upload/upload_directive.html","\n<div class=\"col-sm-12 centered\">\n  <input name=\"name\" ng-model=\"name\" placeholder=\"Name of your Snippit\" class=\"name centered\"/>\n</div>\n<div class=\"col-sm-12 centered\">\n  <textarea ng-model=\"code\" class=\"type\"></textarea>\n</div>\n<div class=\"col-sm-12 centered\">\n  <button ng-click=\"canUpload() &amp;&amp; upload() &amp;&amp; uploadClicked()\" ng-class=\"{disabled: !canUpload()}\" ng-diabled=\"!canUpload()\" class=\"col-sm-12 btn btn-primary\">Upload</button>\n</div>");
$templateCache.put("upload/upload_modal.html","\n<div class=\"typr-upload centered\">\n  <h1> <span class=\"glyphicon glyphicon-cloud-upload\"></span></h1>\n  <h2>Upload a Snippit</h2>\n  <typr-upload upload-clicked=\"upload\"></typr-upload>\n</div>");}]);