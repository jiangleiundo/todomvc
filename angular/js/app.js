(function (angular) {
    'use strict';
    let app = angular.module('App', []);
    app.controller('todoCtrl', ['$scope', function ($scope) {

        // 文本框模型
        $scope.txt = '';
        // 任务列表
        $scope.todoList = [
            {id: 1, name: 'eat dinner', completed: false},
            {id: 2, name: 'sleep well', completed: false},
            {id: 3, name: 'beat dou dou', completed: true}
        ];

        // 使用ng-submit可以按enter触发addTodo()提交数据
        $scope.addTodo = function () {
            // 如果输入的任务为空，直接返回
            if (!$scope.txt) return;

            // 每次的id都是最大的id+1，保证id唯一性，有任务列表就取最大id，没有默认为0。
            let maxId = $scope.todoList.length && $scope.todoList[$scope.todoList.length - 1].id || 0;
            let newTodo = {
                id: maxId + 1,
                name: $scope.txt,
                completed: false
            };
            $scope.todoList.push(newTodo);
            $scope.txt = '';
        };

        // 删除一条数据
        $scope.rmTodo = function (index) {
            $scope.todoList.splice(index, 1);
        };

        // 删除已经完成的
        $scope.rmCompleted = function () {
            // let arr = $scope.todoList;
            // for (let i = arr.length - 1; i > 0; i--) {
            //     if(arr[i].completed){
            //         arr.splice(i, 1)
            //     }
            // }

            $scope.todoList = $scope.todoList.filter(item => !item.completed);
        };

        // 进入编辑状态
        $scope.curID = -1; // 设置默认当前编辑的id为-1（默认给一个不存在的id）
        $scope.editTodo = function (item){
            $scope.curID = !item.completed && item.id
        };

        // 点击Enter结束编辑状态
        $scope.endEditing = function (){
            $scope.curID = -1;
        };

        // 是否全选
        $scope.selAll = false;
        // 切换选中状态
        $scope.switchSel = function (){
            $scope.todoList.forEach(item => {
                item.completed = $scope.selAll
            })
        };

        // 过滤器
        $scope.isActive = ''; // 默认展示是全部数据
        $scope.showAll = function (e){
            e.preventDefault();
            $scope.isActive = ''
        };
        $scope.showActive = function (e){
            $scope.isActive = false;
            e.preventDefault()
        };
        $scope.showCompleted = function (e){
            e.preventDefault();
            $scope.isActive = true
        };
    }])

})(angular);
