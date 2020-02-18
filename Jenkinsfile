pipeline{

    agent any

    stages{

        stage('compile'){

            steps{

                sh "mvn clean compile"

            }       

        }

        stage('test'){

            steps{

                sh "mvn clean test"

            }

        }

        stage('package'){

            steps{

                sh "mvn clean package"

            }

        }

    }

}
