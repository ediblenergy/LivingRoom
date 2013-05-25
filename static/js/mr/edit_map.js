var _num_bricks = 10;
var _brick_rotate_step = 5;
function EditMap( $scope ) {
    $scope.direction = 1;
    $scope.flip_direction = function() {
        console.log( 'flip_direction');
        $scope.direction = $scope.direction * -1;
    }
    $scope.rotatedeg = 0;
    $scope.bricks = [];
    for( var i = 0; i < _num_bricks; i++ ) {
        $scope.bricks.push(
        { rotation : 0 }
        );
    }
    console.log( $scope.bricks );
    $scope.rotateMe = function( $index ) {
        console.log( 'click' );
        var brick = $scope.bricks[ $index ];
        if( !brick ) {
            return console.error( "brick out of scope" );
        }
        brick.rotation += _brick_rotate_step *  $scope.direction ;
        console.log( brick ) ;
        return $scope;
    };
    $scope.rotated = function( $index ) {
        return {'-webkit-transform' : 'rotateY(' +  $scope.bricks[ $index ].rotation + 'deg )' };
    }
}
