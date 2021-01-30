// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
<<<<<<< HEAD
    production: false,
    firebase: {
        // Pour avoir ces clées-ci, il faut aller dans
        type: 'service_account',
        project_id: 'angular-tasky',
        private_key_id: '07de24ca4b9dd0eeeff9cd14cbafb5e47fd19787',
        private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCRj48GKyfcB1XM\nNYSooX0A2chKh6xKYlYunMSzx9pAIsjcj2vr6GDJto2/Mq/cOe7tUxZtiG6PPGN/\nUjyNdAZ3XUVXwRduy6KFLaVTaKpOhN7jLMwh098tum1MsxZ5t7GOWtbtcAEwIl7a\nsVhhOz6XOhmLYHK7z+5uym8SoFjrlI0lSpWkIFYFLJb7zYLml45w6UqsuQzeYn2V\n4nQKfL90NpnDXl6qzfHdbeYHPU0H+nm1bfAuOH8y67mZITlSYt03oxEa4oywPtXS\nSCsB2M5sLUkqEVSUXtLr33akdb/rEGOQ4gwmT2IKSt3iGjAorI3k3SlYhNv32Rvw\nscGoJGGhAgMBAAECggEAFt7AcQ6sx5Rbdade/YPJ+S0+m/8vIczLj61P9pNLBlKw\nzn62TS2Ir4jAQq87FFYB5UXtuy35eQXa+DE6lFsLfQupjn0nKmBSW6xtUmqaf5W+\n02DBffslELE+5RMqT9t9yUkahdnYRfDQiHne0gAV+HrHcq+ntzyXUM77nqiU8AZ9\nbvcA/57NSQNOPAyxzXbDNNkjKIJnjHT/TR7fenobfxpZUG3GhSNhDM8PHhsO2IG4\nuA5Ier/Po9HVHLbAtmKxQy2TeTRrj4f+jUSv9StMpK6Jm3X4KRoAnXo8MaUICiC9\ngj0ItFnaaS0qCy/qlcXq67Vu9iY1NVTjwNlmI+MjMQKBgQDEwGkBwD5wn2wBq1x+\nO+nmgSA08OpRm52DxcyBvAzTHJ6EkQe4RsNPDWZlNvBac9Ifc2xdwySop/F/00q8\nvfwNXdjUNigwjh334FOme6FVUafOhImZGmz4Q+tL+2K9lBkBQLW8zyJgqSMhrlqb\nXSVYJVYy+k22XxCejkzfBEWeJQKBgQC9ZNht9e/YhhUhpjDhAt+Puyt2Tg3tokYw\nCHev/eVYYq+qhV/AJkmuK3FXRA1HN+6LMOa7o1UD+WamGyqO2Xthl7yY9iI8zxOp\n1CPfmI7kIh/jKjPIuc9nKXYtGZFDpa8FWyxcbtrktp15akVXpKgvHpB3u72W7W88\nB5h/jzpmzQKBgQCHjYjLDAf4z905yTYQQncDuDLYRqMpVm1PPBeJymWLjUwpSUJo\nU1h8Pl8tnIw7xVAfGwauEqRPDmX0Cz6SitH844tfqXBHA6LiBEudh8+/WGKkhevG\n783jved+kdOViVMw6cRMMOkeb2kk61rBb4srD44z0P95hkWM970+aVMNgQKBgFk7\nExEzpw3vljMlVrAcp3HTcFWrzrogE0t8Ic/EInLzA+qmLgecwmgRxbOkt1DPlE71\n+i97c4mMzoUCFZn58zx2vf+fL2BQ++WusjwdZ20qerWPY5h1mrby/N+gxSUHAZ/X\nZd4iyHSraSQUIpl5VVfl4ZDX3iomsZqpxXqL46sdAoGAZX8DwDKq9f/zIRoxHpN1\ns2sN2ezpDCqs1xZjuZ4+c7f+JEPMPRmk+RQdniXlOqQW+yMw1JwjRS+Y5kyBbMHK\nxoQP5LAMElr04zAAF9+j/vpva33gWVjw0qR34enHpOLL6lb1f5yJZEaYqbW234sA\na297Pi4Sjbsx2o4gTR52S3M=\n-----END PRIVATE KEY-----\n',
        client_email: 'firebase-adminsdk-5tjb3@angular-tasky.iam.gserviceaccount.com',
        client_id: '107151355811185106721',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5tjb3%40angular-tasky.iam.gserviceaccount.com',

        // Pour avoir ces clées là, il faut aller dans 'Paramètre du projet' > 'Paramètres généraux' > Firebase SDK snippet > Configuration
        apiKey: 'AIzaSyBUTY4WXUUlQOb2mr0zuxxVI11D-HxjLCU',
        authDomain: 'angular-tasky.firebaseapp.com',
        projectId: 'angular-tasky',
        storageBucket: 'angular-tasky.appspot.com',
        messagingSenderId: '493767106126',
        appId: '1:493767106126:web:b03abc810fdf6ecae36d1f',
        measurementId: 'G-VN3HNBBPV3'
    }
};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
    apiKey: "AIzaSyBUTY4WXUUlQOb2mr0zuxxVI11D-HxjLCU",
    authDomain: "angular-tasky.firebaseapp.com",
    projectId: "angular-tasky",
    storageBucket: "angular-tasky.appspot.com",
    messagingSenderId: "493767106126",
    appId: "1:493767106126:web:b03abc810fdf6ecae36d1f",
    measurementId: "G-VN3HNBBPV3"
};*/

=======
  production: false
};

>>>>>>> f2c342c7fb5979df3e8016a779b95409e29cb3b0
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
