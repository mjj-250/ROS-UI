angular.module('scenarioApp', [])
  .controller('ScenarioController', ['$scope', function ($scope) {
        $scope.leftLatitude = '';
        $scope.leftLongitude = '';
        $scope.rightLatitude = '';
        $scope.rightLongitude = '';
        $scope.leftDroneConfigs = [{ type: 'type1', configOption: 'config1', number: 0 }];
        $scope.rightDroneConfigs = [{ type: 'type1', configOption: 'config1', number: 0 }];
        $scope.leftMapButtonText = '加载地图';
        $scope.rightMapButtonText = '加载地图';

        $scope.loadMap = function (side) {
            // 模拟从.world文件获取经纬度，实际使用时需替换为真实的文件读取逻辑
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

        $scope.addDroneConfig = function (side) {
            if (side === 'left') {
                $scope.leftDroneConfigs.push({ type: 'type1', configOption: 'config1', number: 0 });
            } else {
                $scope.rightDroneConfigs.push({ type: 'type1', configOption: 'config1', number: 0 });
            }
        };

        $scope.removeDroneConfig = function (index, side) {
            if (side === 'left') {
                $scope.leftDroneConfigs.splice(index, 1);
            } else {
                $scope.rightDroneConfigs.splice(index, 1);
            }
        };
    }]);    