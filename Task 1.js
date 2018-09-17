let createPoint = function(x1, y1) {
let point = {};
point.x = x1;
point.y = y1;
// --------------------------------------------
point.distance = function(x2, y2) {
return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
};
// --------------------------------------------
point.angle = function (x2, y2) {
return 90 - radToDeg(Math.atan2(x2 - x1, y2 - y1));
}
// --------------------------------------------
function radToDeg(rad) {
return 180*rad/Math.PI;
}
return point;
}