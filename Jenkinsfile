pipeline {
     agent {
       docker { image: 'node:14-alpine' }
     stages {
       stage('Prebuild') {
	 steps {
	    sh 'npm install'
	}
       }
       stage('Test') {
	steps {
	  sh 'npm run unit-test'
 	} 
       }
       stage('Integration') {
	steps {
	   sh 'npm run integration-test'
	}
       }
     }
    } 
}     

