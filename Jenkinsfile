pipeline {
  agent any
  stages {
    stage('Restore') {
      steps {
        bat 'dotnet restore .\\\\server\\\\my-app-api.sln'
      }
    }

    stage('Clean') {
      steps {
        bat 'dotnet clean .\\\\server\\\\my-app-api.sln --configuration Release'
      }
    }

    stage('Build') {
      steps {
        bat 'dotnet build .\\\\server\\\\my-app-api.sln --configuration Release --no-restore'
      }
    }

    stage('Publish') {
      steps {
        bat 'dotnet publish .\\\\server\\\\my-app-api\\\\my-app-api.csproj --configuration Release --no-restore'
      }
    }

    stage('Notify Finish') {
      steps {
        mail(subject: 'Build', body: 'Build Finished', charset: 'UTF-8', from: 'deliri0us1357@gmail.com', to: 'altun.mursalov00@gmail.com')
      }
    }

  }
  environment {
    ASPNETCORE_ENVIRONMENT = 'Production'
  }
}