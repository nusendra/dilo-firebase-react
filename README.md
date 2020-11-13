### Steps

- setting up firebase project  
- setup firebase realtime db  
- setup and enable gmail authentication  
- setup and enable email/password authentication  
- project overview, project setting, add firebase to web app  

```
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAtK0akO01LLj_EKvr9hOWi1kkgKAb9YA4",
    authDomain: "dilo-firebase-react-native.firebaseapp.com",
    databaseURL: "https://dilo-firebase-react-native.firebaseio.com",
    projectId: "dilo-firebase-react-native",
    storageBucket: "dilo-firebase-react-native.appspot.com",
    messagingSenderId: "971825074095",
    appId: "1:971825074095:web:d16678208683b811cb695a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
```

- npx create-react-app dilo-firebase-react
-
