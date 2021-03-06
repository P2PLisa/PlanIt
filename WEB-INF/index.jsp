<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>My AngularJS App</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="app/bower_components/html5-boilerplate/dist/css/normalize.css">
  <link rel="stylesheet" href="app/bower_components/html5-boilerplate/dist/css/main.css">
  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
  <link rel="stylesheet" href="app/app.css">
  <script src="app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js"></script>
  <!-- Angular Material requires Angular.js Libraries -->
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"></script>

  <!-- Angular Material Library -->
  <script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>

</head>
<body>
  <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

  <div ng-view></div>

  <!-- In production use:
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/x.x.x/angular.min.js"></script>
  -->

  <!--<script src="app/bower_components/angular/angular.js"></script>-->
  <script src="app/bower_components/angular-route/angular-route.js"></script>
  <script src="app/app.js"></script>
  <script src="app/login/login.js"></script>
  <script src="app/register/register.js"></script>
  <script src="app/landing/home.js"></script>
  <script src="app/projects/projects.js"></script>
  <script src="app/projects/create.js"></script>
  <script src="app/components/version/version.js"></script>
  <script src="app/components/version/version-directive.js"></script>
  <script src="app/components/version/interpolate-filter.js"></script>
</body>
</html>

