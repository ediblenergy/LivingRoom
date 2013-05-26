var _num_circles = 6;
function Studio($scope) {
    var _circles = [];
    var _leds = [];
    for (var i = 0; i < _num_circles; i++) {
        _circles.push({
            class: 'del' + i
        });
        _leds.push({
            class: 'led' + i
        });
    }
    angular.extend($scope, {
        circles: _circles,
        leds: _leds
    });
    return $scope;
}
