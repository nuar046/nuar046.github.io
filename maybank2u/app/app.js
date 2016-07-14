(function () {

    angular.module('app', ['ui.router', 'appCtrl', 'homeCtrl'])
        .run(function () {

        });

    angular.module('appCtrl', []).controller('appCtrl', function ($scope) {
        $scope.toggleMenu = function () {
            $("#wrapper").toggleClass("toggled");
        };

        $scope.toggleTopMenu = function () {
            $('#topNav li.active').removeClass('active');
            $('#topNav').closest('li').addClass('active');
        };

    });

    angular.module('homeCtrl', []).controller('homeCtrl', function ($scope) {
        $scope.test = "Test";
    });

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/app/homepage");

            $stateProvider
                .state('app', {
                    url: "/app",
                    templateUrl: "app/layout.html",
                    controller: 'appCtrl',
                    abstract: true
                })
                .state('app.homepage', {
                    url: "/homepage",
                    templateUrl: "app/homepage.html",
                    controller: 'homeCtrl'
                })
                .state('app.about', {
                    url: "/about",
                    templateUrl: "app/about.html"
                });
        })
        .directive(
            "mAppLoading",
            function ($animate) {
                return ({
                    link: link,
                    restrict: "C"
                });

                function link(scope, element, attributes) {
                    $animate.leave(element.children().eq(1)).then(
                        function cleanupAfterAnimation() {
                            element.remove();
                            scope = element = attributes = null;
                        }
                    );
                }
            }
        );



    angular.element(document).ready(function () {
        setTimeout(
            function asyncBootstrap() {
                angular.bootstrap(document, ['app']);
            }, (2 * 1000)
        );
    });
})();