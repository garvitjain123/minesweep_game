pipeline {
    agent {
        docker { 
            image 'node:16.13.1-alpine' 
            args '--name node-container'
        }
    }
    stages {
        stage('Test') {
            steps {
               sh 'docker exec node-controller node --version'
            }
        }
    }
}
