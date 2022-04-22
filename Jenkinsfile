pipeline {
  agent any
  stages {
    stage('Front Build') {
      steps {
        script {
          frontend = docker.build("goalgoru/frontend-hyoyoung")
        }

      }
    }

    stage('Front Push') {
      steps {
        script {
          docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
            frontend.push("latest")
            frontend.push("${BUILD_NUMBER}")

          }
        }

      }
    }

    stage('Docker Compose') {
      steps {
<<<<<<< HEAD
        sh '''docker stop $(docker ps -a -q)
'''
        sh 'docker rm $(docker ps -a -q)'
        sh 'cd /project/hyoyoung && docker-compose up -d'
=======
        sh 'docker stop $(docker ps -a -q)'
        sh 'docker rm $(docker ps -a -q)'
        sh 'cd /project && docker-compose up -d'
>>>>>>> develop
      }
    }

  }
  environment {
    registryCredential = 'dockerhub_cred'
  }
}