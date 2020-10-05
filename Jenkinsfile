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
                builderImage = docker.build("bukanebi/vuevue:${GIT_COMMIT_HASH}")
            }
        }

        stage("test") {
            steps {
                builderImage.inside {
                    sh 'echo passed'
                }
            }
        }

        stage("Push Image") {
            steps {
                builderImage.push()
                builderImage.push("env.BUILD_NUMBER")
            }
        }
    }
}