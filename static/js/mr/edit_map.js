var _num_bricks = 2;
var _brick_rotate_step = 5;
function EditMap( $scope ) {
    var _bricks = [];
    for( var i = 0; i < _num_bricks; i++ ) {
        _bricks.push(
        { rotation : 0 }
        );
    }

    var _getBrick = function(i) {
        var brick = _bricks[i];
        if( ! brick ) {
            return console.error( "no brick #" + i);
        }
        return brick;
    };
    
    var _blockPos = function( $index ) {
        var brick = _getBrick( $index );

    };
    
    angular.extend($scope,{
        bricks: _bricks,
        blockPos: _blockPos
    });

}
