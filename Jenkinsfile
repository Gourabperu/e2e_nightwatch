pipeline {
    agent {
        docker {
            image "qaninja/node-wd"
        }
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install"
            }
        }
        stage('Tests') {
            steps {
                sh "npm run test:ciculqi"
            }
            post {
                always {
                     junit testDataPublishers:[[$class: 'AttachmentPublisher']], testResults: "tests_output/**/*.xml"
                }
            }
        }
    }
}