pipeline {
  agent any
  stages {
    stage('Build and Run') {
      steps {
        script {
          docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            sh 'docker pull hello-world'
            sh 'docker run hello-world'
          }
        }
      }
    }
  }
}
