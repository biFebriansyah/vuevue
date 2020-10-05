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

        stage("Deploy") {
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'docker-host',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: '
                                            docker pull bukanebi/vuevue:master;
                                            docker kill vuevue; 
                                            docker run -d --rm --name vuevue -p 8080:80 bukanebi/vuevue:master
                                        ',
                                        execTimeout: 120000,
                                    )
                                ]
                            )
                        ]
                    )

                }
            }
        }
    }
}