def builderImage
def CommitHash

pipeline {

    agent any

    parameters {
        string(name: 'HELLO', defaultValue: 'HalloFromParams', description: 'blabla')
        booleanParam(name: 'RUNTEST', defaultValue: 'true', description: 'blabla')
        choice(name: 'CICD', choices: ['CI', 'CIANDCD'], description: 'blabla')
    }

    stages {
        
        stage("Intall depdencies") {
            steps {
                echo 'parameters = ${params.HELLO}'
            }
        }

        stage("build") {
            steps {
                echo 'RUNTEST is : ${params.RUNTEST}'
            }
        }

        stage("test") {
            when {
                expression {
                    params.RUNTEST
                }
            }
            steps {
                echo "Testing Run"
            }
        }

        stage("Deploy") {
            when {
                expression {
                    params.CICD == 'CIANDCD'
                }
            }
            steps {
                echo "Deploying run"
            }
        }
    }
}