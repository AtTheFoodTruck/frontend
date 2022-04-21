pipeline {
  agent any
  stages {
    stage('Front Build') {
      steps {
        script {
          frontend = docker.build("goalgoru/frontend-myeongjun")
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
        sh 'cd /project/myeongjun && docker-compose up -d'
      }
    }

  }
  environment {
    registryCredential = 'dockerhub_cred'
  }
}