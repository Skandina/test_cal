pipeline {
   agent { 
     docker { image 'node:14-alpine' } 
   }
   stages {
     stage('Prebuild') {
      steps {
	echo 'prebuild'
	sh 'node --version'
      }
     }
     stage('Test') {
      steps {
	echo 'test'
      }
     }
      stage('Postbuild') {
       steps {
	echo 'postbuild'
	sh 'node --version'
       }
      }
 
   }
}
