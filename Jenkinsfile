pipeline {
    triggers {
        pollSCM('') // Enabling being build on Push
    }
    agent {
        docker { 
            image 'node:16.13.1-alpine' 
            args '--name node-container'
        }
    }
    stages {
        stage('Test') {
            steps {
               sh 'node -e "console.log(\'hello world\')";'
            }
        }
    }
}
