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
                        input (message: "Continue pipeline", ok: "Yes, Please")
                        echo "This is branch $TEST1_NAME"
                    },
                    Test2: {
                        echo "This is branch $TEST2_NAME"
                    }
                )
            }
        }
        stage('Init') {
            steps {
                slackSend channel: '@gjain', color: 'black', iconEmoji: 'flag-in', message: 'yeah science'
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
            environment {
                AN_ACCESS_KEY = "LOLLLL"
            }
            steps{
                dir("/tmp")
                {
                    unstash 'test'
                }
                sh 'echo failing ${AN_ACCESS_KEY}'
                archiveArtifacts(artifacts: '*', fingerprint: true)
            }
        }
    }
    post {
        always {
          archiveArtifacts(artifacts: '*', fingerprint: true)
        }
        success {
           sh 'echo Pipeline Success'
        }
        failure {
           mail bcc: '', body: 'Pipeline failed yes', cc: '', from: '', replyTo: '', subject: 'Lol Pipeline failed', to: 'garvit.jain@highskyit.com'
        }
    } 
    environment {
     PRINTOUT_NAME = 'ello There'
     TEST1_NAME = 'test 1 is good'
     TEST2_NAME = 'test 1 is good'
  }
}
