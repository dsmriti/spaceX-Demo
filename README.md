# SpaceX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Contents
 <ul>
  <li><a href="#introduction">Introduction</a></li>
  <li>
    <a href="#application-overview">Application Overview</a>
    <ul>
      <li><a href="#frameworks">Frameworks</a></li>
      <li><a href="#design-approach">Design Approach</a></li>
      <li><a href="#backend">Backend</a></li>
    </ul>
  <li>
    <a href="#deployment">Deployment</a>
    <ul>
      <li><a href="#built-files">Built Files</a></li>
      <li><a href="#development-server">Development Server</a></li>
      <li><a href="#gitub-pages-configuartion">Gitub Pages Configuartion</a></li>
      <li><a href="#ci-pipeline">CI Pipeline</a></li>
    </ul>
  </li>
  <li><a href="#running-unit-tests">Running unit tests</a></li>
  <li><a href="#running-end-to-end-tests">Running end-to-end tests</a></li>
   <li>
    <a href="#lighthouse-report">LightHouse Report</a>
    <ul>
      <li><a href="#desktop">Desktop</a></li>
      <li><a href="#mobile">Mobile</a></li>
    </ul>
  <li>
</ul>

# Introduction

A front-end application which would help users list and browse all launches by SpaceX program.
![alt text](https://raw.githubusercontent.com/dsmriti/spaceX-Demo/master/src/assets/homepage.png)

# Application Overview

## Frameworks

For this application, Angular framework is used. Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.

## Design Approach

Design for this application made keeping the responsive approach using flexbox and media query.
No frameworks like bootstrap is used, only basic CSS is being used.

## Backend

API end point for the first-time page load without any Filters: https://api.spaceXdata.com/v3/launches?limit=100

API end point with Filters applied:
Launch Success Filter:
https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true

Launch & Land Filter:
https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true

All:
https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014

# Deployment

## Built Files

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. This is by default given by Angular.
For this application, this command is being used `ng build --prod --baseHref="https://dsmriti.github.io/spaceX-Demo/"` in order to make directly deployable using gh-pages(given by github).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Gitub Pages Configuartion

You need to make settings in github repository to make application deployed on github pages. You can go to Settings tab> GitHub Pages, select you branch and folder where built files are generated.

![alt text](https://raw.githubusercontent.com/dsmriti/spaceX-Demo/master/src/assets/setting_ghpages.png)

## CI Pipeline

After doing the above changes, add the built files to docs folder and make the path set to `"outputPath": "docs/"` in angular.json file. Save the changes and push code to repository. You can now view the changes as it is now published.

![alt text](https://raw.githubusercontent.com/dsmriti/spaceX-Demo/master/src/assets/deployment_view.png)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Unit testing done using Karma for this application as shown in below image.
![alt text](https://raw.githubusercontent.com/dsmriti/spaceX-Demo/master/src/assets/karma_unit_test.png)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# LightHouse Report

## Desktop
![alt text](https://raw.githubusercontent.com/dsmriti/spaceX-Demo/master/src/assets/lighthouse_desktop.png)

## Mobile
![alt text](https://raw.githubusercontent.com/dsmriti/spaceX-Demo/master/src/assets/lighthouse_mobile.png)

