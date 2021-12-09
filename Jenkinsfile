pipeline {
  agent any
  stages {
    stage('Restore') {
      steps {
        sh 'dotnet restore ./server/my-app-api.sln'
      }
    }

    stage('Clean') {
      steps {
        sh 'dotnet clean ./server/my-app-api.sln --configuration Release'
      }
    }

    stage('Build') {
      steps {
        sh 'dotnet build ./server/my-app-api.sln --configuration Release --no-restore'
      }
    }

    stage('Publish') {
      steps {
        sh 'dotnet publish ./server/my-app-api/my-app-api.csproj --configuration Release --no-restore'
      }
    }

    stage('Deploy') {
      steps {
        sh '''\'\'for pid in $(lsof -t -i:5000); do
                       kill -9 $pid
               done\'\''''
        sh 'cd ./server/my-app-api/bin/Release/net5.0/publish/'
      }
    }

  }
  environment {
    ASPNETCORE_ENVIRONMENT = 'Production'
  }
}