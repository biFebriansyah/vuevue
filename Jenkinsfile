
pipeline {

    agent any

    parametes {
        booleanParam(name: 'RUNTEST', defaultValue: true, description: 'Toggle this value fro testing')
        choice(name: 'CICD', choices: ['CI', 'CICD'], description: 'Pick something')
    }

    stages {

        stage('Build Project') {
            step {
                echo 'build...'
            }
        }

        stage('Run Testing') {
            when {
                expression {
                    params.RUNTEST
                }
            }
            step {
                echo 'Testing...'
            }
        }

        stage('Deploy') {
            when {
                expression {
                    params.CICD == 'CICD'
                }
            }

            step {
                echo 'Deploy...'
            }
        }
    }
}