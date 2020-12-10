pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('Build') {
      steps {
        git branch: '**', url: 'https://github.com/vijet2000/jenkin.git'

        echo 'Hello Building'
      }}
       stage('Test') {
      steps {
        git branch: '**', url: 'https://github.com/vijet2000/jenkin.git'

        echo 'Hello Testing'
  }}}}
