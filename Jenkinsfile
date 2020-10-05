pipeline {

    agent any

    stages {

        stage("build") {
            steps {
                echo 'buil step run'
            }
        }
        stage("test") {
            steps {
                echo 'test step run'
            }
        }
        stage("deploy") {
            steps {
                echo 'deploy step run'
            }
        }
    }
    post {
        always {
            // always run this stage
        }
        success {
            // run if all job success
        }
        failur {
            // run if job failed
        }
    }
}