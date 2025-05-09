// 注意：这里不要重复定义模块，使用已有的'myApp'
angular.module('myApp')
  .controller('ScenarioEditController', ['$scope', function ($scope) {
        // 初始化数据模型
        $scope.leftLatitude = '';
        $scope.leftLongitude = '';
        $scope.rightLatitude = '';
        $scope.rightLongitude = '';
        $scope.leftDroneConfigs = [{ type: 'type1', configOption: 'config1', number: 0 }];
        $scope.rightDroneConfigs = [{ type: 'type1', configOption: 'config1', number: 0 }];
        $scope.leftMapButtonText = '加载地图';
        $scope.rightMapButtonText = '加载地图';

        // 定义业务逻辑方法
        $scope.itude = function (side) {
            // 模拟从.world文件获取经纬度
            const mockLatitude = '30.000';
            const mockLongitude = '120.000';

            if (side === 'left') {
                $scope.leftLatitude = mockLatitude;
                $scope.leftLongitude = mockLongitude;
                $scope.leftMapButtonText = '重新加载';
            } else {
                $scope.rightLatitude = mockLatitude;
                $scope.rightLongitude = mockLongitude;
                $scope.rightMapButtonText = '重新加载';
            }
        };

        
    }]);    