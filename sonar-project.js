const sonarqubeScanner = require('sonarqube-scanner');
  sonarqubeScanner({
    serverUrl: 'http://192.168.18.159:9000',
    options : {
      'sonar.sources': '.',
      //'sonar.inclusions' : '.' // Entry point of your code
      }
      }, () => {});
