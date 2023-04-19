pipeline {
    triggers {
        githubPush() // Enabling being build on Push
    }
    agent {
        docker { 
            image 'node:16.13.1-alpine' 
            args '--name node-container -v /tmp:/out'
        }
    }
    stages {
        stage('Parallel - test')
        {
            steps{
                parallel(
                    Test1: {
                        echo "This is branch $TEST1_NAME"
                    },
                    Test2: {
                        echo "This is branch $TEST2_NAME"
                    }
                )
            }
        }
        stage('Test') {
            steps {
               sh 'node -e "console.log(\'hello $PRINTOUT_NAME\')";'
               sh 'echo "test here we are" > test.txt'
               dir("/tmp") {
                stash includes: '**', name: 'test', useDefaultExcludes: false
               }
            }
        }
        stage('Lopside'){
            steps{
                dir("/tmp")
                {
                    unstash 'test'
                }
                sh 'cat test.txt'
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
