pipeline {
    triggers {
        githubPush() // Enabling being build on Push
    }
    agent {
        docker { 
            image 'node:16.13.1-alpine' 
            args '--name node-container'
        }
    }
    stages {
        parallel(
        Test1: {
            echo "This is branch $TEST1_NAME"
        },
        Test2: {
            echo "This is branch $TEST2_NAME"
        }
        )
        stage('Test') {
            steps {
               sh 'node -e "console.log(\'hello $PRINTOUT_NAME\')";'
               archiveArtifacts(artifacts: '*', fingerprint: true)
            }
        }
    }
    environment {
     PRINTOUT_NAME = 'ello There'
     TEST1_NAME = 'test 1 is good'
     TEST2_NAME = 'test 1 is good'
  }
}
