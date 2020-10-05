
pipeline {

    agent any

    stages {

        stage("Deploy") {
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'docker-host,
                                verbose: false
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'docker images',
                                        execTimeout: 120000,
                                    )
                                ],
                            )
                        ]
                    )

                }
            }
        }
    }
}

