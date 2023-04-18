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
               bash -c 'docker exec node-container node --version'
            }
        }
    }
}
