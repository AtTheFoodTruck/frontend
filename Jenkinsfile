pipeline {
  agent any
  stages {
    stage('Front Build') {
      steps {
        script {
          frontend = docker.build("goalgoru/frontend-hyoyoug")
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
        sh 'cd /project/hyoyoung && docker-compose up -d'
        sh 'cd /project && docker-compose down'
      }
    }

  }
  environment {
    registryCredential = 'dockerhub_cred'
  }
}