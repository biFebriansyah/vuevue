def builderImage

pipeline {

    agent any

    stages {
        
        stage("Intall depdencies") {
            steps {
                nodejs("node12") {
                    sh 'npm install'
                }
            }
        }

        stage("build") {
            steps {
                script{
                    builderImage = docker.build("bukanebi/vuevue:${GIT_COMMIT_HASH}")          
                }
            }
        }

        stage("test") {
            steps {
                script {
                    builderImage.inside {
                        sh 'echo passed'
                    }
                }
            }
        }

        stage("Push Image") {
            steps {
                script {
                    builderImage.push()
                    builderImage.push("env.BUILD_NUMBER")
                }
            }
        }
    }
}