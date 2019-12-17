pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh "npm install"
            }
        }
        stage('Tests') {
            steps {
                sh "npm run test:ci-culqi"
            }
            post {
                always {
                     junit testDataPublishers:[[$class: 'AttachmentPublisher']], testResults: "tests_output/**/*.xml"
                }
            }
        }
    }
}