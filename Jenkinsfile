def builderImage
def CommitHash

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
                    CommitHash = sh (script: "git log -n 1 --pretty=format:'%H'", returnStdout: true)
                    builderImage = docker.build("bukanebi/vuevue:${CommitHash}")          
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
                    builderImage.push("${env.GIT_BRANCH}")
                }
            }
        }
    }
}