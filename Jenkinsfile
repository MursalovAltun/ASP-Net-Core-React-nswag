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

    stage('Run') {
      steps {
        bat 'dotnet .\\\\server\\\\my-app-api\\\\bin\\\\Release\\\\net5.0\\\\my-app-api.dll'
      }
    }

  }
  environment {
    ASPNETCORE_ENVIRONMENT = 'Production'
  }
}