
pipeline {

    agent any

    stages {

        stage("Deploy") {
            steps {
                publishOverSsh {
                    server('docker-host') {
                        transferSet {
                            execCommand('docker images')
                        }
                    }
                }
            }
        }
    }
}