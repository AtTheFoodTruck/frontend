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

  }
  environment {
    registryCredential = 'dockerhub_cred'
  }
}