pipeline {
  agent {
    docker {
      image 'docker:latest'
      args '-u root'
    }
  }
  stages {
    stage('Build and Run') {
      steps {
        sh 'docker run hello-world'
      }
    }
  }
}
